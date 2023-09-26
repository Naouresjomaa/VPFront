import { formatDate } from "@angular/common";
import { Component, OnInit,TemplateRef } from "@angular/core";
import { Router } from "@angular/router";
import { CommandeService } from "src/app/services/commande.service";
import { DataService } from "src/app/services/data.service";
import { CommandeModel } from "src/app/services/model/Commande.model";
import { PanierModel } from "src/app/services/model/Panier.model";
import { PanierService } from "src/app/services/panier.service";
import { ProduitService } from "src/app/services/produit.service";
import { JwtHelperService } from '@auth0/angular-jwt';
import { StorageService } from "src/app/services/storage.service";

@Component({
    selector: "app-cart",
    templateUrl: "./cart.component.html",
    styleUrls: ["./cart.component.scss",
    '../shop-brand/css/bootstrap.min.css',"../shop-brand/css/font-awesome.min.css","../shop-brand/css/elegant-icons.css"
    ,"../shop-brand/css/magnific-popup.css","../shop-brand/css//nice-select.css","../shop-brand/css/owl.carousel.min.css","../shop-brand/css/slicknav.min.css","../shop-brand/css/style.css"],
})
export class CartComponent implements OnInit {
    paniers:PanierModel[]=[]
    nbrpanier:any=0
    prixTotale:any
    Email:any
    Username:any
    q:any
    id :any
     valeur = localStorage.getItem('isLoggedin');
    constructor(
        private dataservice: DataService,
        private panierservice: PanierService,
        private produitservice: ProduitService,
        private router: Router,
        private commandeservice: CommandeService,
        private jwtHelper: JwtHelperService,
        private storageService : StorageService
    ) {}
    decodeToken() {
        const token = localStorage.getItem('isLoggedin');
        const decodedToken = this.jwtHelper.decodeToken(token);
        this.Email=decodedToken.Email
        this.Username=decodedToken.UserName
        console.log( this.Email,this.Username)
        console.log(decodedToken);
      }
    ngOnInit(): void {
        this.decodeToken()
        this.getPanier()
      
      
    }
   
    getPanier(){
        this.panierservice.Getpanier(this.Email,this.Username).subscribe((res:any)=>
       {
        this.paniers=res;
        console.log('this.paniers',this.paniers)
         this.getTotal(this.paniers);
        
        this.nbrpanier=this.paniers.length
       } )
        
    }
    getTotal(pan) {
        this.prixTotale = 0;
        for(let x of pan) {
            console.log(x.PrixUnitaire)
         this.prixTotale +=x.PrixTotale
        }
        this.prixTotale +=8;
        console.log(this.prixTotale)
    }
    
    GetQte($event,p){}
    DletePanier(p){
        this.panierservice.Removepanier(p).subscribe(res => {
            let nbr = Number(localStorage.getItem('panier') || '0');
            nbr -=1;
            this.storageService.setPanier( nbr)
            
            this.paniers = this.paniers.filter(panier => panier.id !== p);
        },
        err => {
            console.error('Erreur lors de la suppression du panier:', err);
        }
            )
    }
    modifierQuantite(valeur,i): void {
        console.log(i)
        if(valeur == '1'){
          this.paniers[i].Quantite += 1;
          this.paniers[i].PrixTotale=this.paniers[i].Quantite*this.paniers[i].PrixUnitaire 
          this.getTotal(this.paniers)
          this.panierservice.UpdatePanier(this.paniers[i].id ,this.paniers[i]).subscribe(res=>(console.log(res)))
        }
        if(valeur == '-1' && (this.paniers[i].Quantite>0)){
            this.paniers[i].Quantite -= 1;
            this.paniers[i].PrixTotale=this.paniers[i].Quantite*this.paniers[i].PrixUnitaire
            this.getTotal(this.paniers)
            this.panierservice.UpdatePanier(this.paniers[i].id ,this.paniers[i]).subscribe(res=>(console.log(res)))

        }
      }
   
    passerCaisse() {
        for (let x of this.paniers){
            console.log(x)
            if(x.Quantite == 0){
                this.DletePanier(x.id)
            }
            
        }
        this.router.navigate(['/shop-panier']);  
        
      }

      //modal infos

}

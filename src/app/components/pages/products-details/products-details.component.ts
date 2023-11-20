import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BrandService } from 'src/app/services/brand.service';
import { DataService } from 'src/app/services/data.service';
import { PanierModel } from 'src/app/services/model/Panier.model';
import { PanierService } from 'src/app/services/panier.service';
import { ProduitService } from 'src/app/services/produit.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import Swal from "sweetalert2";
import { StorageService } from 'src/app/services/storage.service';
import { MatDialog } from '@angular/material/dialog';
import { PopupComponent } from '../popup/popup.component';
@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.scss']
})
export class ProductsDetailsComponent implements OnInit {
  nbrPointure:any;
  nbrTaille:any;
  id:any;
  selectedSize: any = null;
  selectedTaille:any=''
    data: any;
    product: any;
    nbrprod: any;
    userData: any;
    token: any;
    Loggedin: any;
    Username: any;
    Email: any;
    parametres: any;
    produit: any;
    panier = new PanierModel();
    response: any;
    response1: any;
  quantite: any;
  valeur = localStorage.getItem('isLoggedin');
  paniercount: any=0;
  constructor(
    private route: ActivatedRoute,
    private brandservice: BrandService,
    private produitservice: ProduitService,
    private dataservice: DataService,
    private panierservice: PanierService,
    private cdr: ChangeDetectorRef,
    private jwtHelper: JwtHelperService,
    private storageService : StorageService,
    private dialog: MatDialog
    ) { }
    decodeToken() {
      const token = localStorage.getItem('isLoggedin');
      const decodedToken = this.jwtHelper.decodeToken(token);
      this.panier.Email=decodedToken.Email
      this.Email = decodedToken.Email
      this.panier.UserName=decodedToken.UserName
      this.Username=decodedToken.UserName
      console.log(this.panier.Email,this.panier.UserName)
      console.log(decodedToken);
    }
  ngOnInit() {
    this.id=this.route.snapshot.params.id;
    this.GetProduct();
    this.panier.Quantite=1;
    this.decodeToken()
  }
  GetProduct(){
    this.produitservice.getProduitByid(this.id).subscribe((res:any)=>{
        this.produit=res[0];
        this.nbrPointure=this.produit.pointure ? this.produit.pointure[0].length : 0 ;
        this.nbrTaille=this.produit.Taille ? this.produit.Taille[0].length : 0;
        console.log('thiq=s.produiiiiiiiiiiiiit',this.produit,this.nbrPointure,this.nbrTaille)

    })
  }
  selectTaille(taille: string) {
    this.panier.taille = taille;
    console.log('this.selectedTaille',this.panier.taille)
}
selectPointure(pointure: string) {
  this.panier.pointure = pointure;
  console.log('this.selectedPointure',this.panier.pointure)
}
modifierQuantite(valeur): void {
  if(valeur == '1'){
    this.panier.Quantite += 1;
  }
  if(valeur == '-1'){
    if(this.panier.Quantite > 0){
      this.panier.Quantite -= 1;
    }
    
  }
}
  Topanier(prod: any) {
    
    if(!this.Email && !this.Username){
      
        this.dialog.open(PopupComponent ,{
          width: '70%',
          panelClass: 'custom-dialog-container',
        });
       
      }
    else if(!this.panier.taille && this.produit.categorie=="Mode"){
      Swal.fire({
        position: "center",
        title: "selectionnez une taille svp !",
        text: "",
        showConfirmButton: false,
        timer: 1200,
        icon: "error",
    });
    }
    else if(!this.panier.pointure && this.produit.categorie=="Chaussure"){
      Swal.fire({
        position: "center",
        title: "selectionnez une pointure svp !",
        text: "",
        showConfirmButton: false,
        timer: 1200,
        icon: "error",
    });
    }
    else{if (true) {
      if (true) {
          this.panier.Produit = prod.Produit;
          this.panier.ProdDetails = prod;
          this.panier.PrixUnitaire = prod.PrixR;
          this.panier.PrixTotale = 
              this.panier.PrixUnitaire * this.panier.Quantite
              console.log('proddddddddddddd',this.panier)
                      this.panierservice
                          .AddPanier(this.panier)
                          .subscribe((res) => {
                              this.response1 = res;
                              if (
                                  this.response1.message ==
                                  "Panier créé avec succès"
                              ) {
                                this.paniercount = Number(localStorage.getItem('panier') || '0');
                                this.paniercount+=1;
                                this.storageService.setPanier(this.paniercount)
                                //localStorage.setItem('panier', this.paniercount.toString());
                                  Swal.fire({
                                      position: "center",
                                      title: "Produit ajouté au panier",
                                      text: "",
                                      showConfirmButton: false,
                                      timer: 800,
                                      icon: "success",
                                  });
                                  this.cdr.detectChanges();
                                  this.panier.Produit = "";
                                  this.panier.ProdDetails = [];
                                  this.panier.PrixTotale = 0;
                                  this.panier.PrixUnitaire = 0;
                                  this.panier.taille=''
                                  this.panier.pointure=''
                              } else {
                                  Swal.fire({
                                      position: "center",
                                      title: "Quelque chose n'a pas marché !",
                                      text: "",
                                      showConfirmButton: false,
                                      timer: 1000,
                                      icon: "error",
                                  });
                              }
                          });

  }
}}
    }
}

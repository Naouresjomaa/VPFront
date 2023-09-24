import { formatDate } from "@angular/common";
import { Component, OnInit,TemplateRef } from "@angular/core";
import { Router } from "@angular/router";
import { CommandeService } from "src/app/services/commande.service";
import { DataService } from "src/app/services/data.service";
import { CommandeModel } from "src/app/services/model/Commande.model";
import { PanierService } from "src/app/services/panier.service";
import { ProduitService } from "src/app/services/produit.service";
import Swal from "sweetalert2";
@Component({
    selector: "app-cart",
    templateUrl: "./cart.component.html",
    styleUrls: ["./cart.component.scss",
    '../shop-brand/css/bootstrap.min.css',"../shop-brand/css/font-awesome.min.css","../shop-brand/css/elegant-icons.css"
    ,"../shop-brand/css/magnific-popup.css","../shop-brand/css//nice-select.css","../shop-brand/css/owl.carousel.min.css","../shop-brand/css/slicknav.min.css","../shop-brand/css/style.css"],
})
export class CartComponent implements OnInit {
    paniers:any=[]
    nbrpanier:any=0
    commande:{
        PrixTotal:200,
        PrixLivraison:8,
        Couppons:0,
        NetaPayer:208
    }
    constructor(
        private dataservice: DataService,
        private panierservice: PanierService,
        private produitservice: ProduitService,
        private router: Router,
        private commandeservice: CommandeService,
    ) {}
    ngOnInit(): void {
        this.getPanier()
        this.commande={
            PrixTotal:200,
            PrixLivraison:8,
            Couppons:0,
            NetaPayer:208}
      
    }
    getPanier(){
        this.panierservice.Getpanier('naouresjomaa@gmail.com','Naoures').subscribe((res:any)=>
       {
        this.paniers=res
        console.log(this.paniers)
        this.nbrpanier=this.paniers.length
       } )
        
    }
    GetQte($event,p){}
    DletePanier(p){}
    PasserCommande(){
        this.commandeservice.sendOrderEmail().subscribe((res:any)=>
        console.log(res))
    }
    choosePayment(method: string) {
     
      }
      //modal infos

}

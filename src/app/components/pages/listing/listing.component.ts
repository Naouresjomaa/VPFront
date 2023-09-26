import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { BrandService } from "src/app/services/brand.service";
import { ProduitService } from "src/app/services/produit.service";

import { DataService } from "src/app/services/data.service";
import { PanierService } from "src/app/services/panier.service";
import Swal from "sweetalert2";
import { ChangeDetectorRef } from '@angular/core';
import { PanierModel } from "src/app/services/model/Panier.model";
@Component({
    selector: "app-listing",
    templateUrl: "./listing.component.html",
    styleUrls: ["./listing.component.scss"],
})
export class ListingComponent implements OnInit {
    id: any;
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
   
    constructor(
        private route: ActivatedRoute,
        private brandservice: BrandService,
        private produitservice: ProduitService,
        private dataservice: DataService,
        private panierservice: PanierService,
        private cdr: ChangeDetectorRef
    ) {}
   
    ngOnInit(): void {
        this.id = this.route.snapshot.params.id;
        this.GetBrand()
        this.GetProduitByIdBrand(this.id)
        this.dataservice.auth.subscribe((data) => {
            if (data[0] == false) {
                this.Loggedin = false;
            } else {
                this.Loggedin = true;
                this.Username = data[0].UserName;
                this.Email = data[0].Email;
                this.panier.UserName = this.Username;
                this.panier.Email = this.Email;
            }
        });
    }
GetProduitByIdBrand(id:any){
   this.produitservice.getProduitByid(id).subscribe((res:any)=>{
  console.log('ressssssssssss',res);
    this.data= res;
    this.product=res[0];
    console.log('this.product',this.product)
    this.nbrprod = this.product.length;
})
}
GetBrand() {
    this.brandservice.getBrandByid(this.id).subscribe((res) => {
        this.data = res;
        console.log(this.data)

    //     this.produitservice
    //         .GetProduitByBrand(
    //             this.data[0].BrandName,
    //             this.data[0].SousCategorie
    //         )
    //         .subscribe((res) => {
    //             this.product = res;
    //             this.nbrprod = this.product.length;
    //             this.produitservice
    //                 .Getparameters(
    //                     this.data[0].Categorie,
    //                     this.data[0].SousCategorie
    //                 )
    //                 .subscribe((res) => {
    //                     this.parametres = res;
    //                 });
    //         });
     });
}



    Topanier(prod: any) {
        this.panier.Quantite = 1;
        if (prod.QteDsStock > this.panier.Quantite) {
            if (prod.QteDsStock - this.panier.Quantite > 0) {
                prod.QteDsStock -= this.panier.Quantite;
                this.panier.Produit = prod.Produit;
                this.panier.ProdDetails = prod;
                this.panier.PrixUnitaire = prod.Prix;
                this.panier.PrixTotale = 
                    this.panier.PrixUnitaire * this.panier.Quantite
                
                // this.produitservice
                //     .UpdateProduit(prod.id, prod)
                //     .subscribe((res) => {
                //         this.response = res;
                //         if (
                //             this.response.message ==
                //             "Produit updated succefully"
                //         ) {
                            this.panierservice
                                .AddPanier(this.panier)
                                .subscribe((res) => {
                                    this.response1 = res;
                                    if (
                                        this.response1.message ==
                                        "Panier créé avec succès"
                                    ) {
                                        Swal.fire({
                                            position: "center",
                                            title: "Produit ajouté au panier",
                                            text: "",
                                            showConfirmButton: false,
                                            timer: 3000,
                                            icon: "success",
                                        });
                                        this.cdr.detectChanges();
                                        this.panier.Produit = "";
                                        this.panier.ProdDetails = [];
                                        this.panier.PrixTotale = 0;
                                        this.panier.PrixUnitaire = 0;
                                    } else {
                                        Swal.fire({
                                            position: "center",
                                            title: "Quelque chose n'a pas marché !",
                                            text: "",
                                            showConfirmButton: false,
                                            timer: 3000,
                                            icon: "error",
                                        });
                                    }
                                });
        //                 } else {
        //                     Swal.fire({
        //                         position: "center",
        //                         title: "Quelque chose n'a pas marché !",
        //                         text: "",
        //                         showConfirmButton: false,
        //                         timer: 3000,
        //                         icon: "error",
        //                     });
        //                 }
        //             });
        //     } else {
        //         Swal.fire({
        //             position: "center",
        //             title: "Quantité produit indisponible !",
        //             text: "",
        //             showConfirmButton: false,
        //             timer: 3000,
        //             icon: "error",
        //         });
        //     }
        // } else {
        //     Swal.fire({
        //         position: "center",
        //         title: "Quantité produit indisponible !",
        //         text: "",
        //         showConfirmButton: false,
        //         timer: 3000,
        //         icon: "error",
           // });
        }
    }}}
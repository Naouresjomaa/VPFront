import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { BrandService } from "src/app/services/brand.service";
import { ProduitService } from "src/app/services/produit.service";
import jwt_decode from "jwt-decode";
import { DataService } from "src/app/services/data.service";
import { PanierService } from "src/app/services/panier.service";
import { PanierModel } from "src/app/model/Panier.model";
import Swal from "sweetalert2";
import { ChangeDetectorRef } from '@angular/core';
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
        this.GetProduitByIdBrand(this.id)
    }
GetProduitByIdBrand(id:any){
   this.produitservice.GetProduitByIdBrand(id).subscribe(res=>{
  console.log(res);
    this.data= res;
    this.product=res;
})
}



    Topanier(prod: any) {
        this.panier.Quantite = 1;
        if (prod.QteDsStock > this.panier.Quantite) {
            if (prod.QteDsStock - this.panier.Quantite > 0) {
                prod.QteDsStock -= this.panier.Quantite;
                this.panier.Produit = prod.Produit;
                this.panier.ProdDetails = prod;
                this.panier.PrixUnitaire = prod.Prix;
                this.panier.PrixTotale = (
                    this.panier.PrixUnitaire * this.panier.Quantite
                ).toFixed(2);
                this.produitservice
                    .UpdateProduit(prod.id, prod)
                    .subscribe((res) => {
                        this.response = res;
                        if (
                            this.response.message ==
                            "Produit updated succefully"
                        ) {
                            this.panierservice
                                .AddPanier(this.panier)
                                .subscribe((res) => {
                                    this.response1 = res;
                                    if (
                                        this.response1.message ==
                                        "Panier created succefully"
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
            } else {
                Swal.fire({
                    position: "center",
                    title: "Quantité produit indisponible !",
                    text: "",
                    showConfirmButton: false,
                    timer: 3000,
                    icon: "error",
                });
            }
        } else {
            Swal.fire({
                position: "center",
                title: "Quantité produit indisponible !",
                text: "",
                showConfirmButton: false,
                timer: 3000,
                icon: "error",
            });
        }
    }
}

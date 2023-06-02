import { formatDate } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { CommandeModel } from "src/app/model/Commande.model";
import { CommandeService } from "src/app/services/commande.service";
import { DataService } from "src/app/services/data.service";
import { PanierService } from "src/app/services/panier.service";
import { ProduitService } from "src/app/services/produit.service";
import Swal from "sweetalert2";
@Component({
    selector: "app-cart",
    templateUrl: "./cart.component.html",
    styleUrls: ["./cart.component.scss"],
})
export class CartComponent implements OnInit {
    commande = new CommandeModel();
    Username: any;
    Email: any;
    Loggedin: any;
    paniers: any;
    produit: any;
    response: any;
    response1: any;
    nbrpanier: any;
    livraison: any;
    lastinvoice: any;
    pl: any;
    constructor(
        private dataservice: DataService,
        private panierservice: PanierService,
        private produitservice: ProduitService,
        private router: Router,
        private commandeservice: CommandeService
    ) {}
    ngOnInit(): void {
        this.dataservice.auth.subscribe((data) => {
            if (data[0] == false) {
                this.Loggedin = false;
            } else {
                this.Loggedin = true;
                this.Username = data[0].UserName;
                this.Email = data[0].Email;
                this.commande.Email = this.Email;
                this.commande.UserName = this.Username;
                this.commande.NomClient = data[0].NomComplet;
                this.commande.Telephone = data[0].Telephone;
            }
            this.panierservice
                .Getpanier(this.Email, this.Username)
                .subscribe((res) => {
                    this.paniers = res;
                    this.nbrpanier = this.paniers.length;
                    this.commande.PrixTotal = 0;
                    this.pl = 0;
                    for (var i = 0; i < this.paniers.length; i++) {
                        this.commande.PrixTotal += this.paniers[i].PrixTotale;
                        this.pl += this.paniers[i].ProdDetails.PrixLivraision;
                    }
                    this.commande.PrixLivraison = (
                        this.pl / this.nbrpanier
                    ).toFixed(2);
                    this.commande.NetaPayer = (
                        Number(this.commande.PrixTotal) +
                        Number(this.commande.PrixLivraison)
                    ).toFixed(2);
                    this.commande.Order = this.paniers;
                });
        });
        this.commande.RefCommande =
            "vp" + Math.floor(Math.random() * 10000).toString();
        this.commande.Heure = formatDate(new Date(), "h:mm a", "en");
        this.commande.Date = formatDate(new Date(), "MMM d, y", "en");
        this.commande.Couppons = 0;
    }
    GetQte(event: any, p: any) {
        let qte = event.target.value;
        this.produitservice
            .getProduitByid(p.ProdDetails.id)
            .subscribe((res) => {
                this.produit = res;
                this.produit[0].QteDsStock =
                    this.produit[0].QteDsStock + p.Quantite - qte;
                this.produitservice
                    .UpdateProduit(this.produit[0].id, this.produit[0])
                    .subscribe((res) => {
                        this.response = res;
                        if (
                            this.response.message ==
                            "Produit updated succefully"
                        ) {
                            p.Quantite = qte;
                            p.PrixTotale = (
                                p.PrixUnitaire * p.Quantite
                            ).toFixed(2);
                            this.panierservice
                                .UpdatePanier(p.id, p)
                                .subscribe((res) => {
                                    this.response1 = res;
                                    if (
                                        this.response1.message ==
                                        "Panier updated succefully"
                                    ) {
                                        this.panierservice
                                            .Getpanier(p.Email, p.UserName)
                                            .subscribe((res) => {
                                                this.paniers = res;
                                                this.nbrpanier =
                                                    this.paniers.length;
                                                this.commande.PrixTotal = 0;
                                                this.pl = 0;
                                                for (
                                                    var i = 0;
                                                    i < this.paniers.length;
                                                    i++
                                                ) {
                                                    this.commande.PrixTotal +=
                                                        this.paniers[
                                                            i
                                                        ].PrixTotale;
                                                    this.pl +=
                                                        this.paniers[
                                                            i
                                                        ].ProdDetails.PrixLivraision;
                                                }
                                                this.commande.PrixLivraison = (
                                                    this.pl / this.nbrpanier
                                                ).toFixed(2);
                                                this.commande.NetaPayer = (
                                                    Number(
                                                        this.commande.PrixTotal
                                                    ) +
                                                    Number(
                                                        this.commande
                                                            .PrixLivraison
                                                    )
                                                ).toFixed(2);
                                                this.commande.Order =
                                                    this.paniers;
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
                                title: "Quelque chose n'a pas marché !",
                                text: "",
                                showConfirmButton: false,
                                timer: 3000,
                                icon: "error",
                            });
                        }
                    });
            });
    }
    DletePanier(p: any) {
        this.produitservice
            .getProduitByid(p.ProdDetails.id)
            .subscribe((res) => {
                this.produit = res;
                this.produit[0].QteDsStock += p.Quantite;
                this.produitservice
                    .UpdateProduit(this.produit[0].id, this.produit[0])
                    .subscribe((res) => {
                        this.response = res;
                        if (
                            this.response.message ==
                            "Produit updated succefully"
                        ) {
                            this.panierservice
                                .Removepanier(p.id)
                                .subscribe((res) => {
                                    Swal.fire({
                                        position: "center",
                                        title: "Produit supprimé",
                                        text: "",
                                        showConfirmButton: false,
                                        timer: 3000,
                                        icon: "success",
                                    });
                                    this.panierservice
                                        .Getpanier(p.Email, p.UserName)
                                        .subscribe((res) => {
                                            this.paniers = res;
                                            this.nbrpanier =
                                                this.paniers.length;
                                            this.commande.PrixTotal = 0;
                                            this.pl = 0;
                                            for (
                                                var i = 0;
                                                i < this.paniers.length;
                                                i++
                                            ) {
                                                this.commande.PrixTotal +=
                                                    this.paniers[i].PrixTotale;
                                                this.pl +=
                                                    this.paniers[
                                                        i
                                                    ].ProdDetails.PrixLivraision;
                                            }
                                            this.commande.PrixLivraison = (
                                                this.pl / this.nbrpanier
                                            ).toFixed(2);
                                            this.commande.NetaPayer = (
                                                Number(
                                                    this.commande.PrixTotal
                                                ) +
                                                Number(
                                                    this.commande.PrixLivraison
                                                )
                                            ).toFixed(2);
                                            this.commande.Order = this.paniers;
                                        });
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
            });
    }
    PasserCommande() {
        this.commandeservice.CreateCommande(this.commande).subscribe((res) => {
            this.response = res;
            if (this.response.message == "Commande created succefully") {
                this.panierservice
                    .RemoveAllpanier(
                        this.commande.Email,
                        this.commande.UserName
                    )
                    .subscribe((res) => {});
                this.commandeservice
                    .LastInvoice(this.commande.Email, this.commande.UserName)
                    .subscribe((res) => {
                        this.lastinvoice = res;
                        this.router.navigate([
                            "/checkout/" + this.lastinvoice[0].id,
                        ]);
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
    }
}

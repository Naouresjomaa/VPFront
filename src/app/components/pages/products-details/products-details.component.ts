import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { BrandService } from 'src/app/services/brand.service';
import { DataService } from 'src/app/services/data.service';
import { PanierModel } from 'src/app/services/model/Panier.model';
import { PanierService } from 'src/app/services/panier.service';
import { ProduitService } from 'src/app/services/produit.service';
import Swal from "sweetalert2";
@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.scss']
})
export class ProductsDetailsComponent implements OnInit {
id:any;
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
  constructor(
    private route: ActivatedRoute,
    private brandservice: BrandService,
    private produitservice: ProduitService,
    private dataservice: DataService,
    private panierservice: PanierService,
    private cdr: ChangeDetectorRef,
    ) { }

  ngOnInit(): void {
    this.dataservice.auth.subscribe((data) => {
      console.log('dataaaaaaaaaaaaaaaaaaaaa',data[0])
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
    this.id=this.route.snapshot.params.id;
    this.GetProduct();
  
  }
  GetProduct(){
    this.produitservice.getProduitByid(this.id).subscribe((res:any)=>{
        this.produit=res[0];
        console.log('thiq=s.produiiiiiiiiiiiiit',this.produit)
    })
  }
  selectTaille(taille: string) {
    this.selectedTaille = taille;
    console.log('this.selectedTaille',this.selectedTaille)
}
  Topanier(prod: any) {
    this.panier.UserName = 'Naoures';
    this.panier.Email = 'naouresjomaa@gmail.com';
    this.panier.Quantite = 1;
    if (true) {
        if (true) {
            //prod.QteDsStock -= this.panier.Quantite;
            this.panier.Produit = prod.Produit;
            this.panier.ProdDetails = prod;
            this.panier.PrixUnitaire = prod.Prix;
            this.panier.PrixTotale = (
                this.panier.PrixUnitaire * this.panier.Quantite
            ).toFixed(2);
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
}}
}

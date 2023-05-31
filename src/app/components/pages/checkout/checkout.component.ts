import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { CommandeModel } from "src/app/model/Commande.model";
import { CommandeService } from "src/app/services/commande.service";
import { DataService } from "src/app/services/data.service";
import { SharedService } from "src/app/services/shared.service";
import Swal from "sweetalert2";

@Component({
    selector: "app-checkout",
    templateUrl: "./checkout.component.html",
    styleUrls: ["./checkout.component.scss"],
})
export class CheckoutComponent implements OnInit {
    livraison: any;
    Loggedin: boolean;
    Username: any;
    Email: any;
    res: any;
    commande: any;
    response:any;
    id: any;
    constructor(
        private dataservice: DataService,
        private route: ActivatedRoute,
        private commandeservice: CommandeService,
        private router: Router,
    ) {}
    ngOnInit(): void {
        this.id = this.route.snapshot.params.id;
        this.dataservice.auth.subscribe((data) => {
            if (data[0] == false) {
                this.Loggedin = false;
            } else {
                this.Loggedin = true;
                this.Username = data[0].UserName;
                this.Email = data[0].Email;
            }
        });
        this.Getcommandedata();
    }
    Getcommandedata() {
        this.commandeservice.GetCommandeByid(this.id).subscribe((res) => {
            this.res = res;
            this.commande = this.res[0];
        });
    }
    Order(c: CommandeModel) {
        c.TypePaiement = "Paiement à la livraison";
        if (
            !c.NomClient ||
            !c.Adresse ||
            !c.Email ||
            !c.Telephone ||
            !c.Gouvernerat ||
            !c.CodePostal
        ) {
            Swal.fire({
                position: "center",
                title: "Les champs notés par * Sont Obligatoire !",
                text: "",
                showConfirmButton: false,
                timer: 3000,
                icon: "error",
            });
        }
        else{
            this.commandeservice.UpdateCommande(c.id,c).subscribe(res=>{
                this.response=res;
                if(this.response.message=='Commande updated succefully'){
                    Swal.fire({
                        title: 'Vous avez passé votre commande',
                        text: '',
                        imageUrl: 'https://us.123rf.com/450wm/gulzarkarimn/gulzarkarimn2305/gulzarkarimn230501954/204599500-flamingo-wearing-sunglasses-on-blue-background-3d-illustration.jpg?ver=6',
                        imageWidth: 400,
                        imageHeight: 200,
                        timer: 3000,
                        showConfirmButton: false,
                      })
                      this.router.navigate(['/Commande']);
                }
                else{
                    Swal.fire({
                        position: "center",
                        title: "Quelque chose n'a pas marché !",
                        text: "",
                        showConfirmButton: false,
                        timer: 3000,
                        icon: "error",
                    });
                }
            })
        }
    }
}

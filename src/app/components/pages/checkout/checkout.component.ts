import { Component, OnInit } from "@angular/core";
import { CommandeModel } from "src/app/model/Commande.model";
import { LivraisonService } from "src/app/services/Livraison.service";
import { DataService } from "src/app/services/data.service";
import { SharedService } from "src/app/services/shared.service";

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
    res:any;
    commande=new CommandeModel();
    constructor(
        private dataservice: DataService,
        private sharedservice:SharedService,
    ) {}

    ngOnInit(): void {
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

    Getcommandedata(){
        this.sharedservice.commande.subscribe(data=>{
           this.res=data;
           this.commande.NetaPayer=this.res.NetaPayer;
           this.commande.PrixLivraison=this.res.PrixLivraison;
           this.commande.PrixTotal=this.res.PrixTotal;
           this.commande.Order=this.res.Order;
        })
    }
}

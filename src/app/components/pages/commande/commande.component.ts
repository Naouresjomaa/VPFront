import { Component, OnInit } from "@angular/core";
import { CommandeService } from "src/app/services/commande.service";
import { DataService } from "src/app/services/data.service";

@Component({
    selector: "app-commande",
    templateUrl: "./commande.component.html",
    styleUrls: ["./commande.component.scss"],
})
export class CommandeComponent implements OnInit {
    Loggedin: any;
    Username: any;
    Email: any;
    commandes: any;
    nbrcommande:any;
    constructor(
        private dataservice: DataService,
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
            }
            this.commandeservice
                .GetCommandes(this.Email, this.Username)
                .subscribe((res) => {
                    this.commandes = res;
                    this.nbrcommande = this.commandes.length;
                });
        });
    }
}

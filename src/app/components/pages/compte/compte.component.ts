import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import jwt_decode from "jwt-decode";
import { ClientModel } from "src/app/model/Client.model";
import { ClientService } from "src/app/services/client.service";
import Swal from "sweetalert2";
@Component({
    selector: "app-compte",
    templateUrl: "./compte.component.html",
    styleUrls: ["./compte.component.scss"],
})
export class CompteComponent implements OnInit {
    userData: any;
    token: any;
    client = new ClientModel();
    response: any;
    data: any;
    adress: any;
    adresslist: any = [];
    constructor(private clientservice: ClientService, private router: Router) {}

    ngOnInit(): void {
        this.token = localStorage.getItem("isLoggedin");
        this.userData = jwt_decode(this.token);
        this.GetClientByid();
    }

    GetClientByid() {
        this.clientservice.getClientByid(this.userData.id).subscribe((res) => {
            this.data = res;
            this.client = this.data[0];
        });
    }
    UpdateClient() {
        const minLength = 6;
        const hasNumber = /\d/;
        const hasSpecialChar = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
        if (
            this.client.NomComplet == "" ||
            this.client.Password == "" ||
            this.client.Genre == "" ||
            this.client.Ville == ""
        ) {
            Swal.fire({
                title: "Tous les champs sont obligatoires !",
                text: "",
                showConfirmButton: false,
                timer: 3000,
                icon: "error",
            });
        } else if (!this.client.Telephone || !this.client.DateNaissance) {
            Swal.fire({
                title: "Tous les champs sont obligatoires !",
                text: "",
                showConfirmButton: false,
                timer: 3000,
                icon: "error",
            });
        } else if (
            this.client.Password.length < minLength ||
            !hasNumber.test(this.client.Password) ||
            !hasSpecialChar.test(this.client.Password)
        ) {
            Swal.fire({
                title: "Mot de passe invalid !",
                text: "",
                showConfirmButton: false,
                timer: 3000,
                icon: "error",
            });
        } else {
            this.clientservice
                .UpdateClient(this.client.id, this.client)
                .subscribe((res) => {
                    this.response = res;
                    if (this.response.message == "Client updated succefully") {
                        Swal.fire({
                            title: "Profile modifié :)",
                            text: "",
                            showConfirmButton: false,
                            timer: 3000,
                            icon: "success",
                        });
                        this.router.navigate(["/Compte"]);
                    } else {
                        Swal.fire({
                            title: "Quelque chose ne marche pas !",
                            text: "",
                            showConfirmButton: false,
                            timer: 3000,
                            icon: "error",
                        });
                    }
                });
        }
    }

    Addadress() {
        if (!this.adress) {
            Swal.fire({
                title: "Entrer une Adresse SVP !",
                text: "",
                showConfirmButton: false,
                timer: 3000,
                icon: "error",
            });
        } else {
            this.adresslist.push(this.adress);
            this.client.Adresse = this.adresslist;
            this.clientservice
                .UpdateClient(this.client.id, this.client)
                .subscribe((res) => {
                    this.response=res;
                    if (this.response.message == "Client updated succefully") {
                        Swal.fire({
                            title: "Adresse ajoutée :)",
                            text: "",
                            showConfirmButton: false,
                            timer: 3000,
                            icon: "success",
                        });
                        this.router.navigate(["/Compte"]);
                    } else {
                        Swal.fire({
                            title: "Quelque chose ne marche pas !",
                            text: "",
                            showConfirmButton: false,
                            timer: 3000,
                            icon: "error",
                        });
                    }
                });
        }
    }
}

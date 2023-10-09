import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import jwt_decode from "jwt-decode";
import { ClientService } from "src/app/services/client.service";
import { ClientModel } from "src/app/services/model/Client.model";
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
            console.log('this.client',this.client)
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
document.addEventListener("DOMContentLoaded", function () {
    const editInfoButton = document.getElementById("editInfo") as HTMLAnchorElement;
    const saveButton = document.getElementById("saveButton") as HTMLButtonElement;
    const nomCompletDiv = document.getElementById("nomComplet") as HTMLDivElement;
    const telephoneDiv = document.getElementById("telephone") as HTMLDivElement;
    const emailDiv = document.getElementById("editEmail") as HTMLDivElement;
    const adressDiv = document.getElementById("editAdresse") as HTMLDivElement;
    const passwordDiv = document.getElementById("editPassword") as HTMLDivElement;

    editInfoButton.addEventListener("click", function (e) {
        e.preventDefault();
        // Transform the content of divs into input fields
        nomCompletDiv.innerHTML = `<input type="text" value="${nomCompletDiv.textContent}" id="nomCompletInput">`;
        telephoneDiv.innerHTML = `<input type="text" value="${telephoneDiv.textContent}" id="telephoneInput">`;
        emailDiv.innerHTML = `<input type="text" value="${emailDiv.textContent}" id="emailInput">`;
        adressDiv.innerHTML = `<input type="text" value="${adressDiv.textContent}" id="adressInput">`;
        passwordDiv.innerHTML = `<input type="text" value="${passwordDiv.textContent}" id="passwordInput">`;
        // Show the Save button
        saveButton.style.display = "block";
    });

    saveButton.addEventListener("click", function () {
        // Assuming you want to save the changes here
        const nomCompletInput = document.getElementById("nomCompletInput") as HTMLInputElement;
        const telephoneInput = document.getElementById("telephoneInput") as HTMLInputElement;
        const emailInput = document.getElementById("emailInput") as HTMLInputElement;
        const adressInput = document.getElementById("adressInput") as HTMLInputElement;
        const passwordInput = document.getElementById("passwordInput") as HTMLInputElement;

        // Save or update the information, you can send it to the server, update in local storage, etc.
        console.log("Saving changes...");
        console.log("Nom Complet:", nomCompletInput.value);
        console.log("Téléphone:", telephoneInput.value);
        console.log("Email:", emailInput.value);
        console.log("Adresse:", adressInput.value);
        console.log("Password:", passwordInput.value);

        // Hide the Save button after saving
        saveButton.style.display = "none";
    });
});
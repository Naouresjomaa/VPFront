import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ClientService } from "src/app/services/client.service";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import Swal from "sweetalert2";
@Component({
    selector: "app-footer-style-two",
    templateUrl: "./footer-style-two.component.html",
    styleUrls: ["./footer-style-two.component.scss"],
})
export class FooterStyleTwoComponent implements OnInit {
    response: any;
    constructor(private clientservice: ClientService, private router: Router) {}

    ngOnInit(): void {}

    NewsLetterForm = new FormGroup({
        Email: new FormControl("", [Validators.required, Validators.email]),
    });

    AddNewsletter() {
        if (this.NewsLetterForm.valid) {
            this.clientservice
                .AddNewsletter(this.NewsLetterForm.value)
                .subscribe(res => {
                    this.response = res;
                    if (this.response.message == "Newsletter created succefully") {
                        Swal.fire({
                            position: "top-end",
                            title: "Newsletter ajouté",
                            text: "",
                            showConfirmButton: false,
                            timer: 3000,
                            icon: "success",
                        });
                        this.router.navigate(["/"]);
                    } else {
                        Swal.fire({
                            position: "top-end",
                            title: "Quelque chose ne marche pas !",
                            text: "",
                            showConfirmButton: false,
                            timer: 3000,
                            icon: "error",
                        });
                    }
                });
        } else {
            this.NewsLetterForm.markAllAsTouched();
        }
    }
}

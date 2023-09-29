import { Component, OnInit } from "@angular/core";
import { ClientService } from "src/app/services/client.service";
import Swal from "sweetalert2";
import jwt_decode from "jwt-decode";
import { ActivatedRoute, Router } from "@angular/router";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { MatDialogRef } from "@angular/material/dialog";
import { AuthServiceService } from "src/app/services/auth-service.service";

@Component({
    selector: "app-login-register",
    templateUrl: "./login-register.component.html",
    styleUrls: ["./login-register.component.scss"],
})
export class LoginRegisterComponent implements OnInit {
    response: any;
    token: any;
    userData: any;
    parrainage:any
    constructor(private clientservice: ClientService, private router: Router,private route: ActivatedRoute,
        public dialogRef: MatDialogRef<LoginRegisterComponent>,
        private authService: AuthServiceService) {}

    ngOnInit(): void {
        this.parrainage = this.route.snapshot.queryParamMap.get('parrainage');
       
    }
    close(): void {
        this.dialogRef.close();
      }
    loginForm = new FormGroup({
        Email: new FormControl("", [Validators.required, Validators.email]),
        Password: new FormControl("", Validators.required),
    });

    registrationForm = new FormGroup({
        NomComplet: new FormControl("", Validators.required),
        Email: new FormControl("", [Validators.required, Validators.email]),
        UserName: new FormControl("", Validators.required),
        Password: new FormControl("", [
            Validators.required,
            Validators.minLength(6),
            Validators.pattern(/^(?=.*[!@#$%^&*])/),
        ]),
    });
    onFacebookLogin() {
      this.authService.loginWithFacebook();
    }
  
    onGoogleLogin() {
      this.authService.loginWithGoogle();
    }
    Login() {
        this.route.fragment.subscribe(fragment => {
            if (fragment) {
              const element = document.querySelector('#' + fragment);
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }
          });
        if (this.loginForm.valid) {
            this.clientservice
                .LoginAuth(this.loginForm.value)
                .subscribe((res) => {
                    this.response = res;
                    if (this.response.message == "Vous êtes connecté") {
                        this.close()
                        
                        Swal.fire({
                            position: "top-end",
                            title: "Bienvenue à VentePrivilegiée",
                            text: "",
                            showConfirmButton: false,
                            timer: 3000,
                            icon: "success",
                        });
                        this.token = this.response.Token;
                        localStorage.setItem("isLoggedin", this.token);
                        if (localStorage.getItem("isLoggedin")) {
                            this.userData = jwt_decode(this.token);
                            this.router.navigate(["/"]);
                        } else {
                        }
                    } else if (this.response.message == "Vérifier Email !") {
                        Swal.fire({
                            position: "top-end",
                            title: "Vérifiez votre Email !",
                            text: "",
                            showConfirmButton: false,
                            timer: 3000,
                            icon: "error",
                        });
                    } else if (
                        this.response.message == "Vérifier Mot de Passe !"
                    ) {
                        Swal.fire({
                            position: "top-end",
                            title: "Vérifiez votre Mot de Passe !",
                            text: "",
                            showConfirmButton: false,
                            timer: 3000,
                            icon: "error",
                        });
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
            this.loginForm.markAllAsTouched();
        }
    }

    register() {
        if (this.registrationForm.valid) {
          this.clientservice
            .AddClient(this.registrationForm.value)
            .subscribe((res) => {
              this.response = res;
              if (this.response.message == 'Email already exist !') {
                Swal.fire({
                  position: 'top-end',
                  title: 'Email exist déja !',
                  text: '',
                  showConfirmButton: false,
                  timer: 3000,
                  icon: 'error',
                });
              } else if (this.response.message == 'UserName already exist !') {
                Swal.fire({
                  position: 'top-end',
                  title: 'Nom d utilisateur exist déja !',
                  text: '',
                  showConfirmButton: false,
                  timer: 3000,
                  icon: 'error',
                });
              } else {
                Swal.fire({
                  position: 'top-end',
                  title: 'Bienvenue à VentePrivilegiée',
                  text: '',
                  showConfirmButton: false,
                  timer: 3000,
                  icon: 'success',
                });
                this.router.navigate(['/']);
              }
            });
        } else {
          this.registrationForm.markAllAsTouched();
        }
      }
}

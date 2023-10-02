import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { ClientService } from 'src/app/services/client.service';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import jwt_decode from "jwt-decode";
import Swal from "sweetalert2";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  response: any;
  token: any;
  userData: any;
  parrainage:any
isDialog= false;
  constructor(private clientservice: ClientService, private router: Router,private route: ActivatedRoute,
      private authService: AuthServiceService) {
      
      }

  ngOnInit(): void {
      this.parrainage = this.route.snapshot.queryParamMap.get('parrainage');
      if(this.parrainage){
        this.updateUserParrainage(this.parrainage)
      }
     
  }
  updateUserParrainage(parrainage){
    this.clientservice.updateUserParrainage(parrainage).subscribe((res:any)=>{
      console.log(res)
    })
  }
 
  loginForm = new FormGroup({
      Email: new FormControl("", [Validators.required, Validators.email]),
      Password: new FormControl("", Validators.required),
  });


  onFacebookLogin() {
    this.authService.loginWithFacebook();
    // fetch('http://localhost:3000/auth/google')
    // .then(response => response.json())
    // .then(data => {
    //   if (data.redirect) {
    //     window.location.href = data.redirect;
    //   }
    // });
  }

  onGoogleLogin() {
    this.authService.loginWithGoogle();
    fetch('http://localhost:3000/auth/google')
    .then(response => response.json())
    .then(data => {
      if (data.redirect) {
        window.location.href = data.redirect;
      }
    });
  }
  Login() {
   
      if (this.loginForm.valid) {
          this.clientservice
              .LoginAuth(this.loginForm.value)
              .subscribe((res) => {
                  this.response = res;
                  if (this.response.message == "Vous êtes connecté") {
                      
                      
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

  

}

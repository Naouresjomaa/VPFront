import { Component, OnInit } from '@angular/core';
import { ClientService } from "src/app/services/client.service";
import Swal from "sweetalert2";
import jwt_decode from "jwt-decode";
import { ActivatedRoute, Router } from "@angular/router";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { MatDialogRef } from "@angular/material/dialog";
import { AuthServiceService } from "src/app/services/auth-service.service";
import { StorageService } from 'src/app/services/storage.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  response: any;
  token: any;
  userData: any;
  parrainage:any
  genre:string
  user:any
  selectedGenre: string = '';
  affiche =false;
  genres=["Femme","Homme","Autre"]
  nbrPanier = 0;
  constructor(private clientservice: ClientService, private router: Router,private route: ActivatedRoute,
    private authService: AuthServiceService,private storageService : StorageService) { }

  ngOnInit(): void {
    this.parrainage = this.route.snapshot.queryParamMap.get('parrainage');
    if(this.parrainage){
      this.getClientByParrainage(this.parrainage)
    }
  }
  getClientByParrainage(parrainage){
    console.log(parrainage)
    this.clientservice.getClientByParrainage(parrainage).subscribe((res:any)=>{
      console.log(res)
      this.user = res[0]
      if(!this.user ){
        this.affiche = true
      }
    })
  }
  registrationForm = new FormGroup({
    NomComplet: new FormControl("", Validators.required),
    Email: new FormControl("", [Validators.required]),
    UserName: new FormControl("", Validators.required),
    Password: new FormControl("", [
        Validators.required,
        Validators.pattern(/^(?=.*[!@#$%^&*])/),
    ]),
});

onSelectChange(event: any){
  console.log('event',event)
  this.genre = event.target.value;
  console.log(this.genre);
}
  register() {
    console.log('La valeur sélectionnée est:', this.genre);
    if (this.registrationForm.valid) {
      let solde = 0 ;
      let parainageUser=''
      if(this.parrainage && this.parrainage.length > 0 && this.user ){
         solde += 10
          parainageUser += this.parrainage
      }
      let Genre =this.genre
      
      let objetFinal = { ...this.registrationForm.value, solde ,Genre,parainageUser};
      console.log('objetFinal',objetFinal)
      this.clientservice
        .AddClient(objetFinal)
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
          } else {
            this.token = this.response.Token;
            localStorage.setItem("isLoggedin", this.token);
            this.storageService.setPanier(0)
            if (localStorage.getItem("isLoggedin")) {
                this.userData = jwt_decode(this.token);
                this.router.navigate(["/"]);
            } else {
            }
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

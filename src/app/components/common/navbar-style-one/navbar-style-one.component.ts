import { Component, OnInit } from '@angular/core';
import jwt_decode from 'jwt-decode';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { DataService } from 'src/app/services/data.service';
@Component({
  selector: 'app-navbar-style-one',
  templateUrl: './navbar-style-one.component.html',
  styleUrls: ['./navbar-style-one.component.scss']
})
export class NavbarStyleOneComponent implements OnInit {
[x: string]: any;
    userData: any;
    token: any;
    Loggedin: any;
    Username:any;
    auth=[];
    urlprod='http://venteprivilegiee.com/#';
    urlloc="http://localhost:4200/#";
    constructor(private router: Router,private dataservice:DataService) {}

    ngOnInit() {
      this.token = localStorage.getItem('isLoggedin');
      if (localStorage.getItem('isLoggedin')) {
        this.userData = jwt_decode(this.token);
        this.Loggedin = true;
        this.Username=this.userData.UserName;
        this.auth.push(this.userData);
        this.auth.push(this.Loggedin);
      } else {
        this.Loggedin = false;
        this.Username=""
        this.auth.push(this.Loggedin);
      }
      this.dataservice.setAuth(this.auth);
    }

    onLogout(e: Event) {
      e.preventDefault();
      localStorage.removeItem('isLoggedin');
      this.Loggedin = false;
      this.router.navigate(['/login-register']);
      Swal.fire({
        position: 'top-end',
        title: 'Vous êtes Déconnecté',
        text: '',
        showConfirmButton: false,
        timer: 3000,
        icon: 'success',
      });
    }

    Router(event:string){
        this.router.navigate([event]);
    }
}

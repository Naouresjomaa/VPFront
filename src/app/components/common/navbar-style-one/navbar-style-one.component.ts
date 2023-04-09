import { Component, OnInit } from '@angular/core';
import jwt_decode from 'jwt-decode';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-navbar-style-one',
  templateUrl: './navbar-style-one.component.html',
  styleUrls: ['./navbar-style-one.component.scss']
})
export class NavbarStyleOneComponent implements OnInit {
    userData: any;
    token: any;
    Loggedin: any;
    constructor(private router: Router) {}

    ngOnInit() {
      this.token = localStorage.getItem('isLoggedin');
      if (localStorage.getItem('isLoggedin')) {
        this.userData = jwt_decode(this.token);
        this.Loggedin = true;
      } else {
        this.Loggedin = false;
      }
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
}

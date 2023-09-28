import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { LoginRegisterComponent } from './components/pages/login-register/login-register.component';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  isUserLoggedIn = false ;
  constructor(private dialog: MatDialog) {}
  decodeToken() {
    let token = localStorage.getItem('isLoggedin');
   if(token && token.length > 0){
    this.isUserLoggedIn = true
   }
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const isUserLoggedIn = false;

    if (!this.isUserLoggedIn) {
      this.dialog.open(LoginRegisterComponent, {
        width: '400px',
      });
      return false; 
    }
    return true; 
  }

}

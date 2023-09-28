import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { LoginRegisterComponent } from './components/pages/login-register/login-register.component';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  isUserLoggedIn = false ;
  Email
  Username
  constructor(private dialog: MatDialog, private jwtHelper: JwtHelperService,) {}
  decodeToken() {
    const token = localStorage.getItem('isLoggedin');
    const decodedToken = this.jwtHelper.decodeToken(token);
    this.Email = decodedToken.Email
    this.Username=decodedToken.UserName
    console.log(decodedToken);
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const token = localStorage.getItem('isLoggedin');
     if(!token){
      this.dialog.open(LoginRegisterComponent, {
        width: '700px',height :'700px'
      }
      );
      return false
     
    }
    return true; 
  }

}

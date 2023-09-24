import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { LoginRegisterComponent } from './components/pages/login-register/login-register.component';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private dialog: MatDialog) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    // Vérifiez si l'utilisateur est connecté ici. Remplacez isUserLoggedIn par votre logique.
    const isUserLoggedIn = false;

    if (!isUserLoggedIn) {
      this.dialog.open(LoginRegisterComponent, {
        width: '400px',
      });
      return false; // Bloque l'accès à la route
    }
    return true; // Autorise l'accès à la route
  }

}

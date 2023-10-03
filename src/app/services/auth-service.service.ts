import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private http: HttpClient) {}

  loginWithFacebook() {
    // Adjust the URL to point to your backend
    window.location.href = 'https://api.venteprivilegiee.com/auth/facebook';
  }

  loginWithGoogle() {
    // Adjust the URL to point to your backend
    window.location.href = 'https://api.venteprivilegiee.com/auth/google';
  }
}

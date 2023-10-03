import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private http: HttpClient) {}

  loginWithFacebook() {
    // Adjust the URL to point to your backend
    window.location.href = 'http://51.254.119.123:3000/auth/facebook';
  }

  loginWithGoogle() {
    // Adjust the URL to point to your backend
    window.location.href = 'http://51.254.119.123:3000/auth/google';
  }
}

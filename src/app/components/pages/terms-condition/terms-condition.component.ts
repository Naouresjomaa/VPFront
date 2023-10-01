import { Component, OnInit } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-terms-condition',
  templateUrl: './terms-condition.component.html',
  styleUrls: ['./terms-condition.component.scss']
})
export class TermsConditionComponent implements OnInit {
 linkParrainage = 'http://localhost:4200/#/register?parrainage='
  parrainage: any;
  constructor( private jwtHelper: JwtHelperService) { }
  decodeToken() {
    const token = localStorage.getItem('isLoggedin');
    const decodedToken = this.jwtHelper.decodeToken(token);
    this.parrainage = decodedToken.parrainage
    console.log(decodedToken);
  }
  genererChaineAleatoire() {
    
    this.linkParrainage=this.linkParrainage+this.parrainage
  }
  
  ngOnInit(): void {
    this.decodeToken()
    this.genererChaineAleatoire()
  }

}

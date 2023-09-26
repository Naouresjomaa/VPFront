import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-terms-condition',
  templateUrl: './terms-condition.component.html',
  styleUrls: ['./terms-condition.component.scss']
})
export class TermsConditionComponent implements OnInit {
 linkParrainage = 'http://localhost:4200/#/login?parrainage='
  constructor() { }
  genererChaineAleatoire(longueur: number = 7) {
    const caracteres = '0123456789';
    let resultat = '';
    for (let i = 0; i < longueur; i++) {
      const indexAleatoire = Math.floor(Math.random() * caracteres.length);
      resultat += caracteres.charAt(indexAleatoire);
    }
    this.linkParrainage=this.linkParrainage+resultat
  }
  ngOnInit(): void {
    this.genererChaineAleatoire()
  }

}

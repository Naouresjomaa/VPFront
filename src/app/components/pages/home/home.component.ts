import { OnInit } from '@angular/core';
import { Component, Renderer2, ElementRef, HostListener, AfterViewInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BrandService } from 'src/app/services/brand.service';
import { ClientService } from 'src/app/services/client.service';
import { PanierService } from 'src/app/services/panier.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
brands :any;
affichage = true;
  nbrpanier: any;
  filteredBrand: any;
  term: any;
  id: any;
  Email: any;
  Username: any;
  nbrPanier: any=0;
  constructor(private router: Router,private service : BrandService,private el: ElementRef, private renderer: Renderer2,
    private jwtHelper: JwtHelperService,private panierService : PanierService) { }
  ngOnInit() {
    this.getAllBrand()
    this.decodeToken()
    this.getPanier()
  }
 
  getPanier(){
    const storedPanier = localStorage.getItem('panier');
    this.nbrpanier =  storedPanier ? JSON.parse(storedPanier) : 0;
  }
  logout() {
    localStorage.removeItem('isLoggedin');
    localStorage.removeItem('panier');
    this.router.navigate(['/']);
  }
  decodeToken() {
    const token = localStorage.getItem('isLoggedin');
    const decodedToken = this.jwtHelper.decodeToken(token)
  
   if(token && token.length > 0){
    this.affichage = false
   }
  }
getAllBrand(){
this.service.GetBrands().subscribe(res=>{
  console.log('resssssssssssssssssss',res)
  this.brands=res;
  this.filteredBrand=[...this.brands]
})
}

filtrerDonnees(): void {
  this.filteredBrand = this.brands.filter((brand: any) => 
  brand.BrandName.toLowerCase().includes(this.term.toLowerCase()) ||
  brand.Categorie.toLowerCase().includes(this.term.toLowerCase()) 

  );
}
  

}




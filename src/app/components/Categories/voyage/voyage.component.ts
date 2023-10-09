import { AfterViewInit, Component, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-voyage',
  templateUrl: './voyage.component.html',
  styleUrls: ['./voyage.component.scss','../../pages/home/home.component.scss']
})
export class VoyageComponent implements OnInit{
  brands :any;
  nbrpanier: any=0;
  filteredBrand: any;
  term: any;
  affichage: boolean =true;
    constructor(private router: Router,private service : BrandService,private el: ElementRef, private renderer: Renderer2) { }
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
      window.location.reload()
      this.router.navigate(['/']);
    }
    decodeToken() {
      const token = localStorage.getItem('isLoggedin');
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
      brand.BrandName.toLowerCase().includes(this.term.toLowerCase()) 
    
      );
    }
    
  
  }
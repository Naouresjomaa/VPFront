import { AfterViewInit, Component, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-beaute',
  templateUrl: './beaute.component.html',
  styleUrls: ['./beaute.component.scss','../../pages/home/home.component.scss']
})
export class BeauteComponent implements OnInit {
    brands :any;
  nbrpanier: any;
  filteredBrand: any;
  term: any;
  affichage: boolean =true;
      constructor(private service : BrandService,private el: ElementRef, private renderer: Renderer2) { }
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
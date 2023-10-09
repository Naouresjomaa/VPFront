import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { BrandService } from 'src/app/services/brand.service';
import { ProduitService } from 'src/app/services/produit.service';
@Component({
  selector: 'app-shop-brand',
  templateUrl: './shop-brand.component.html',
  styleUrls: ['./shop-brand.component.scss','./css/bootstrap.min.css',"./css/font-awesome.min.css","./css/elegant-icons.css"
  ,"./css/magnific-popup.css","./css//nice-select.css","./css/owl.carousel.min.css","./css/slicknav.min.css","./css/style.css",
 
]
})
export class ShopBrandComponent implements OnInit {
id : any
term:any
brand : any
  image: any;
  produits : any
  filteredBrand: any;
  filterModel = {
    cat:'',
    type: '', 
    genre:'', 
    priceRange: '',
    size: '', 
    color: '',
    tag:''
  };
   currentPage: number = 1;
   pageSize: number = 4;
   filteredProducts: any;
   showCatv:boolean=true;
   showGenrev :boolean=true;
   showTaillev:boolean =true;
   showCouleursv:boolean=true;
  showPointurev:boolean=true;
  showTAgsv:boolean=true;
  showTailleFenfant: boolean;
  showPointureFenfant: boolean;
  showTailleExtrav: boolean;
  showPointurExtrav: boolean;
  constructor(private route: ActivatedRoute,private brandservice : BrandService,private produitservice :ProduitService) { }
  showCat(){this.showCatv=!this.showCatv}
  showGenre(){this.showGenrev=!this.showGenrev}
  showTaille(){this.showTaillev=!this.showTaillev}
  showCouleurs(){this.showCouleursv=!this.showCouleursv}
  showPointure(){this.showPointurev=!this.showPointurev}
  showTAg(){this.showTAgsv=!this.showTAgsv}

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.GetBrand(this.id)
        this.GetProduitByIdBrand(this.id)
  }
  GetProduitByIdBrand(id:any){
    this.produitservice.GetProduitByIdBrand(id).subscribe(res=>{
   console.log(res);
   this.produits=res
   this.filteredProducts=this.produits
   this.filteredBrand=[...this.produits]
    
 })
 }
  getCurrentPageProducts() {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    if(this.filteredProducts){
      return this.filteredProducts.slice(startIndex, startIndex + this.pageSize);

    }
}
previousPage() {
  if (this.currentPage > 1) {
      this.currentPage--;
  }
}

nextPage() {
  if (this.currentPage < this.getMaxPage()) {
      this.currentPage++;
  }
}
getPageNumbers(): number[] {
  let maxPage = this.getMaxPage();
  return Array(maxPage).fill(0).map((x, i) => i + 1); // Retourne un tableau comme [1, 2, 3,...]
}

goToPage(page: number) {
  this.currentPage = page;
}
getMaxPage() {
  if(this.filteredProducts){
    return Math.ceil(this.filteredProducts.length / this.pageSize);
  }
  
}

 filtrerDonnees(): void {
  this.filteredProducts = this.produits.filter((brand: any) => 
  brand.Produit.toLowerCase().includes(this.term.toLowerCase()) ||
  brand.SousCategorie.toLowerCase().includes(this.term.toLowerCase() || 
  brand.DetailsP.toLowerCase().includes(this.term.toLowerCase()) ))

  
}
 GetBrand(id:any) {
     this.brandservice.getBrandByid(id).subscribe((res) => {
        console.log(res[0])
      this.brand=res[0]
    this.image='https://api.venteprivilegiee.com/image/'+this.brand.Image 
  this.setBgImage(this.image)})}
  setBgImage(imageUrl:any) {
    const element = document.querySelector('.inner-bg111') as HTMLElement;
    element.style.backgroundImage = `url(${imageUrl})`;
  }
  applyFilter() {
  console.log(this.filterModel)
    if (this.filterModel.genre) {
      this.filteredProducts = this.produits.filter(product => product.Genre === this.filterModel.genre);
      this.filterModel.genre=''
      this.term=''
    } 
    if (this.filterModel.cat) {
      this.filteredProducts = this.produits.filter(product => product.SousCategorie === this.filterModel.cat);
      this.filterModel.cat=''
      this.term=''
    } 
    if (this.filterModel.color) {
      this.filteredProducts = this.produits.filter(product => product.Couleur === this.filterModel.color);
      this.filterModel.color=''
      this.term=''
    } 
    if (this.filterModel.size && this.brand.Categorie=='Mode'|| (this.filterModel.size && this.showTailleExtrav)) {
      this.filteredProducts = this.produits.filter(product => product.Taille.includes(this.filterModel.size));
      this.filterModel.size=''
      this.term=''
    } 
    if ((this.filterModel.size && this.brand.Categorie=='Chaussure') || (this.filterModel.size && this.showPointurExtrav ) ) {
      this.filteredProducts = this.produits.filter(product => product.pointure.includes(this.filterModel.size));
      this.filterModel.size=''
      this.term=''
    } 
    if (this.filterModel.tag) {
      this.filteredProducts = this.produits.filter(product => product.DetailsP.includes(this.filterModel.tag));
      this.filterModel.tag=''
      this.term=''
    }
  }
  showTailleExtra(){
    this.showTailleExtrav = true 
    this.showPointurExtrav = false 
  }
  showPointureExtra(){
    this.showPointurExtrav = true 
    this.showTailleExtrav=false
  }
  closedFiltre(){
    this.showTailleExtrav=false
    this.showPointurExtrav = false 
  }
  
}


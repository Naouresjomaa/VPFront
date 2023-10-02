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
brand : any
  image: any;
  produits : any
  filterModel = {
    cat:'',
    type: '', 
    genre:'', 
    priceRange: '',
    size: '', 
    color: '',
    tag:''
  };
  filteredProducts: any;
  constructor(private route: ActivatedRoute,private brandservice : BrandService,private produitservice :ProduitService) { }

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
    
 })
 }
 GetBrand(id:any) {
     this.brandservice.getBrandByid(id).subscribe((res) => {
        console.log(res[0])
      this.brand=res[0]
    this.image='http://localhost:3000/image/'+this.brand.Image 
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
    } 
    if (this.filterModel.cat) {
      this.filteredProducts = this.produits.filter(product => product.SousCategorie === this.filterModel.cat);
      this.filterModel.cat=''
      
    } 
    if (this.filterModel.color) {
      this.filteredProducts = this.produits.filter(product => product.Couleur === this.filterModel.color);
      this.filterModel.color=''
      
    } 
    if (this.filterModel.size) {
      this.filteredProducts = this.produits.filter(product => product.Taille.includes(this.filterModel.size));
      this.filterModel.size=''
      
    } 
    if (this.filterModel.tag) {
      this.filteredProducts = this.produits.filter(product => product.DetailsP.includes(this.filterModel.tag));
      this.filterModel.tag=''
      
    }

   
  }
 
  
}


import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BrandService } from 'src/app/services/brand.service';
import { ProduitService } from 'src/app/services/produit.service';

@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.scss']
})
export class ProductsDetailsComponent implements OnInit {
id:any;
produit:any;
  constructor(private route:ActivatedRoute,private brandservice:BrandService,private produitservice:ProduitService) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params.id;
    this.GetProduct();
  }
  GetProduct(){
    this.produitservice.getProduitByid(this.id).subscribe(res=>{
        this.produit=res;
        console.log(this.produit);
    })
  }
}

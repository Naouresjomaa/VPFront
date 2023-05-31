import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BrandService } from 'src/app/services/brand.service';
import { DataService } from 'src/app/services/data.service';
import { ProduitService } from 'src/app/services/produit.service';

@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.scss']
})
export class ProductsDetailsComponent implements OnInit {
id:any;
produit:any;
  constructor(private route:ActivatedRoute,private brandservice:BrandService,private produitservice:ProduitService,private dataservice:DataService) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params.id;
    this.GetProduct();
    this.dataservice.auth.subscribe(data=>{
    })
  }
  GetProduct(){
    this.produitservice.getProduitByid(this.id).subscribe(res=>{
        this.produit=res;
    })
  }
}

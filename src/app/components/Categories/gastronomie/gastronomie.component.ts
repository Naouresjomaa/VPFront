import { Component, OnInit } from '@angular/core';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-gastronomie',
  templateUrl: './gastronomie.component.html',
  styleUrls: ['./gastronomie.component.scss']
})
export class GastronomieComponent implements OnInit {
brand:any;
brandgj:any;
brandep:any;
brandpf:any;
  constructor(private Brandservice:BrandService) { }

  ngOnInit(): void {
    this.GetBrands();
  }

  GetBrands(){
    this.Brandservice.GetBrandGastronomie().subscribe(res=>{
        this.brand=res;
        this.brandgj=0;
        this.brandep=0;
        this.brandpf=0;
        for (var i = 0; i < this.brand.length; i++) {
            if(this.brand[i].SousCategorie=="LE GOUT DU JOUR"){
              this.brandgj+=1;
            }
            else if(this.brand[i].SousCategorie=="ÉPICERIE"){
                this.brandep+=1;
            }
            else if(this.brand[i].SousCategorie=="LES PRODUITS FRAIS"){
                this.brandpf+=1;
            }
        }
    })
  }

}

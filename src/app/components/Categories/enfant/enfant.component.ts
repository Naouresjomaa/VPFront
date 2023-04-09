import { Component, OnInit } from '@angular/core';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-enfant',
  templateUrl: './enfant.component.html',
  styleUrls: ['./enfant.component.scss']
})
export class EnfantComponent implements OnInit {
brand:any;
brandaj:any;
brandmo:any;
brandjo:any;
brandbe:any;
brandmob:any;
brandsej:any;
  constructor(private Brandservice:BrandService) { }

  ngOnInit(): void {
    this.Getbrand();
  }

  Getbrand(){
    this.Brandservice.GetBrandEnfant().subscribe(res=>{
     this.brand=res;
     this.brandmo=0;
     this.brandjo=0;
     this.brandbe=0;
     this.brandmob=0;
     this.brandsej=0;
     for (var i = 0; i < this.brand.length; i++) {
        if (this.brand[i].SousCategorie == "LA MODE") {
            this.brandmo+=1;
        }
        else if(this.brand[i].SousCategorie == "LE JOUET"){
            this.brandjo+=1;
        }
        else if(this.brand[i].SousCategorie == "LE BEBE"){
            this.brandbe+=1;
        }
        else if(this.brand[i].SousCategorie == "LE MOBILIER"){
            this.brandmob+=1;
        }
        else if(this.brand[i].SousCategorie == "LES SÉJOURS EN FAMILLE"){
            this.brandsej+=1;
        }
     }
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-beaute',
  templateUrl: './beaute.component.html',
  styleUrls: ['./beaute.component.scss']
})
export class BeauteComponent implements OnInit {
brand:any;
brandve:any;
brandet:any;
brandch:any;
brandma:any;
brandpar:any;
brandsoi:any;
brandspa:any;
brandunib:any;
  constructor(private Brandservice:BrandService) { }

  ngOnInit(): void {
    this.GetBrands();
  }

  GetBrands(){
    this.Brandservice.GetBrandBeaute().subscribe(res=>{
        this.brand=res;
        this.brandve=0;
        this.brandet=0;
        this.brandch=0;
        this.brandma=0;
        this.brandpar=0;
        this.brandsoi=0;
        this.brandspa=0;
        this.brandunib=0;
        for (var i = 0; i < this.brand.length; i++){
            if(this.brand[i].SousCategorie=='LES VENTES ÉPHÉMÈRES'){
                this.brandve+=1;
            }
            else if(this.brand[i].SousCategorie=='UNE ENVIE EN TÊTE ?'){
                this.brandet+=1;
            }
            else if (this.brand[i].SousCategorie=='LES CHEVEUX'){
                this.brandch+=1;
            }
            else if (this.brand[i].SousCategorie=='LE MAQUILLAGE'){
                this.brandma+=1;
            }
            else if (this.brand[i].SousCategorie=='LES PARFUMS'){
                this.brandpar+=1;
            }
            else if (this.brand[i].SousCategorie=='LES SOINS'){
                this.brandsoi+=1;
            }
            else if (this.brand[i].SousCategorie=='LE SPA'){
                this.brandspa+=1;
            }
            else if (this.brand[i].SousCategorie=='LES UNIVERS BEAUTÉ'){
                this.brandunib+=1;
            }
         }
    })
  }

}

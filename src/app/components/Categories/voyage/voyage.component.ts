import { Component, OnInit } from '@angular/core';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-voyage',
  templateUrl: './voyage.component.html',
  styleUrls: ['./voyage.component.scss']
})
export class VoyageComponent implements OnInit {
brand:any;
brandc:any;
brandt:any;
brande:any;
brandde:any;
brandcata:any;
brandder:any;
  constructor(private Brandservice:BrandService) { }

  ngOnInit(): void {
    this.GetBrands();
  }

  GetBrands(){
    this.Brandservice.GetBrandVoyage().subscribe(res=>{
        this.brand=res;
        this.brandc=0;
        this.brandt=0;
        this.brande=0;
        this.brandde=0;
        this.brandcata=0;
        this.brandder=0;
        for (var i = 0; i < this.brand.length; i++){
            if(this.brand[i].SousCategorie=='COUPS DE COEUR'){
                this.brandc+=1;
            }
            else if(this.brand[i].SousCategorie=='TOP 5 DESTINATIONS'){
                this.brandt+=1;
            }
            else if (this.brand[i].SousCategorie=='EUROPE ET MÉDITERRANÉE'){
                this.brande+=1;
            }
            else if (this.brand[i].SousCategorie=='DESTINATIONS LOINTAINES'){
                this.brandde+=1;
            }
            else if (this.brand[i].SousCategorie=='CATALOGUE VOYAGE PERMANENT'){
                this.brandcata+=1;
            }
            else if (this.brand[i].SousCategorie=='DERNIERS JOURS'){
                this.brandder+=1;
            }
         }
    })
  }

}

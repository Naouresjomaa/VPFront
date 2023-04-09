import { Component, OnInit } from '@angular/core';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-mode',
  templateUrl: './mode.component.html',
  styleUrls: ['./mode.component.scss']
})
export class ModeComponent implements OnInit {
brand:any;
NbA:any;
NbP:any;
NbC:any;
NbS:any;
NbH:any;
  constructor(private Brandservice:BrandService) { }

  ngOnInit(): void {
   this.GetModeBrand();
  }

  GetModeBrand(){
    this.Brandservice.GetBrandModde().subscribe(res=>{
     this.brand=res;
     this.NbP=0;
     this.NbC=0;
     this.NbS=0;
     this.NbH=0;
     for (var i = 0; i < this.brand.length; i++){
        if(this.brand[i].SousCategorie=='LE PRÊT-A-PORTER'){
            this.NbP+=1;
        }
        else if (this.brand[i].SousCategorie=='LA CHAUSSURE'){
            this.NbC+=1;
        }
        else if (this.brand[i].SousCategorie=='LES SACS & ACCESSOIRES'){
            this.NbS+=1;
        }
        else if (this.brand[i].SousCategorie=='HOMME'){
            this.NbH+=1;
        }
     }
    })
  }

}

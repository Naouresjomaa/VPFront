import { Component, OnInit } from '@angular/core';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-sport',
  templateUrl: './sport.component.html',
  styleUrls: ['./sport.component.scss']
})
export class SportComponent implements OnInit {
brand:any;
brandf:any;
brando:any;
brands:any;
  constructor(private Brandservice:BrandService) { }

  ngOnInit(): void {
    this.Getbrand();
  }

  Getbrand(){
    this.Brandservice.GetBrandSport().subscribe(res=>{
        this.brand=res;
        this.brandf=0;
        this.brando=0;
        this.brands=0;
        for (var i = 0; i < this.brand.length; i++) {
            if (this.brand[i].SousCategorie == "FITNESS") {
                this.brandf += 1;
            } else if (this.brand[i].SousCategorie == "OUTDOOR") {
                this.brando += 1;
            } else if (this.brand[i].SousCategorie == "SPORTSWEAR") {
                this.brands += 1;
            }
        }
    })
  }


}

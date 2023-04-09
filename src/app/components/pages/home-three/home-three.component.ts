import { Component, OnInit } from '@angular/core';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-home-three',
  templateUrl: './home-three.component.html',
  styleUrls: ['./home-three.component.scss']
})
export class HomeThreeComponent implements OnInit {
brand1:any;
brand2:any;
brand3:any;
  constructor(private branservice:BrandService) { }

  ngOnInit(): void {
    this.GetAcc1();
    this.GetAcc2();
    this.GetAcc3();
  }

  GetAcc1(){
    this.branservice.GetBrandAcc1().subscribe(res=>{
    this.brand1=res;
    })
  }
  GetAcc2(){
    this.branservice.GetBrandAcc2().subscribe(res=>{
    this.brand2=res;
    })
  }
  GetAcc3(){
    this.branservice.GetBrandAcc3().subscribe(res=>{
    this.brand3=res;
    })
  }

}

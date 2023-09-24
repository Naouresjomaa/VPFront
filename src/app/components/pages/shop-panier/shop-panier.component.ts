import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop-panier',
  templateUrl: './shop-panier.component.html',
  styleUrls: ['./shop-panier.component.scss',
  '../shop-brand/css/bootstrap.min.css',"../shop-brand/css/font-awesome.min.css","../shop-brand/css/elegant-icons.css"
  ,"../shop-brand/css/magnific-popup.css","../shop-brand/css//nice-select.css","../shop-brand/css/owl.carousel.min.css","../shop-brand/css/slicknav.min.css","../shop-brand/css/style.css"]
})
export class ShopPanierComponent implements OnInit {
  payment =false;
paypal=false;
  checked(opt:string){
    if(opt=='payment'){
        this.payment= !this.payment;
      this.paypal=false  } 
    if(opt == 'paypal'){
      this.paypal=!this.paypal;
      this.payment=false
    }
  }
  constructor() { }

  ngOnInit(): void {
  }
  

}

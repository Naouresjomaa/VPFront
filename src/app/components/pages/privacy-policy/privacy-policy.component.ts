import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, CanActivate } from '@angular/router';

@Component({
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.scss']
})
export class PrivacyPolicyComponent implements OnInit {
  payment_id: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.payment_id= this.route.snapshot.queryParamMap.get('payment_id');
  }
 
}

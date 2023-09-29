import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, CanActivate } from '@angular/router';
import { CommandeService } from 'src/app/services/commande.service';

@Component({
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.scss']
})
export class PrivacyPolicyComponent implements OnInit {
  payment_id: any;

  constructor(private route: ActivatedRoute , private commandeServicie : CommandeService) { }

  ngOnInit(): void {
    this.payment_id= this.route.snapshot.queryParamMap.get('payment_id');
    console.log('this.payment_id',this.payment_id)
    this.getCommandeByPaiementId( this.payment_id)
  }
 getCommandeByPaiementId(id){
  this.commandeServicie.GetCommandeByidP(id).subscribe(res=>{console.log(res)
    let commande =res[0]
  this.commandeServicie.sendOrderEmail(commande).subscribe(res=>console.log(res))
})
 }
}

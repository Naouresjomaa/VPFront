import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import jwt_decode from "jwt-decode";
import { ClientService } from "src/app/services/client.service";
import { ClientModel } from "src/app/services/model/Client.model";
import Swal from "sweetalert2";
@Component({
    selector: "app-compte",
    templateUrl: "./compte.component.html",
    styleUrls: ["./compte.component.scss"],
})
export class CompteComponent implements OnInit {
    update :boolean=false;
    userData: any;
    token: any;
    client = new ClientModel();
    response: any;
    data: any;
    adress: any;
    adresslist: any = [];
    constructor(private clientservice: ClientService, private router: Router) {}

    ngOnInit(): void {
        this.token = localStorage.getItem("isLoggedin");
        this.userData = jwt_decode(this.token);
        this.GetClientByid();
    }

    GetClientByid() {
        this.clientservice.getClientByid(this.userData.id).subscribe((res) => {
            this.data = res;
            this.client = this.data[0];
            console.log('this.client',this.client)
        });
    }
    clickUpdate(){
        this.update=!this.update
    }
    updateClient(){
        this.clientservice.UpdateClient(this.userData.id,this.client).subscribe((res:any)=>{
            console.log(res)
        })
    }
 

 
}

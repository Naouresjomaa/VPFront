import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { CommandeModel } from "./model/Commande.model";
@Injectable({
    providedIn: "root",
})
export class CommandeService {
    constructor(private http: HttpClient) {}
    GetCommandes(Email: any, UserName: any) {
        const headers = new HttpHeaders();
        return this.http.get(
            environment.apiurl + "/Commande/" + Email + "/" + UserName,
            {
                headers: headers,
            }
        );
    }
    LastInvoice(Email: any, UserName: any) {
        const headers = new HttpHeaders();
        return this.http.get(
            environment.apiurl + "/LastInvoice/" + Email + "/" + UserName,
            {
                headers: headers,
            }
        );
    }
    GetCommandeByid(id: any) {
        const headers = new HttpHeaders();
        return this.http.get(environment.apiurl + "/CommandeId/" + id, {
            headers: headers,
        });
    }
    CreateCommande(data: CommandeModel): Observable<any> {
        const headers = new HttpHeaders();
        return this.http.post(environment.apiurl + "/CreateCommande", data, {
            headers: headers,
        });
    }
    UpdateCommande(id: any, data: CommandeModel): Observable<any> {
        const headers = new HttpHeaders();
        return this.http.put(
            environment.apiurl + "/UpdateCommande/" + id,
            data,
            {
                headers: headers,
            }
        );
    }
    sendOrderEmail(data) {
        const headers = new HttpHeaders();
        return this.http.post(environment.apiurl + "/send-email",data,{
            headers: headers,
        });
    }
    paiementenligne(){
        const headers = new HttpHeaders();
        return this.http.post(environment.apiurl + "/paiement",{
            headers: headers,
        });   
    }
}

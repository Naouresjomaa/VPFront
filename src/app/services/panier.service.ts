import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { PanierModel } from "../model/Panier.model";
@Injectable({
    providedIn: "root",
})
export class PanierService {
    constructor(private http: HttpClient) {}
    AddPanier(data: PanierModel): Observable<any> {
        const headers = new HttpHeaders();
        return this.http.post(environment.apiurl + "/AddPanier", data, {
            headers: headers,
        });
    }
    Getpanier(Email: any, UserName: any): Observable<any> {
        const headers = new HttpHeaders();
        return this.http.get(
            environment.apiurl + "/Panier/" + Email + "/" + UserName,
            {
                headers: headers,
            }
        );
    }
    Removepanier(id: any) {
        return this.http.delete(environment.apiurl + "/Deletepanier/" + id);
    }
    UpdatePanier(id: any, data: PanierModel): Observable<any> {
        const headers = new HttpHeaders();
        return this.http.put(environment.apiurl + "/UpdatePanier/" + id, data, {
            headers: headers,
        });
    }
}

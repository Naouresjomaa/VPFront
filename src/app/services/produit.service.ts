import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { ProduitModel } from "../model/Produit.model";
@Injectable({
    providedIn: "root",
})
export class ProduitService {
  
    constructor(private http: HttpClient) {}
    GetProduitByBrand(Brand: any, SousCategorie: any): Observable<any> {
        const headers = new HttpHeaders();
        return this.http.get(
            environment.apiurl + "/Produit/" + Brand + "/" + SousCategorie,
            {
                headers: headers,
            }
        );
    }



    GetProduitByIdBrand(id: any) : Observable<any> {
        const headers = new HttpHeaders();
        return this.http.get(
            environment.apiurl + "/Produit/"+id ,
            {
                headers: headers,
            }
        );
    }


    getProduitByid(id: any): Observable<any> {
        const headers = new HttpHeaders();
        return this.http.get(environment.apiurl + "/Product/" + id, {
            headers: headers,
        });
    }
    Getparameters(Categorie: any, SousCategorie: any): Observable<any> {
        const headers = new HttpHeaders();
        return this.http.get(
            environment.apiurl +
                "/parameter/" +
                Categorie +
                "/" +
                SousCategorie,
            { headers: headers }
        );
    }
    UpdateProduit(id: any, data: ProduitModel): Observable<any> {
        const headers = new HttpHeaders();
        return this.http.put(
            environment.apiurl + "/UpdateProduit/" + id,
            data,
            {
                headers: headers,
            }
        );
    }
}

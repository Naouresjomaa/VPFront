import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "src/environments/environment";
@Injectable({
    providedIn: "root",
})
export class LivraisonService {
    constructor(private http: HttpClient) {}
    GetLivraisons() {
        return this.http.get(environment.apiurl + "/Livraisons");
    }
}

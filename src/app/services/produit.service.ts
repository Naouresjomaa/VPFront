import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProduitService {
    constructor(private http: HttpClient) { }
    GetProduitByBrand(Brand:any): Observable<any>{
        const headers = new HttpHeaders();
        return this.http.get('http://localhost:3000/Produit/'+Brand,{
          headers: headers,
        });
    }
    getProduitByid(id:any) : Observable<any>{
        const headers = new HttpHeaders();
        return this.http.get('http://localhost:3000/Product/'+id,{
          headers: headers,
        });
      }
}

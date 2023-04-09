import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BrandService {
    constructor(private http: HttpClient) { }


    GetBrands() : Observable<any>{
        const headers = new HttpHeaders();
        return this.http.get('http://localhost:3000/Brands',{
          headers: headers,
        });
      }

    GetBrandModde() : Observable<any>{
        const headers = new HttpHeaders();
        return this.http.get('http://localhost:3000/BrandMode',{
          headers: headers,
        });
      }

    GetBrandMaison() : Observable<any>{
        const headers = new HttpHeaders();
        return this.http.get('http://localhost:3000/BrandMaison',{
          headers: headers,
        });
      }

      GetBrandVoyage() : Observable<any>{
        const headers = new HttpHeaders();
        return this.http.get('http://localhost:3000/BrandVoyage',{
          headers: headers,
        });
      }

      GetBrandBeaute() : Observable<any>{
        const headers = new HttpHeaders();
        return this.http.get('http://localhost:3000/BrandBeaute',{
          headers: headers,
        });
      }

      GetBrandGastronomie() : Observable<any>{
        const headers = new HttpHeaders();
        return this.http.get('http://localhost:3000/BrandGastronomie',{
          headers: headers,
        });
      }

      GetBrandEnfant() : Observable<any>{
        const headers = new HttpHeaders();
        return this.http.get('http://localhost:3000/BrandEnfant',{
          headers: headers,
        });
      }

      GetBrandLoisir() : Observable<any>{
        const headers = new HttpHeaders();
        return this.http.get('http://localhost:3000/BrandLoisir',{
          headers: headers,
        });
      }

      GetBrandSport() : Observable<any>{
        const headers = new HttpHeaders();
        return this.http.get('http://localhost:3000/BrandSport',{
          headers: headers,
        });
      }

      GetBrandAcc1() : Observable<any>{
        const headers = new HttpHeaders();
        return this.http.get('http://localhost:3000/BrandAcc1',{
          headers: headers,
        });
      }

      GetBrandAcc2() : Observable<any>{
        const headers = new HttpHeaders();
        return this.http.get('http://localhost:3000/BrandAcc2',{
          headers: headers,
        });
      }

      GetBrandAcc3() : Observable<any>{
        const headers = new HttpHeaders();
        return this.http.get('http://localhost:3000/BrandAcc3',{
          headers: headers,
        });
      }

      getBrandByid(id:any) : Observable<any>{
        const headers = new HttpHeaders();
        return this.http.get('http://localhost:3000/brand/'+id,{
          headers: headers,
        });
      }

}

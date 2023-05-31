import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
@Injectable({
    providedIn: "root",
})
export class BrandService {
    constructor(private http: HttpClient) {}
    GetBrands(): Observable<any> {
        const headers = new HttpHeaders();
        return this.http.get(environment.apiurl + "/Brands", {
            headers: headers,
        });
    }
    GetBrandModde(): Observable<any> {
        const headers = new HttpHeaders();
        return this.http.get(environment.apiurl + "/BrandMode", {
            headers: headers,
        });
    }

    GetBrandMaison(): Observable<any> {
        const headers = new HttpHeaders();
        return this.http.get(environment.apiurl + "/BrandMaison", {
            headers: headers,
        });
    }
    GetBrandVoyage(): Observable<any> {
        const headers = new HttpHeaders();
        return this.http.get(environment.apiurl + "/BrandVoyage", {
            headers: headers,
        });
    }
    GetBrandBeaute(): Observable<any> {
        const headers = new HttpHeaders();
        return this.http.get(environment.apiurl + "/BrandBeaute", {
            headers: headers,
        });
    }
    GetBrandGastronomie(): Observable<any> {
        const headers = new HttpHeaders();
        return this.http.get(environment.apiurl + "/BrandGastronomie", {
            headers: headers,
        });
    }
    GetBrandEnfant(): Observable<any> {
        const headers = new HttpHeaders();
        return this.http.get(environment.apiurl + "/BrandEnfant", {
            headers: headers,
        });
    }
    GetBrandLoisir(): Observable<any> {
        const headers = new HttpHeaders();
        return this.http.get(environment.apiurl + "/BrandLoisir", {
            headers: headers,
        });
    }
    GetBrandSport(): Observable<any> {
        const headers = new HttpHeaders();
        return this.http.get(environment.apiurl + "/BrandSport", {
            headers: headers,
        });
    }

    GetBrandAcc1(): Observable<any> {
        const headers = new HttpHeaders();
        return this.http.get(environment.apiurl + "/BrandAcc1", {
            headers: headers,
        });
    }
    GetBrandAcc2(): Observable<any> {
        const headers = new HttpHeaders();
        return this.http.get(environment.apiurl + "/BrandAcc2", {
            headers: headers,
        });
    }
    GetBrandAcc3(): Observable<any> {
        const headers = new HttpHeaders();
        return this.http.get(environment.apiurl + "/BrandAcc3", {
            headers: headers,
        });
    }
    getBrandByid(id: any): Observable<any> {
        const headers = new HttpHeaders();
        return this.http.get(environment.apiurl + "/brand/" + id, {
            headers: headers,
        });
    }
}

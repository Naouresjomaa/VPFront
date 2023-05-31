import { Injectable } from "@angular/core";
import { ClientModel, NewlModel } from "../model/Client.model";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
@Injectable({
    providedIn: "root",
})
export class ClientService {
    constructor(private http: HttpClient) {}
    AddClient(data: ClientModel): Observable<any> {
        const headers = new HttpHeaders();
        return this.http.post(environment.apiurl + "/AddClient", data, {
            headers: headers,
        });
    }
    UpdateClient(id: any, data: ClientModel): Observable<any> {
        const headers = new HttpHeaders();
        return this.http.put(environment.apiurl + "/Updateclient/" + id, data, {
            headers: headers,
        });
    }
    getClientByid(id: any): Observable<any> {
        const headers = new HttpHeaders();
        return this.http.get(environment.apiurl + "/client/" + id, {
            headers: headers,
        });
    }
    LoginAuth(data: any) {
        const headers = new HttpHeaders();
        return this.http.post(environment.apiurl + "/AuthClient", data, {
            headers: headers,
        });
    }
    AddNewsletter(data: NewlModel) {
        const headers = new HttpHeaders();
        return this.http.post(environment.apiurl + "/AddNewsletter", data, {
            headers: headers,
        });
    }
}

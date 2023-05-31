import { Injectable } from "@angular/core";
import { BehaviorSubject, Subject } from "rxjs";
@Injectable({
    providedIn: "root",
})
export class DataService {
    auth = new Subject();
    constructor() {}
    setAuth(auth) {
        this.auth.next(auth);
    }
}

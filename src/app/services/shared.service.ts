import { Injectable } from "@angular/core";
import { BehaviorSubject, Subject } from "rxjs";
@Injectable({
    providedIn: "root",
})
export class SharedService {
    commande = new Subject();
    constructor() {}
    setCommande(commande) {
        this.commande.next(commande);
    }
}

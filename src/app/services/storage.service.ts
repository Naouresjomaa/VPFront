import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private panierSubject = new BehaviorSubject<number>(this.getPanierFromLocalStorage());
  panier$ = this.panierSubject.asObservable();

  constructor() {}

  setPanier(panier: number) {
    localStorage.setItem('panier', JSON.stringify(panier));
    this.panierSubject.next(panier);
  }

  private getPanierFromLocalStorage(): number {
    const storedPanier = localStorage.getItem('panier');
    return storedPanier ? JSON.parse(storedPanier) : 0;
  }
}

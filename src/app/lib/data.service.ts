import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
    private cartObj = new  BehaviorSubject([]);
    public cartList = this.cartObj.asObservable();
  constructor() { }

  addToCart(obj) {
      this.cartObj.next(this.cartObj.getValue().concat(obj));
  }
}

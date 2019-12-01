import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {CartItem} from '../modal/cartItem';

@Injectable({
  providedIn: 'root'
})


export class DataService {


  products: any = [];
  private searchContent = new BehaviorSubject(null);
  public searchText = this.searchContent.asObservable();
  private cartObj = new BehaviorSubject<CartItem[]>([]);
  public cartList = this.cartObj.asObservable();

  constructor() {
  }

  removeToCart(i) {
    let newCartObj;
    this.cartList.subscribe(res => {
      newCartObj = res.filter((item) => item.id !== i);
      this.cartObj.next(newCartObj);
    });
  }

  addToCart(obj) {
    this.cartObj.next(this.cartObj.getValue().concat(obj));

    // if (this.products.filter(e => e.item.productID === product.productID).length > 0) {
    //   this.products.forEach((e) => {
    //     if (e.item.productID == product.productID) {
    //       e.quantity = quantity;
    //     }
    //   })
    // } else {
    //   this.products.push({
    //     item: product,
    //     quantity: quantity
    //   });
    // }


    // console.log(obj);
    // this.cartList.subscribe(res => {
    //   if (res === null && null === []) {
    //     this.cartObj.next(this.cartObj.getValue().concat(obj));
    //   }
    //   res.forEach((element, index) => {
    //     console.log(element.id, obj.id)
    //     if (element.id === obj.id) {
    //       obj.quantity = obj.quantity + 1;
    //       res[index] = obj;
    //     }
    //   });
    //   console.log(res);
    //   // this.cartObj.next(this.cartObj.getValue().concat(obj));
    // });
  }


  setSearchText(text: string) {
    this.searchContent.next(text);
  }

}

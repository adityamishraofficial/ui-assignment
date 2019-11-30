import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {CartItem} from '../modal/cartItem';

@Injectable({
    providedIn: 'root'
})


export class DataService {
  //
  //
  // productsRef = new BehaviorSubject<any>([]);
  //
  // cartProducts = this.productsRef.asObservable();
  //
  // constructor() {
  //     // this.productsRef.next(this.products);
    //  }
  //
  // //  getCartProduct(){
  // //    return this.products.asObservable;
  // //  }
  //
  //  addToCart(product,quantity){
  //      const  products = [];
  //   this.cartProducts.subscribe( res => {
  //             if(res.filter(e => e.item.id === product.id).length > 0) {
  //      res.forEach((e)=>{
  //         if(e.item.id == product.id ) {
  //             e.quantity = quantity;
  //         }
  //      })
  //   } else {
  //     products.push({
  //         item : product,
  //         quantity : quantity
  //     });
  //   }
  // })
  //
  //   this.productsRef.next(products);
  // this.productsRef.subscribe(res => {
  //     console.log(res);
  // })
  //
  //  }
  //
  // removeFromCart(product){
  // //   this.products =  this.products.filter(e => e.item.id != product.item.id);
  // //   this.productsRef.next(this.products);
  // }


  products: any = [];
  private searchContent = new BehaviorSubject(null);
  public searchText = this.searchContent.asObservable();
  private cartObj = new BehaviorSubject<CartItem[]>([]);
  public cartList = this.cartObj.asObservable();

  constructor() {
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

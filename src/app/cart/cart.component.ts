import {Component, OnInit} from '@angular/core';
import {DataService} from '../lib/data.service';
import {CartItem} from '../modal/cartItem';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartList: Array<CartItem> = [];
  totalPrice = 0;
  discountPrice = 0;
  totalItem = 0;
  allItemPrice = 0;

  constructor(
    private dataService: DataService
  ) {
  }

  ngOnInit() {
    this.dataService.cartList.subscribe(res => {
      this.clear();
      this.totalItem = res.length;
      this.cartList = res;
      this.countPrice(res);
    });
  }

  countPrice(productList) {
    for (const item of productList) {
      this.totalPrice += parseInt(item.price);
    }
    this.countDiscountPrice(productList);
  }

  countDiscountPrice(productList) {
    let discountPrice = 0;
    for (const item of productList) {
      this.discountPrice += parseInt(item.price) * parseInt(item.discount) / 100;
    }
    this.allItemPrice = this.discountPrice + this.totalPrice;
  }

  onRemoveItem(id) {
    this.dataService.removeToCart(id);
  }

  clear() {
    this.totalItem = 0;
    this.discountPrice = 0;
    this.allItemPrice = 0;
    this.totalPrice = 0;
  }
}

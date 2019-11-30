import { Component, OnInit } from '@angular/core';
import { DataService } from '../lib/data.service';
import { CartItem } from '../modal/cartItem';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
    cartList: Array<CartItem[]> = [];
  constructor(
      private dataService: DataService
  ) { }

  ngOnInit() {
      console.log(this.dataService.getCartProduct());
  }

}

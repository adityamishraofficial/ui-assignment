import { Component, OnInit } from '@angular/core';
import { DataService } from '../lib/data.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(
      private dataService: DataService
  ) { }

  ngOnInit() {
      this.dataService.cartList.subscribe( res => {
          console.log(res);
      });
  }

}

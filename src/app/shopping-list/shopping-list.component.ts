import { Component, OnInit } from '@angular/core';
import { CurlService } from '../lib/curl.service';
import { DataService } from '../lib/data.service';
import { NgxUiLoaderService } from 'ngx-ui-loader'; // Import NgxUiLoaderService
import { CartItem } from '../modal/cartItem';


@Component({
    selector: 'app-shopping-list',
    templateUrl: './shopping-list.component.html',
    styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
    shoppingList: Array<CartItem[]> = [];
    constructor(
        private curl: CurlService,
        private dataService: DataService,
        private loading: NgxUiLoaderService
    ) { }

    ngOnInit(): void {
        this.onGetShoppingList();
    }
    onGetShoppingList(): void {
        this.loading.start();
        const methodUrl = '/bins/qzuzi';
        const that = this;
        this.curl.getMethod(methodUrl).then((res) => {
            that.loading.stop();
            const result = res;
            that.shoppingList = result;
        });
    }
    onAddToCart(shoppingData: CartItem): void {
        // shoppingData['quantity'] = null;

        console.log(shoppingData);
        this.loading.start();
        this.dataService.addToCart(shoppingData, 1);
        this.loading.stop();
    }
}

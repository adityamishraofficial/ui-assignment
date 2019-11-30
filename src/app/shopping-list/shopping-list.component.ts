import { Component, OnInit } from '@angular/core';
import { CurlService } from '../lib/curl.service';
import { DataService } from '../lib/data.service';
import { NgxUiLoaderService } from 'ngx-ui-loader'; // Import NgxUiLoaderService


@Component({
    selector: 'app-shopping-list',
    templateUrl: './shopping-list.component.html',
    styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
    shoppingList = [];
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
    onAddToCart(shoppingData): void {
        this.loading.start();
        this.dataService.addToCart(shoppingData);
        this.loading.stop();
    }
}

import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {DataService} from '../lib/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    isSearch = false;
  searchText;

  cartItemCount: number;

  constructor(private route: Router, private dataService: DataService) {
  }

  ngOnInit() {
    this.dataService.cartList.subscribe(res => {
      this.cartItemCount = res.length;
    });
  }
  navigateToCart() {
    this.route.navigateByUrl('/cart');
  }

  onSearchPipe(event: Event) {
    let value = (event.target as HTMLInputElement).value;
    this.searchText = value;
    this.dataService.setSearchText(value);
  }
}

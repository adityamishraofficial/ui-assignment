import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { Routes, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    isSearch = false;
  constructor(private route: Router) { }

  ngOnInit() {
  }
  navigateToCart() {
    this.route.navigateByUrl('/cart');
  }
}

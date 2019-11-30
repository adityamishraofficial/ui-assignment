import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SearchComponent} from './search/search.component';
import {CartComponent} from './cart/cart.component';
import {SortComponent} from './sort/sort.component';
import {FilterComponent} from './filter/filter.component';
import {ShoppingListComponent} from './shopping-list/shopping-list.component';
import {HeaderComponent} from './header/header.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {Ng5SliderModule} from 'ng5-slider';
import {HttpClientModule} from '@angular/common/http';
import {NgxUiLoaderConfig, NgxUiLoaderModule} from 'ngx-ui-loader';
import {FilterPipe} from './pipe/filter.pipe';
import {SortPipe} from './pipe/sort.pipe';
import {SearchPipe} from './pipe/search.pipe';

const ngxUiLoaderConfig: NgxUiLoaderConfig = {
  // 'bgsColor': '#d12006',
  'bgsColor': '#d20303',
  'bgsOpacity': 0.2,
  'bgsPosition': 'bottom-right',
  'bgsSize': 90,
  'bgsType': 'ball-spin-clockwise',
  'blur': 2,
  // 'fgsColor': '#d12006',
  'fgsColor': '#d20303',
  'fgsPosition': 'center-center',
  'fgsSize': 0,
  'fgsType': 'three-strings',
  'gap': 24,
  'logoPosition': 'center-center',
  'logoSize': 190,
  'logoUrl': '',
  'masterLoaderId': 'master',
  'overlayBorderRadius': '0',
  'overlayColor': 'rgba(114,114,114,0.56)',
  'pbColor': 'red',
  'pbDirection': 'ltr',
  'pbThickness': 2,
  'hasProgressBar': true,
  'text': '',
  'textColor': '#FFFFFF',
  'textPosition': 'center-center'
};



@NgModule({
    declarations: [
        AppComponent,
        SearchComponent,
        CartComponent,
        SortComponent,
        FilterComponent,
        ShoppingListComponent,
      HeaderComponent,
      FilterPipe,
      SortPipe,
      SearchPipe
    ],
    imports: [
        BrowserModule,
        Ng5SliderModule,
        HttpClientModule,
        NgxUiLoaderModule.forRoot(ngxUiLoaderConfig),
        AppRoutingModule,
        BrowserAnimationsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }

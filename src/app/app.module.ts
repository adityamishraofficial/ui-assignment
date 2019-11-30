import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { CartComponent } from './cart/cart.component';
import { SortComponent } from './sort/sort.component';
import { FilterComponent } from './filter/filter.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Ng5SliderModule } from 'ng5-slider';
import { HttpClientModule } from '@angular/common/http';
import { NgxUiLoaderModule, NgxUiLoaderConfig, SPINNER, POSITION, PB_DIRECTION } from 'ngx-ui-loader';

const ngxUiLoaderConfig: NgxUiLoaderConfig = {
    'bgsColor': 'red',
    'bgsOpacity': 0.5,
    'bgsPosition': 'bottom-right',
    'bgsSize': 60,
    'bgsType': 'ball-spin-clockwise',
    'blur': 5,
    'delay': 0,
    'fgsColor': 'red',
    'fgsPosition': 'center-center',
    'fgsSize': 60,
    'fgsType': 'three-strings',
    'gap': 24,
    'logoPosition': 'center-center',
    'logoSize': 120,
    'logoUrl': '',
    'masterLoaderId': 'master',
    'overlayBorderRadius': '0',
    'overlayColor': 'rgba(40, 40, 40, 0.8)',
    'pbColor': 'red',
    'pbDirection': 'ltr',
    'pbThickness': 3,
    'hasProgressBar': true,
    'text': '',
    'textColor': '#FFFFFF',
    'textPosition': 'center-center',
    'maxTime': -1,
    'minTime': 500
};



@NgModule({
    declarations: [
        AppComponent,
        SearchComponent,
        CartComponent,
        SortComponent,
        FilterComponent,
        ShoppingListComponent,
        HeaderComponent
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

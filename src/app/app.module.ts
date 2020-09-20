import { browser } from 'protractor';
import { platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { MainheaderComponent } from './mainheader/mainheader.component';
import { ShopheaderComponent } from './shopheader/shopheader.component';
import { ShopnavComponent } from './shopnav/shopnav.component';
import { ShopfooterComponent } from './shopfooter/shopfooter.component';
import { ShoppingcartComponent } from './shoppingcart/shoppingcart.component';
import { CartComponent } from './shoppingcart/cart/cart.component';
import { FiltersComponent } from './shoppingcart/filters/filters.component';
import { ProductsComponent } from './shoppingcart/products/products.component';
import { CartListComponent } from './shoppingcart/cart/cart-list/cart-list.component';
import { ProductitemComponent } from './shoppingcart/products/productitem/productitem.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Homepagenave12Component } from './homepagenave12/homepagenave12.component';
import { Homepagefooter12Component } from './homepagefooter12/homepagefooter12.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainheaderComponent,
    ShopheaderComponent,
    ShopnavComponent,
    ShopfooterComponent,
    ShoppingcartComponent,
    CartComponent,
    FiltersComponent,
    ProductsComponent,
    CartListComponent,
    ProductitemComponent,
    Homepagenave12Component,
    Homepagefooter12Component,
   

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
 
    RouterModule.forRoot([
    
    {
      path:'login/', component : LoginComponent
    },
  ]),
    NgbModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

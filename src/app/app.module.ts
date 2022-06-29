import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { FooterComponent } from './footer/footer.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import {HttpClientModule} from '@angular/common/http';
import { SafePipe } from './safe.pipe';
import { NextLinePipe } from './next-line.pipe'


import { HomeComponent } from './home/home.component';
import { AllproductsComponent } from './allproducts/allproducts.component';
import { SaleComponent } from './sale/sale.component';
import { LocationComponent } from './location/location.component';
import { Detals1Component } from './detals1/detals1.component';
import { CanvasComponent } from './canvas/canvas.component';
import { OffCanvasComponent } from './off-canvas/off-canvas.component';
import { Details2Component } from './details2/details2.component';
import { Details3Component } from './details3/details3.component';
import { CartComponent } from './cart/cart.component';
import { ProductfilterComponent } from './productfilter/productfilter.component';
import { Productfilter1Component } from './productfilter1/productfilter1.component';
import { Productfilter2Component } from './productfilter2/productfilter2.component';
import { Productfilter3Component } from './productfilter3/productfilter3.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ForgetPasswardComponent } from './forget-passward/forget-passward.component';
import { RessetPasswordComponent } from './forget-passward/resset-password/resset-password.component';
import { LogInComponent } from './log-in/log-in.component';
import { LogOutComponent } from './log-out/log-out.component';
import { MainLogComponent } from './main-log/main-log.component';
import { AccountDetailsComponent } from './my-account/account-details/account-details.component';
import { AddressesComponent } from './my-account/addresses/addresses.component';
import { BillingAddressComponent } from './my-account/addresses/billing-address/billing-address.component';
import { ShippingAddressComponent } from './my-account/addresses/shipping-address/shipping-address.component';
import { DashboardComponent } from './my-account/dashboard/dashboard.component';
import { DownloadsComponent } from './my-account/downloads/downloads.component';
import { LogOutSiteComponent } from './my-account/log-out-site/log-out-site.component';
import { MyAccountComponent } from './my-account/my-account.component';
import { OrdersComponent } from './my-account/orders/orders.component';
import { PaymentInsiteComponent } from './my-account/payment-methods/payment-insite/payment-insite.component';
import { PaymentMethodsComponent } from './my-account/payment-methods/payment-methods.component';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';
import { ConfirmComponent } from './confirm/confirm.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductCardComponent,
    FooterComponent,
    ProductDetailsComponent,
    SafePipe,
    NextLinePipe,
    AppComponent,
    LocationComponent,
    Detals1Component,
    CanvasComponent,
    OffCanvasComponent,
    Details2Component,
    Details3Component,
    CartComponent,
    CheckOutComponent,
    HomeComponent,
    ProductfilterComponent,
    Productfilter1Component,
    
    AppComponent,
    LogInComponent,
    LogOutComponent,
    ForgetPasswardComponent,
    MainLogComponent,
    MyAccountComponent,
    DashboardComponent,
    OrdersComponent,
    DownloadsComponent,
    AddressesComponent,
    PaymentMethodsComponent,
    AccountDetailsComponent,
    LogOutSiteComponent,
    BillingAddressComponent,
    ShippingAddressComponent,
    PaymentInsiteComponent,
    RessetPasswordComponent,
    SearchComponent,
    ConfirmComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

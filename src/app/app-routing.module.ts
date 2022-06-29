import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllproductsComponent } from './allproducts/allproducts.component';
import { CartComponent } from './cart/cart.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { ConfirmComponent } from './confirm/confirm.component';
import { Details2Component } from './details2/details2.component';
import { Details3Component } from './details3/details3.component';
import { Detals1Component } from './detals1/detals1.component';
import { ForgetPasswardComponent } from './forget-passward/forget-passward.component';
import { RessetPasswordComponent } from './forget-passward/resset-password/resset-password.component';
import { HomeComponent } from './home/home.component';
import { LocationComponent } from './location/location.component';
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
import { OffCanvasComponent } from './off-canvas/off-canvas.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductfilterComponent } from './productfilter/productfilter.component';
import { Productfilter1Component } from './productfilter1/productfilter1.component';
import { Productfilter2Component } from './productfilter2/productfilter2.component';
import { Productfilter3Component } from './productfilter3/productfilter3.component';
import { SaleComponent } from './sale/sale.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  
  {path:'Home',component:HomeComponent},
  {path:'products',component:AllproductsComponent},
  {path:'sale',component:SaleComponent},
  {path:'location',component:LocationComponent},
  {path:'details1',component:Detals1Component},
  {path:'details2',component:Details2Component},
  {path:'details3',component:Details3Component},
  {path:'filter',component:ProductfilterComponent},
  {path:'filter1',component:Productfilter1Component},
  {path:'filter2',component:Productfilter2Component},
  {path:'filter3',component:Productfilter3Component},
  {path:'cart',component:CartComponent},
  {path:'check-out',component:CheckOutComponent},
  // {path:'canvas',component:CanvasComponent},
  {path:'offcanvas',component:OffCanvasComponent},
  {path:'product/:id',component:ProductDetailsComponent},
  {path:'search/:searchVal',component:SearchComponent},
  {path:'category/:id',component:ProductfilterComponent},
  {path:'check-out/confirm-order',component:ConfirmComponent},
  {path:'',component:HomeComponent},

  // for the account management
  
  {path:'logInPage',
   component:MainLogComponent,
  children: [
     { path:"signUp", component: LogInComponent },
     {path:'forgetPassword', component:ForgetPasswardComponent},
     {path:'logIn', component:LogOutComponent},
    ]
  },
  {path:'myAccount', component:MyAccountComponent,
   children:[
     {path:'dashboard', component:DashboardComponent},
     {path:'orders', component:OrdersComponent},
     {path:'addresses', component:AddressesComponent, children:[
       {path:'billingAddress', component:BillingAddressComponent},
       {path:'shippingAddress', component:ShippingAddressComponent},
     ]},
     {path:'paymentMethods', component:PaymentMethodsComponent},
     {path:'logOutSite', component:LogOutSiteComponent},
     {path:'accoontDetails', component:AccountDetailsComponent},
   ]},

  {path:'paymentInsite', component:PaymentInsiteComponent},
  {path:'download', component:DownloadsComponent},
  {path:'RessetPassword', component:RessetPasswordComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from './Services/products.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  title = 'E-Commerce';
  isLoggedIn = false;
  isActive = true;

  constructor(public router: Router,private productsService: ProductsService) {}

  ngAfterViewInit(): void {
    this.isLoggedIn = localStorage.getItem('User') != null;
  }

  logout() {
    //TODO localStorage back to check it later
    localStorage.removeItem('User');
    this.router.navigate(['home'])
  }

  moveToLoginIfNeeded() {
    if (this.isLoggedIn) this.router.navigate(['myAccount']);
  }

  //OffCanvas functions

  cart: any[] = [];
  total: number = 0;
  isShown: boolean = true;
  quantity: number = 1;

  getproductcart() {
    if ('cart' in localStorage) {
      this.cart = JSON.parse(localStorage.getItem('cart')!);
      this.totallcost();
      console.log(this.cart);
    }
  }

  increase(index: number) {
    this.cart[index].quantity++;
    this.totallcost();
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }

  decrease(index: number) {
    if (this.cart[index].quantity > 1) {
      this.cart[index].quantity--;
      this.totallcost();
      localStorage.setItem('cart', JSON.stringify(this.cart));
    }
  }

  deleteone(index: number) {
    this.cart.splice(index, 1);
    this.totallcost();
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }

  deleteall() {
    this.cart = [];
    this.totallcost();
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }

  totallcost() {
    this.total = 0;
    for (const x in this.cart) {
      this.total += this.cart[x].item.Price * this.cart[x].quantity;
    }
  }

  SearchInProducts(searchVal: string) {
    console.log('44fds')
    this.router.navigate(['search',searchVal])
  }
}

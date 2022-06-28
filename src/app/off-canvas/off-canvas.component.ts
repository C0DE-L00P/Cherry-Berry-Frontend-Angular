import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-off-canvas',
  templateUrl: './off-canvas.component.html',
  styleUrls: ['./off-canvas.component.css'],
})
export class OffCanvasComponent implements OnInit {
  constructor(private router: Router) {}

  cart: any[] = [];
  total: number = 0;
  isShown: boolean = true;
  quantity: number = 1;

  @ViewChild('DATA1') moh!: ElementRef;

  ngOnInit(): void {
    this.getproductcart();
  }

  ngAfterViewInit(): void {
    this.moh.nativeElement;
  }

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

  gotoCart() {
    // this.router.navigate(['cart']);
    // console.log('done')
  }

  gotoCheckOut() {}
}

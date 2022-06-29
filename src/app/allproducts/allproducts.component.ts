import { Component, OnInit } from '@angular/core';
import { UrlSerializer } from '@angular/router';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-allproducts',
  templateUrl: './allproducts.component.html',
  styleUrls: ['./allproducts.component.css'],
})
export class AllproductsComponent implements OnInit {
  products: any[] = [];
  cart:any[] = [];
  user: string | undefined;
  amount:number=1;

  constructor(private productsservice: ProductsService) {}
 
  ngOnInit(): void {
    this.productsservice.getProducts().subscribe((productsData) => {
      this.products = productsData;
    });
  }


  
 //add product to local storage to use in cart and canvas
  addProduct(product: any) {

   var obj={item:product,quantity:this.amount}
  //  console.log(obj);
   
    
    if (this.user) {
      console.log('yes');
    } else {
      if ('cart' in localStorage) {
        this.cart = JSON.parse(localStorage.getItem('cart')!);
        var exist= this.cart.find(itemm=>itemm._id==obj.item._id)
        if (exist) {
          // console.log(exist);
          alert('This product is already added');
        } else {
          this.cart.push(obj);
          localStorage.setItem('cart', JSON.stringify(this.cart));
        }
      } else {
        this.cart.push(obj)
        localStorage.setItem('cart', JSON.stringify(this.cart));
     
        
      }
    }
  }
}

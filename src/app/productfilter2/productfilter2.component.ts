import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-productfilter2',
  templateUrl: './productfilter2.component.html',
  styleUrls: ['./productfilter2.component.css']
})
export class Productfilter2Component implements OnInit {

  constructor(private productservices:ProductsService) { }

  products:any[]=[]
  finalproducts:any[]=[]
  cart:any[] = [];
  user: string | undefined;
  amount:number=1;

  ngOnInit(): void {

    this.productservices.getProductFilter3().subscribe(data=>{
      this.products=data
      this.finalproducts=this.products.filter(p => {
        return p.Category =="تجفيف الشعر"
      })  
    })
  

  }

  addProduct(product: any) {

    var obj={item:product,quantity:this.amount}
    console.log(obj);
    
     
     if (this.user) {
       console.log('yes');
     } else {
       if ('cart' in localStorage) {
         this.cart = JSON.parse(localStorage.getItem('cart')!);
         var exist= this.cart.find(itemm=>itemm._id==obj.item._id)
         if (exist) {
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

import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-productfilter3',
  templateUrl: './productfilter3.component.html',
  styleUrls: ['./productfilter3.component.css']
})
export class Productfilter3Component implements OnInit {

  constructor(private productsservice:ProductsService) { }

  products:any[]=[]
  finalproducts:any[]=[]
  cart:any[] = [];
  user: string | undefined;
  amount:number=1;

  ngOnInit(): void {

    this.productsservice.getProductFilter4().subscribe(data=>{
      this.products=data
      this.finalproducts=this.products.filter(p => {
        return p.Category =="العناية بالشعر"
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

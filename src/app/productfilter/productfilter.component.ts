import { Component, OnInit } from '@angular/core';
import { tick } from '@angular/core/testing';
import { ProductsService } from '../Services/products.service';

@Component({
  selector: 'app-productfilter',
  templateUrl: './productfilter.component.html',
  styleUrls: ['./productfilter.component.css']
})
export class ProductfilterComponent implements OnInit {

  constructor(private productsService:ProductsService) { }

  products:any[]=[]
  finalproducts:any[]=[]
  cart:any[] = [];
  user: string | undefined;
  amount:number=1;

  ngOnInit(): void {

    this.productsService.GetAllProducts().subscribe(data=>{
      this.products=data
      this.finalproducts=this.products.filter(p => {
        return p.Category =='فرد الشعر'
      })  
      console.log(this.finalproducts);
    })

 
  // this.productsservice.getProductFilter2().subscribe(data=>{
  //   this.products=data
  //   this.finalproducts=this.products.filter(p => {
  //     return p.Category == "تمويج الشعر"
  //   })  
  //   console.log(this.finalproducts);
  // })

 
  // this.productsservice.getProductFilter3().subscribe(data=>{
  //   this.products=data
  //   this.finalproducts=this.products.filter(p => {
  //     return p.Category =="تجفيف الشعر"
  //   })  
  // })

  // this.productsservice.getProductFilter4().subscribe(data=>{
  //   this.products=data
  //   this.finalproducts=this.products.filter(p => {
  //     return p.Category =="العناية بالشعر"
  //   })  
  // })

  }

  addProduct(product: any) {

    var obj={item:product,quantity:this.amount}
    console.log(obj);
    
     
     if (this.user) {
       console.log('yes');
     } else {
       if ('cart' in localStorage) {
         this.cart = JSON.parse(localStorage.getItem('cart')!);
         var exist= this.cart.find(itemm=>itemm.PID==obj.item.PID)
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


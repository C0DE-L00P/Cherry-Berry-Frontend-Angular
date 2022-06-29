import { Component, OnInit } from '@angular/core';
import { tick } from '@angular/core/testing';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ProductsService } from '../Services/products.service';

@Component({
  selector: 'app-productfilter',
  templateUrl: './productfilter.component.html',
  styleUrls: ['./productfilter.component.css']
})
export class ProductfilterComponent implements OnInit {


  products:any[]=[]
  finalproducts:any[]=[]
  cart:any[] = [];
  user: string | undefined;
  amount:number=1;
  category: any;

  constructor(private router:Router,private activatedRoute: ActivatedRoute,private productsService: ProductsService) { }

  ngOnInit(): void {

  this.activatedRoute.paramMap.subscribe((params:ParamMap)=>{
      this.productsService.GetCategoryByID(params.get('id')!).subscribe((category)=>{
        this.products = category.Products
        this.category = category;
        console.log(this.products)
      })
    })
  }
  
  goToDetails(id:string) {
    this.router.navigate(['product',id])
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


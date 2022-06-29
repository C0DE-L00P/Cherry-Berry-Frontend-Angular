import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ProductsService } from '../Services/products.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})

export class SearchComponent implements OnInit {
  
  products: any[] = [];
  cart: any[] = [];
  user: string | undefined;
  amount: number = 1;

  constructor(private router:Router,private activatedRoute: ActivatedRoute,private productsService: ProductsService) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params:ParamMap)=>{
      this.productsService.SearchProductByName(params.get('searchVal')!).subscribe((data)=>{
        this.products = data
      })
    })
  }

  
  addProduct(product: any) {
    var obj = { item: product, quantity: this.amount };
    console.log(obj);

    //  if (this.user) {
    //    console.log('yes');
    //  } else {
    if ('cart' in localStorage) {
      this.cart = JSON.parse(localStorage.getItem('cart')!);
      var exist = this.cart.find((itemm) => itemm._id == obj.item._id);
      if (exist) {
        alert('This product is already added');
      } else {
        this.cart.push(obj);
        localStorage.setItem('cart', JSON.stringify(this.cart));
      }
    } else {
      this.cart.push(obj);
      localStorage.setItem('cart', JSON.stringify(this.cart));
    }
    //  }
  }
  
  goToDetails(id:string) {
    this.router.navigate(['product',id])
  }
}

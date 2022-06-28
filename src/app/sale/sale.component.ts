import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-sale',
  templateUrl: './sale.component.html',
  styleUrls: ['./sale.component.css']
})
export class SaleComponent implements OnInit {

  constructor(private productsservive:ProductsService) { }
   products:any[]=[]
  ngOnInit(): void {
    this.productsservive.getProducts().subscribe(productsdata=>{
      this.products=productsdata
    })
  }

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProducts } from './IPoducts';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http:HttpClient) { }
  
  url:string='https://cherrynberry.herokuapp.com/api/products'
  
  //get all products
  getProducts():Observable<IProducts[]>
  {
    return this.http.get<IProducts[]>(this.url)
  }

  //get product filter1
  getProductFilter1():Observable<IProducts[]>
  {
    return this.http.get<IProducts[]>(this.url)
  }

   //get product filter2
  getProductFilter2():Observable<IProducts[]>
  {
    return this.http.get<IProducts[]>(this.url)
  }
 
   //get product filter3
  getProductFilter3():Observable<IProducts[]>
  {
    return this.http.get<IProducts[]>(this.url)
  }

   //get product filter4
  getProductFilter4():Observable<IProducts[]>
  {
    return this.http.get<IProducts[]>(this.url)
  }
}

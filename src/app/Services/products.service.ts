import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {IProduct} from '../SharedClasses&Interfaces/IProduct'
import { catchError, Observable, throwError } from 'rxjs';
import { IReview } from '../SharedClasses&Interfaces/IReview';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products:IProduct[] = []
  _url:string = 'https://cherrynberry.herokuapp.com/api/products'

  constructor(private http:HttpClient) { }

  GetAllProducts():Observable<IProduct[]>{
    return this.http.get<IProduct[]>(this._url).pipe(catchError((err)=>{
      return throwError(()=>err.message || 'Server Error')
    }))
  }
  
  GetProductById(prdId:number){
    if(isNaN(prdId)) return null
    if(prdId> this.products.length || prdId < 0) return null
    
    return this.products[prdId]
  }


  _reviews_url:string = '../../assets/APIs/reviews.json'

  GetAllReviews():Observable<IReview[]>{
    return this.http.get<IReview[]>(this._reviews_url).pipe(catchError((err)=>{
      return throwError(()=>err.message || 'Server Error')
    }))
  }
  //TODO add cart contains & Make the backend can get 1 product data only via query
}

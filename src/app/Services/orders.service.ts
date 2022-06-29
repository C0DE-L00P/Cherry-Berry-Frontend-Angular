import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { IOrder } from '../SharedClasses&Interfaces/IOrder';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private http:HttpClient) { }

  _url:string = 'https://cherrynberry.herokuapp.com/api/orders'

  GetAllOrders():Observable<IOrder[]>{
    return this.http.get<IOrder[]>(this._url).pipe(catchError((err)=>{
      return throwError(()=>err.message || 'Server Error')
    }))
  }
  GetOrderByID(id:String):Observable<IOrder[]>{
    return this.http.get<IOrder[]>(this._url+'/'+id).pipe(catchError((err)=>{
      return throwError(()=>err.message || 'Server Error')
    }))
  }
  
  // ----------------- DELETE

  DeleteOrder(id:any):Observable<IOrder[]>{
    return this.http.delete<any>(this._url+'/'+id)
  }

  // ------------------ POST

  PostOrder(body:any):Observable<IOrder[]>{
    return this.http.post<any>(this._url,body)
  }  
}

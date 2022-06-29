import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { IUser } from '../SharedClasses&Interfaces/IUser';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) { }

  public isAuth:boolean = false;

  _url:string = 'https://cherrynberry.herokuapp.com/api/users'

  GetAllUsers():Observable<IUser[]>{
    return this.http.get<IUser[]>(this._url).pipe(catchError((err)=>{
      return throwError(()=>err.message || 'Server Error')
    }))
  }

  GetUserByID(id:String):Observable<IUser[]>{
    return this.http.get<IUser[]>(this._url+'/'+id).pipe(catchError((err)=>{
      return throwError(()=>err.message || 'Server Error')
    }))
  }

  // -------------------- Query By Email and Password
  

  MakeALogin(body:any):Observable<IUser[]>{
    return this.http.post<any>( this._url+'/login' ,body )
  }
  
  // _register_url:string = this._url + '/register'

  MakeARegister(body:any):Observable<IUser[]>{
    return this.http.post<any>( this._url+'/register' ,body )
  }


  // ------------------ POST

  PutUser(id:any,body:any):Observable<IUser[]>{
    return this.http.put<any>(this._url+'/'+id,body)
  }  


  // ------------------ POST

  PostUser(body:any):Observable<IUser[]>{
    return this.http.post<any>(this._url,body)
  }
}
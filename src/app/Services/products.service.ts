import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProduct } from '../SharedClasses&Interfaces/IProduct';
import { catchError, Observable, throwError } from 'rxjs';
import { IReview } from '../SharedClasses&Interfaces/IReview';
import { ICategory } from '../SharedClasses&Interfaces/ICategory';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  products: IProduct[] = [];
  _url: string = 'https://cherrynberry.herokuapp.com/api/products';

  constructor(private http: HttpClient) {}

  GetAllProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this._url).pipe(
      catchError((err) => {
        return throwError(() => err.message || 'Server Error');
      })
    );
  }
  GetProductById(prdId: number) {
    if (isNaN(prdId)) return null;
    if (prdId > this.products.length || prdId < 0) return null;

    return this.products[prdId];
  }
  GetProductByIDFromAPI(_id: string): Observable<IProduct> {
    return this.http.get<IProduct>(this._url + '/' + _id).pipe(
      catchError((err) => {
        return throwError(() => err.message || 'Server Error');
      })
    );
  }

  _reviews_url: string = 'https://cherrynberry.herokuapp.com/api/reviews';

  GetAllReviews(): Observable<IReview[]> {
    return this.http.get<IReview[]>(this._reviews_url).pipe(
      catchError((err) => {
        return throwError(() => err.message || 'Server Error');
      })
    );
  }

  _categories_url: string = 'https://cherrynberry.herokuapp.com/api/categories';

  GetAllCategories(): Observable<ICategory[]> {
    return this.http.get<ICategory[]>(this._categories_url).pipe(
      catchError((err) => {
        return throwError(() => err.message || 'Server Error');
      })
    );
  }
  GetCategoryByID(id: any): Observable<ICategory> {
    return this.http.get<ICategory>(this._categories_url + '/' + id).pipe(
      catchError((err) => {
        return throwError(() => err.message || 'Server Error');
      })
    );
  }

  // -------------------- PUT

  PutCategoryByID(id: any, body: any): Observable<ICategory> {
    return this.http.put<ICategory>(this._categories_url + '/' + id, body).pipe(
      catchError((err) => {
        return throwError(() => err.message || 'Server Error');
      })
    );
  }
  PutReviewByID(id: any, body: any): Observable<IReview> {
    return this.http.put<IReview>(this._reviews_url + '/' + id, body).pipe(
      catchError((err) => {
        return throwError(() => err.message || 'Server Error');
      })
    );
  }

  // ----------------- DELETE

  DeleteCategoryByID(id: any): Observable<ICategory> {
    return this.http.delete<ICategory>(this._categories_url + '/' + id).pipe(
      catchError((err) => {
        return throwError(() => err.message || 'Server Error');
      })
    );
  }
  DeleteReviewByID(id: any): Observable<IReview> {
    return this.http.delete<IReview>(this._reviews_url + '/' + id).pipe(
      catchError((err) => {
        return throwError(() => err.message || 'Server Error');
      })
    );
  }

  //TODO add cart contains & Make the backend can get 1 product data only via query

  // --------------------- POST
  PostReview(body: any): Observable<IReview> {
    return this.http.post<any>(this._reviews_url, body);
  }

  PostProduct(body: any): Observable<IProduct> {
    return this.http.post<any>(this._url, body);
  }

  // ---------------------- Search Query

  SearchProductByName(name: string): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this._url+'?name='+ name).pipe(
      catchError((err) => {
        return throwError(() => err.message || 'Server Error');
      })
    );
  }
}

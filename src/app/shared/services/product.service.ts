import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Product} from '../models/Product';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getAllProducts() : Observable<Product[]>{
    console.log('******** In service Get All Products *********');
    let apiUrl = environment.apiUrl+'products';
    console.log('url : ',apiUrl);
    return this.http.get<Product[]>(apiUrl);
  }

  getAllType():Observable<any>{
    return this.http.get<any>(environment.apiUrl+'productType')
  }

  save(product: Product, id: number) : Observable<Product>{
    return this.http.post<Product>(environment.apiUrl+'products/'+id, product)
  }

  findProductById(productId: number) {
    return this.http.get<Product>(environment.apiUrl+'products/'+productId)
  }
}

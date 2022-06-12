import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Product} from '../models/Product';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl  = environment.apiUrl;
  constructor(private http: HttpClient) { }

  getAllProducts() : Observable<Product[]>{
    console.log('******** In service Get All Products *********');
    let apiUrl = environment.apiUrl+'products';
    console.log('url : ',apiUrl);
    return this.http.get<Product[]>(apiUrl);
  }

  getAllType():Observable<any>{
    return this.http.get<any>(this.apiUrl+'productType')
  }

  save(product: Product, id: number) : Observable<Product>{
    return this.http.post<Product>(this.apiUrl+'products/'+id, product)
  }

  findProductById(productId: number) {
    return this.http.get<Product>(this.apiUrl+'products/'+productId)
  }

  update(product: Product, typeId : number) : Observable<Product>  {
    return this.http.put<Product>(this.apiUrl+'products/'+typeId,product)
  }
}

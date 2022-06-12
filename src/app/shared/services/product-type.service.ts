import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Product} from '../models/Product';
import {environment} from '../../../environments/environment';
import {Type} from '../models/Type';

@Injectable({
  providedIn: 'root'
})
export class ProductTypeService {
  constructor(private http: HttpClient) { }
   apiUrl = environment.apiUrl+'productType';

  getAllType() : Observable<Type[]>{
    console.log('******** In service Get All Type *********');

    return this.http.get<Type[]>(this.apiUrl);
  }

  saveType(type : Type): Observable<Type>{
    return this.http.post<Type>(this.apiUrl,type);
  }


}

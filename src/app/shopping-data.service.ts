import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { shopping } from './shopping-list/shoppinglist';

const URL = 'https://6380bee78efcfcedac0dce88.mockapi.io'; //mockapi
@Injectable({
  providedIn: 'root'
})
export class ShoppingDataService {

  constructor(
    private http: HttpClient){ }

  public getAll(): Observable<shopping>{
    //devuelve una observable de un arreglo
    return this.http.get<shopping>(URL);
    
  }
}

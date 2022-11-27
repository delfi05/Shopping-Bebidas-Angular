import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { shopping } from './shopping-list/shoppinglist';

const URL = 'https://6380bee78efcfcedac0dce88.mockapi.io/bebidaAlcoholica'; //mockapi

@Injectable({
  providedIn: 'root'
})
export class ShoppingDataService {
  URL = 'https://6380bee78efcfcedac0dce88.mockapi.io/bebidaAlcoholica';
  constructor(
    private http: HttpClient){ }

  public getAll(): Observable<shopping[]>{
    //devuelve una observable de un arreglo
    return this.http.get<shopping[]>(URL)
          .pipe(
            tap((bebidadaAlcoholicas: shopping[]) => bebidadaAlcoholicas.forEach(shoppings => shoppings.cantidad = 0))
          );
    
  }
  deleteShopp(id:string): Observable<{}>{
    
    this.URL = `${this.URL}/${id}`;
    return this.http.delete(this.URL);
  }
}

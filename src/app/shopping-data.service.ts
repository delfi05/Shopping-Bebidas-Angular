import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { shopping } from './shopping-list/shoppinglist';

const URL = 'https://6380bee78efcfcedac0dce88.mockapi.io/bebidaAlcoholica'; //mockapi
const urlContacto = "https://6380bee78efcfcedac0dce88.mockapi.io/contactanos";
@Injectable({
  providedIn: 'root'
})
export class ShoppingDataService {

  constructor(
    private http: HttpClient){ }

  public getAll(): Observable<shopping[]>{
    return this.http.get<shopping[]>(URL)
      .pipe(
        tap((bebidadaAlcoholicas: shopping[]) => bebidadaAlcoholicas.forEach(shoppings => shoppings.cantidad = 0))
      );  
  }

  public add(form: FormGroup<any>){
    this.http.post(urlContacto, form.value).subscribe((contacto) =>{
      console.log(contacto);
    });
  }
}

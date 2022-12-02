import { EventEmitter, Injectable, Output } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { shopping } from './shopping-list/shoppinglist';

//maneja la logica del carrito
@Injectable({
  providedIn: 'root' //inyectable
})

export class ShoppingCartService {

 private _cartList: shopping [] = [];
 cartList: BehaviorSubject<shopping[]>= new BehaviorSubject<shopping[]>([]);
 
 @Output() shopping: EventEmitter<shopping> = new EventEmitter();

  addToCart(shoppings: shopping) {   
    let item: shopping = this._cartList.find((v1) => v1.bebidaAlcoholica == shoppings.bebidaAlcoholica)!;
    if (!item){
      this._cartList.push({... shoppings});
    }else{
      item.cantidad += shoppings.cantidad;
    }
    //next muestra cual es el siguiente valor, muestra la variable privada
    //dice q actualice el valor
    this.cartList.next(this._cartList);
  }

  getCart(){
    return this._cartList;
  }

  total(){
    let suma = 0;
    this._cartList.forEach(shopping => {
      suma += shopping.cantidad * shopping.precio;
    });
    return suma;
  }

  finalizar(){
    return this._cartList.splice(0, this._cartList.length);
  }
  
  deleteShopp(id: string, shopping: shopping):void{
    let index = this._cartList.findIndex(i => i.id === id);
    this._cartList.splice(index, 1);
    this.shopping.emit(shopping);
  }
 }

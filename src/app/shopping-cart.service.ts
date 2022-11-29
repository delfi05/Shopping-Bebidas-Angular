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
    let item: shopping = this._cartList.find((v1) => v1.tipo == shoppings.tipo)!;
    if (!item){
      this._cartList.push({... shoppings});
    }else{
      item.cantidad += shoppings.cantidad;
    }
    //next muestra cual es el siguiente valor, muestra la variable privada
    //dice q actualice el valor
    this.cartList.next(this._cartList);
  }

  deleteShopp(shopping: any):void{
    this._cartList.splice(shopping);
    this.shopping.emit(shopping);
  }
 }

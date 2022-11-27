import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { shopping } from './shopping-list/shoppinglist';

//maneja la logica del carrito
@Injectable({
  providedIn: 'root' //inyectable
})

export class ShoppingCartService {

 private _cartList: shopping [] = [];
 cartList: BehaviorSubject<shopping[]>= new BehaviorSubject(this._cartList);
 
  addToCart(shoppings: shopping) {   
    let item: shopping = this._cartList.find((v1) => v1.tipo == shoppings.tipo)!;
    if (!item){
      this._cartList.push({... shoppings});
    }else{
      item.cantidad += shoppings.cantidad;
    }
    console.log(this._cartList);
    //next muestra cual es el siguiente valor, muestra la variable privada
    //dice q actualice el valor
    this.cartList.next(this._cartList);
  }
  deleteShopp(shopping:shopping):void{
    
  }
 }

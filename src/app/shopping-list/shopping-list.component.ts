import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../shopping-cart.service';
import { shopping } from './shoppinglist';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})

export class ShoppingListComponent implements OnInit {

shoppings: shopping[]= [];

//servicio inyectado de angular 
  constructor(
    private cart: ShoppingCartService,
    private shopping: ShoppingCartService) {
   }

  ngOnInit(): void {
  }

  addToCart(shopping: shopping):void{
    this.cart.addToCart(shopping);
    shopping.stock -= shopping.cantidad;
    shopping.cantidad = 0; 
  }
  
  maxReached(m: string){
    alert(m);
  }
}

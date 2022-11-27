import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../shopping-cart.service';
import { ShoppingDataService } from '../shopping-data.service';
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
    private shoppingDataService: ShoppingDataService){
    }

  ngOnInit(): void {
    this.shoppingDataService.getAll()
    .subscribe(shoppings => this.shoppings = shoppings);
  }

  addToCart(shoppings: shopping):void{
    this.cart.addToCart(shoppings);
    shoppings.stock -= shoppings.cantidad;
    shoppings.cantidad = 0; 
  }
  
  maxReached(m: string){
    alert(m);
  }
}

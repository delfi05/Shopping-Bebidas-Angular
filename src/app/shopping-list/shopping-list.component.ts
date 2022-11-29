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
    this.cart.shopping.subscribe(resp => { 
      this.removeToCart(resp);
    })
  }

  addToCart(shopping: shopping):void{
    shopping.stock -= shopping.cantidad;
    this.cart.addToCart(shopping);
    shopping.cantidad = 0; 
  }
  
  removeToCart(shopping: shopping){
    let item = this.shoppings.find((v1) => v1.id == shopping.id)!;  
    item.stock += shopping.cantidad;
  }

  maxReached(m: string){
    alert(m);
  }
}

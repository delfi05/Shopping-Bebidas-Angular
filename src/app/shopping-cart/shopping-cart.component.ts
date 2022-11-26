import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ShoppingCartService } from '../shopping-cart.service';
import { shopping } from '../shopping-list/shoppinglist';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

    cartList$: Observable<shopping[]>;
  constructor(private cart: ShoppingCartService) { 
    //cart.cartList.subscribe((c)=> this.cartList = c); 
    this.cartList$ = cart.cartList.asObservable();
  }

  ngOnInit(): void {
  }

}

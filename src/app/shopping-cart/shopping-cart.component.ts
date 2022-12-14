import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ShoppingCartService } from '../shopping-cart.service';
import { shopping } from '../shopping-list/shoppinglist';

/*maneja la logica del carrito*/
@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

  cartList$: Observable<shopping[]>;


  constructor(private cart: ShoppingCartService) { 
    this.cartList$ = this.cart.cartList.asObservable();
  }

  ngOnInit(): void {
  }

  total() {
    return this.cart.total();
  }
  
  finalizarCompra(){
    return this.cart.finalizar();
  }
  
  deleteShopp(id: any, shopping: any):void{
   this.cart.deleteShopp(id, shopping);
  }
}

import { ShoppingAlcoholicComponent } from './shopping-alcoholic/shopping-alcoholic.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { ShoppingContactComponent } from './shopping-contact/shopping-contact.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';

const routes: Routes = [
  {
    //cuando no hay nada q se redirija 
    path:"",
    redirectTo: "/",
    pathMatch: "full"
  },
  {
    path: "Shopping y Carrito",
    component: ShoppingAlcoholicComponent
  },
  {
    path: "productos",
    component: ShoppingListComponent
  },
  {
    path: "carrito",
    component: ShoppingCartComponent
  },
  {
  path: "contacto",
  component: ShoppingContactComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { ShoppingAlcoholicComponent } from './shopping-alcoholic/shopping-alcoholic.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { ShoppingContactComponent } from './shopping-contact/shopping-contact.component';

const routes: Routes = [
  {
    //cuando no hay nada q se redirija 
    path:"",
    redirectTo: "shoppings",
    pathMatch: "full"
  },
  {
    path: "shoppings",
    component: ShoppingAlcoholicComponent
  },

  {
  path: "contact",
  component: ShoppingContactComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

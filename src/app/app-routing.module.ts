import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { TompizzaAboutComponent } from './tompizza-about/tompizza-about.component';
import { TompizzaDrinksComponent } from './tompizza-drinks/tompizza-drinks.component';

const routes: Routes = [
  {
    path:'',
   redirectTo:'home',
   pathMatch:'full'
  },
 {
  path:'home',
  component:ProductListComponent
 },
 {
  path:'drinks',
  component:TompizzaDrinksComponent
 },
 {
  path:'about',
  component:TompizzaAboutComponent
 }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { CatalogComponent } from './catalog/catalog.component';
import { HomeComponent } from './home/home.component';
import { PromotionsComponent } from './promotions/promotions.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent, title: "Home - Cake Shop ENIT" },
  { path: 'catalog', component: CatalogComponent, title: "Catalog - Cake Shop ENIT" },
  { path: 'cart', component: CartComponent, title: "Cart - Cake Shop ENIT" },
  { path: 'promotions', component: PromotionsComponent, title: "Promotions - Cake Shop ENIT" },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
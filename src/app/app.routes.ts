import { Routes } from '@angular/router';
import {ProductsComponent} from './pages/products/products.component';
import {BuyComponent} from './pages/buy/buy.component';
import {HomeComponent} from './pages/home/home.component';

export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'products', component: ProductsComponent},
  {path: 'buy/:id', component: BuyComponent},
];

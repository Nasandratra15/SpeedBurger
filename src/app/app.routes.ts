import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { CommunityComponent } from './pages/community/community.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "home", component: HomeComponent},
  {path: "products", component: ProductsComponent},
  {path: "community", component: CommunityComponent},
  {path: "contact", component: ContactComponent}
];

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginRegisterComponent } from './login-register/login-register.component';
import { SearchProductsComponent } from './search-products/search-products.component';
import { ListProductsComponent } from './list-products/list-products.component';
import { DescriptionComponent } from './description/description.component';

const routes: Routes = [
  {path:'', component:LoginRegisterComponent},
  {path:'dashboard', component:SearchProductsComponent},
  {path:'products', component:ListProductsComponent},
  {path:'products/:id', component:DescriptionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

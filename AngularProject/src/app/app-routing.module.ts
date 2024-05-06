import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent  } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ProductsComponent } from './products/products.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

const routes: Routes = [
  {path : '', component : LoginComponent},
  {path : 'register', component : RegisterComponent},
  {path : 'home', component : HomeComponent},
  {path : 'about', component : AboutUsComponent},
  {path : 'contact', component : ContactUsComponent},
  {path : 'products', component : ProductsComponent},
  {path : 'products/:id', component : ProductDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  {path: 'home',canActivate: [AuthGuard], loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
  {path: 'cart', loadChildren: () => import('./pages/cart/cart.module').then(m => m.CartModule) },
  {path:'', redirectTo:'home', pathMatch:'full'},
  { path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule) },
  

]
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

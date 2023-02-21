import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login.component';
import { HomeComponent } from '../home/home.component';
import { AuthGuard } from 'src/app/guard/auth.guard';
const routes: Routes = [
  { path: '', component: LoginComponent },
{path: 'home', component: HomeComponent, canActivate: [AuthGuard]}];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
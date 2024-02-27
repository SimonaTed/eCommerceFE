import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { ResultsComponent } from './component/results/results.component';

const routes: Routes = [
  {path:"", component: LoginComponent},
  {path:"home", component: HomeComponent},
  {path:"results", component: ResultsComponent}
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

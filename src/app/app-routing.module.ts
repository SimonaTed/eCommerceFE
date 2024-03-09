import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { ResultsComponent } from './component/results/results.component';
import { AreaPersonaleComponent } from './component/area-personale/area-personale.component';
import { CarrelloComponent } from './component/carrello/carrello.component';
import { ErroreComponent } from './component/errore/errore.component';
import { RegistrazioneComponent } from './component/registrazione/registrazione.component';
import { ConfermaRegistrazioneComponent } from './component/conferma-registrazione/conferma-registrazione.component';

const routes: Routes = [
  {path:"", component: LoginComponent},
  {path:"home", component: HomeComponent},
  {path:"results", component: ResultsComponent},
  {path:"carrello", component: CarrelloComponent},
  {path:"area-personale", component: AreaPersonaleComponent},
  {path:"errore", component: ErroreComponent},
  {path:"registrati", component: RegistrazioneComponent},
  {path:"registrazione-avvenuta", component: ConfermaRegistrazioneComponent}
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

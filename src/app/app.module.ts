import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { LoginComponent } from './component/login/login.component';
import { ResultsComponent } from './component/results/results.component';
import { FooterComponent } from './component/footer/footer.component';
import { CarrelloComponent } from './component/carrello/carrello.component';
import { AreaPersonaleComponent } from './component/area-personale/area-personale.component';
import { ErroreComponent } from './component/errore/errore.component';
import { RegistrazioneComponent } from './component/registrazione/registrazione.component';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ConfermaRegistrazioneComponent } from './component/conferma-registrazione/conferma-registrazione.component';




@NgModule({
  schemas:[
    CUSTOM_ELEMENTS_SCHEMA
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    LoginComponent,
    ResultsComponent,
    FooterComponent,
    CarrelloComponent,
    AreaPersonaleComponent,
    ErroreComponent,
    RegistrazioneComponent,
    ConfermaRegistrazioneComponent
  ],
  
  imports: [
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
  ],
  bootstrap: [AppComponent]

})
export class AppModule { }

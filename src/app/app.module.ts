import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MbscModule} from '@mobiscroll/angular-lite';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app.component';
import { HeaderComponent } from './components/header/header.component';
import { AsideGComponent } from './components/aside-g/aside-g.component';
import { MainComponent } from './components/main/main.component';
import { RouteComponent } from './components/route/route.component';
import { AsideDComponent } from './components/aside-d/aside-d.component';
import { EvenementComponent } from './components/evenement/evenement.component';
import { AgendaPrincipalComponent } from './components/agenda-principal/agenda-principal.component';
import { CompPrincipalComponent } from './components/comp-principal/comp-principal.component';
import { SondageComponent } from './components/sondage/sondage.component';
import { ListeComponent } from './components/liste/liste.component';
import { RepertoireComponent } from './components/repertoire/repertoire.component';
import { ParametreComponent } from './components/parametre/parametre.component';
import { InscriptionComponent } from './components/inscription/inscription.component';
import { FormInscripComponent } from './components/form-inscrip/form-inscrip.component';
import {MbscFormsModule, MbscPageModule} from '@mobiscroll/angular-lite';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AsideGComponent,
    MainComponent,
    RouteComponent,
    AsideDComponent,
    EvenementComponent,
    AgendaPrincipalComponent,
    CompPrincipalComponent,
    SondageComponent,
    ListeComponent,
    RepertoireComponent,
    ParametreComponent,
    InscriptionComponent,
    FormInscripComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MbscFormsModule,
    MbscPageModule,
    MbscModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientJsonpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

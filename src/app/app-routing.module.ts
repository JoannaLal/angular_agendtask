import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from './components/app.component';
import {EvenementComponent} from './components/evenement/evenement.component';
import {AgendaPrincipalComponent} from './components/agenda-principal/agenda-principal.component';
import {SondageComponent} from './components/sondage/sondage.component';
import {ListeComponent} from './components/liste/liste.component';
import {RepertoireComponent} from './components/repertoire/repertoire.component';
import {ParametreComponent} from './components/parametre/parametre.component';
import {InscriptionComponent} from './components/inscription/inscription.component';


const routes: Routes = [
  {path: 'home', component: AgendaPrincipalComponent},
  {path: 'evenement', component: EvenementComponent},
  {path: 'sondage', component: SondageComponent},
  {path: 'liste', component: ListeComponent},
  {path: 'repertoire', component: RepertoireComponent},
  {path: 'parametre', component: ParametreComponent},
  {path: 'accueil', component: InscriptionComponent}

];

@NgModule({
   imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
 })

export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MostrarComponent } from './mostrar/mostrar.component';
import { GuardarComponent } from './guardar/guardar.component';

const routes: Routes = [
  {path: 'mostrar', component: MostrarComponent},
  {path: 'guardar', component: GuardarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

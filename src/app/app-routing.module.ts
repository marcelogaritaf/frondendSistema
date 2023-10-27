import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistroAsignarComponent } from './home-compoment/registro-asignar/registro-asignar.component';
import { AddcompiladoComponent } from './home-compoment/addcompilado/addcompilado.component';
import { AsingTaskComponent } from './designadas/asing-task/asing-task.component';


const routes: Routes = [
  {path:'Boletin',component:RegistroAsignarComponent},
  {path: 'AgregarDato', component:AddcompiladoComponent},
  {path: 'AsignarData', component:AsingTaskComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

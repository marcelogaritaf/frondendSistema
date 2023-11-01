import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistroAsignarComponent } from './home-compoment/registro-asignar/registro-asignar.component';
import { AddcompiladoComponent } from './home-compoment/addcompilado/addcompilado.component';
import { AsingTaskComponent } from './designadas/asing-task/asing-task.component';
import { UpdateComponentComponent } from './home-compoment/update-component/update-component.component';


const routes: Routes = [
  {path:'Boletin',component:RegistroAsignarComponent},
  {path: 'AgregarDato', component:AddcompiladoComponent},
  {path: 'AsignarData', component:AsingTaskComponent},
  {path: 'EditarDato', component:UpdateComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

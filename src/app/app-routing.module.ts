import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistroAsignarComponent } from './home-compoment/registro-asignar/registro-asignar.component';
import { AddcompiladoComponent } from './home-compoment/addcompilado/addcompilado.component';


const routes: Routes = [
  {path:'Boletin',component:RegistroAsignarComponent},
  {path: 'AgregarDato', component:AddcompiladoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

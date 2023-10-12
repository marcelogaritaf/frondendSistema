import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistroAsignarComponent } from './home-compoment/registro-asignar/registro-asignar.component';


const routes: Routes = [
  {path:'Boletin',component:RegistroAsignarComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

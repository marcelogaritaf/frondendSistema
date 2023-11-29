import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistroAsignarComponent } from './home-compoment/registro-asignar/registro-asignar.component';
import { AddcompiladoComponent } from './home-compoment/addcompilado/addcompilado.component';
import { AsingTaskComponent } from './designadas/asing-task/asing-task.component';
import { UpdateComponentComponent } from './home-compoment/update-component/update-component.component';
import { RegistroComponent } from './registro/registro.component';
import { AuthGuardService } from './Services/auth-guard.service';
import { UpdateDesignadasComponent } from './designadas/update-designadas/update-designadas.component';
import { ContrasenaComponent } from './contrasena/contrasena.component';
import { UserEditComponent } from './articulos/user-edit/user-edit.component';


const routes: Routes = [
  {path:'', redirectTo:'/login', pathMatch:'full'},
  {path:'registro-Usuario', component:RegistroComponent},
  {path:'Olvidar-Contraseña', component:ContrasenaComponent},
  {path:'Boletin',component:RegistroAsignarComponent, canActivate:[AuthGuardService]},
  {path: 'AgregarDato', component:AddcompiladoComponent, canActivate:[AuthGuardService]},
  {path: 'AsignarData', component:AsingTaskComponent, canActivate:[AuthGuardService]},
  {path: 'EditarDato', component:UpdateComponentComponent, canActivate:[AuthGuardService]},
  {path: 'EditarAsigancion', component:UpdateDesignadasComponent, canActivate:[AuthGuardService]},
  {path: 'Editar-Usuario', component:UserEditComponent, canActivate:[AuthGuardService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

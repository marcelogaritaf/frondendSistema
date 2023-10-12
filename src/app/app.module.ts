import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticulosComponent } from './articulos/articulos.component';
import { AsignarComponent } from './asignar/asignar.component';
import { HomeCompomentComponent } from './home-compoment/home-compoment.component';
import { DesignadasComponent } from './designadas/designadas.component';
import { OficiniasComponent } from './oficinias/oficinias.component';
import { RegistroAsignarComponent } from './home-compoment/registro-asignar/registro-asignar.component';

const sistemaRoutes:Routes=[
  {path:'',component:HomeCompomentComponent},
  {path:'Articulos', component:ArticulosComponent},
  {path:'Asignacion', component:AsignarComponent},
  {path:'Oficinas', component:OficiniasComponent},
  {path:'Designadas', component:DesignadasComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    HomeCompomentComponent,
    ArticulosComponent,
    AsignarComponent,
    OficiniasComponent,
    DesignadasComponent,
    RegistroAsignarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, RouterModule.forRoot(sistemaRoutes),//indica las rutas del sistema
    FormsModule,

    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

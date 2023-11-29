import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { LoginComponent } from './login/login.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxPaginationModule } from 'ngx-pagination';
import { AddcompiladoComponent } from './home-compoment/addcompilado/addcompilado.component';
import { ToastrModule } from 'ngx-toastr';
import { AsingTaskComponent } from './designadas/asing-task/asing-task.component';
import { UpdateComponentComponent } from './home-compoment/update-component/update-component.component';
import { NgArrayPipesModule } from 'ngx-pipes';
import { saveAs } from 'file-saver';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { NavbarComponent } from './navbar/navbar.component';
import { RegistroComponent } from './registro/registro.component';
import { AuthGuardService } from './Services/auth-guard.service';
import { UpdateDesignadasComponent } from './designadas/update-designadas/update-designadas.component';
import { ContrasenaComponent } from './contrasena/contrasena.component';

const sistemaRoutes:Routes=[
  {path:'', redirectTo:'/login', pathMatch:'full'},
  {path:'login', component:LoginComponent},
  {path:'Home',component:HomeCompomentComponent, canActivate: [AuthGuardService]},
  {path:'Usuarios', component:ArticulosComponent, canActivate:[AuthGuardService]},
  {path:'Asignacion', component:AsignarComponent, canActivate: [AuthGuardService]},
  {path:'Designadas', component:DesignadasComponent, canActivate: [AuthGuardService]}
]
@NgModule({
  declarations: [
    AppComponent,
    HomeCompomentComponent,
    ArticulosComponent,
    AsignarComponent,
    OficiniasComponent,
    DesignadasComponent,
    RegistroAsignarComponent,
    AddcompiladoComponent,
    AsingTaskComponent,
    UpdateComponentComponent,
    LoginComponent,
    NavbarComponent,
    RegistroComponent,
    UpdateDesignadasComponent,
    ContrasenaComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule, RouterModule.forRoot(sistemaRoutes),//indica las rutas del sistema
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    NgArrayPipesModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    NgxPaginationModule,
    NgxExtendedPdfViewerModule,
    ToastrModule.forRoot()
  ],
  providers: [AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }

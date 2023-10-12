import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiconnectService {
  AppUrl="http://localhost:5274/";
  constructor( private http: HttpClient ) { }
  //metodo get 
  // Obtener(){
  //   this.http.get(this.AppUrl+"api/Compilado/Compilado").subscribe(data=>{
      
  //   })
  // }

  ObtenerDatos(): Observable<any> {
    return this.http.get(this.AppUrl+"api/Compilado/Compilado");
  }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CompiladoModels } from '../models/compiladoModels';
// export interface dataCompilado{
//   oficina:string,
// }
@Injectable({
  providedIn: 'root'
})
export class ApiconnectService {
  AppUrl="http://localhost:5274/";
  constructor( private http: HttpClient ) {
  }
  //metodo get 
  ObtenerArticulos(){
    return this.http.get(this.AppUrl+"api/Productos/rutaApi");
  }
  addData(compiladoData:CompiladoModels): Observable<CompiladoModels> {
    return this.http.post<CompiladoModels>(this.AppUrl+"api/Compilado/Agregar", compiladoData);
  }
  ObtenerDatos(): Observable<any> {
    return this.http.get(this.AppUrl+"api/Compilado/Compilado");
  }
}

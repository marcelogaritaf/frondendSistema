import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { CompiladoModels } from '../models/compiladoModels';
// export interface dataCompilado{
//   oficina:string,
// }
@Injectable({
  providedIn: 'root'
})
export class ApiconnectService {
  AppUrl="http://localhost:5158/";
  private actulizarData = new BehaviorSubject <any>({}as any)
  constructor( private http: HttpClient ) {
  }
  //metodo get 
  ObtenerArticulos(){
    return this.http.get(this.AppUrl+"api/Productos/rutaApi");
  }
  ObtenerDatos(): Observable<any> {
    return this.http.get(this.AppUrl+"api/Compilado/Compilado");
  }
  ObtenerDatosByQuery(id:number):Observable<any>{
    return this.http.get<any>(this.AppUrl+"api/Compilado/Obtener/"+id)
  }
  ObtenerAsig(): Observable<any>{
    return this.http.get(this.AppUrl+"api/Asignados/Obtener")
  }
  addData(compiladoData:any): Observable<any> {
    return this.http.post<any>(this.AppUrl+"api/Compilado/Agregar", compiladoData);
  }
  addAsig(asignarData:any): Observable<any>{
    return this.http.post<any>(this.AppUrl+"api/Asignados/Agregar",asignarData);
  }
  eliminarData(idProductos:number): Observable<any>{
    return this.http.delete(this.AppUrl+"api/Compilado/Eliminar/"+idProductos)
  }
  eliminarAsig(idAsignados:number): Observable<any>{
    return this.http.delete(this.AppUrl+"api/Asignados/Eliminar/"+idAsignados);
  }
  actualizar(data: any){
    this.actulizarData.next(data);
  }
  updateData(idProductos:number, data:any):Observable<any>{
    return this.http.put<any>(this.AppUrl+"api/Compilado/Editar"+idProductos,data);
  }
  getData$(): Observable<any>{
    return this.actulizarData.asObservable();
  }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { CompiladoModels } from '../models/compiladoModels';
// export interface dataCompilado{
//   oficina:string,
// }
@Injectable({
  providedIn: 'root'
})
export class ApiconnectService {
  AppUrl="http://localhost:5182/";
  private isAuthentica = false;
  private actulizarData = new BehaviorSubject <any>({}as any)
  constructor( private http: HttpClient ) {
  }
  //metodo get 
  ObtenerUsuarios(){
    return this.http.get(this.AppUrl+"api/Usuario/Usuario");
  }
  ObtenerDatos(): Observable<any> {
    return this.http.get(this.AppUrl+"api/Compilado/Compilado");
  }
  getExcel(): Observable<any>{
    return this.http.get(this.AppUrl + "api/Compilado/ExportExcel", { responseType: 'arraybuffer' });
  }
  genererPDF(id:any){
    return this.http.get(this.AppUrl+"api/Compilado/GenerarPDF?idCompilado="+id,{observe:'response', responseType:'blob'})
  }
  genererPDFasignaciones(id:any){
    return this.http.get(this.AppUrl+"api/Asignados/GenerarPDF?idAsignados="+id,{observe:'response', responseType:'blob'})
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
  enviarCorreo(correoData:any): Observable<any> {
    return this.http.post<any>(this.AppUrl+"api/Compilado/EnviarCorreo", correoData)
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
  eliminarUsuarios(idUsuarios:number): Observable<any>{
    return this.http.delete(this.AppUrl+"api/Usuario/Eliminar/"+idUsuarios);
  }
  actualizar(data: any){
    this.actulizarData.next(data);
  }
  updateData(idProductos:number, data:any):Observable<any>{
    return this.http.put<any>(this.AppUrl+"api/Compilado/Editar",data);
  }
  getData$(): Observable<any>{
    return this.actulizarData.asObservable();
  }
  //editar asignaciones
  updateAsignaciones(idAsignados:number, data:any):Observable<any>{
    return this.http.put<any>(this.AppUrl+"api/Asignados/Editar",data);
  }
  //metodo de authenticar
  isAuthenticated(): boolean{
    return this.isAuthentica;
  }
  //login
  login(user:any):Observable<any>{
    return this.http.post(this.AppUrl+"api/Usuario/login", user).pipe(
      tap(response=>{
        this.isAuthentica=true;
      })
    );
  }
  //resgistro
  registroU(user:any):Observable<any>{
    return this.http.post(this.AppUrl+"api/Usuario/Agregar", user);
  }
}

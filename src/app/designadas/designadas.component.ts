import { Component, OnInit } from '@angular/core';
import { ApiconnectService } from '../Services/apiconnect.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-designadas',
  templateUrl: './designadas.component.html',
  styleUrls: ['./designadas.component.css']
})
export class DesignadasComponent implements OnInit{
  p:number=1;
  datos:any;
  constructor(private router:Router,private service:ApiconnectService, private toast:ToastrService){

  }
  ngOnInit(): void {
    this.cargaAsignaciones();
  }
  cargaAsignaciones(){
    this.service.ObtenerAsig().subscribe(result=>{
      console.log(result)
      this.datos=result;
    })
  }
  eliminarAsignaciones(idAsignados:number){
    if(confirm("Estas seguro de eliminar la asignación")){
      this.service.eliminarAsig(idAsignados).subscribe(result=>{
        this.toast.warning('Registro eliminado', 'El dato ha sido eliminado');
        this.service.ObtenerAsig();
      })
    }
  }
  ruta(){
    this.router.navigate(['/AsignarData'])
  }
  campo(data: any){
    this.service.actualizar(data)
  }
}

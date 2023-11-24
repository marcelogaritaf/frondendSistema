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
  filterData="";
  filterData2="";
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
  editarNavigation(){
    this.router.navigate(["/EditarAsigancion"])
  }
  campo(data: any){
    this.service.actualizar(data)
  }
  camposEditar(data:any){
    this.service.actualizar(data)
  }
  descargePDF(data:any){
    this.service.genererPDFasignaciones(data).subscribe(res=>{
      let blob:Blob= res.body as Blob;
      let url=window.URL.createObjectURL(blob);
      let a=document.createElement('a');
      a.download=`Reporte_ID ${data}`;
      a.href=url;
      a.click();
    })
  }
}

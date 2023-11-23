import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiconnectService } from '../Services/apiconnect.service';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-home-compoment',
  templateUrl: './home-compoment.component.html',
  styleUrls: ['./home-compoment.component.css']
})
export class HomeCompomentComponent implements OnInit{
  p:number=1;
  totalLength:any
  datos:any=[];
  filterData="";
  filterData2="";
  filterData3="";
  pdfUrl="";
  constructor(private router: Router, private service: ApiconnectService, private toast:ToastrService, private fb:FormBuilder){

  }
  ngOnInit(): void {
    this.cargaDatos();
    // this.fectData();

  }
  cargaDatos(){
    this.service.ObtenerDatos().subscribe(result=>{
      console.log(result)
      this.datos=result;
    })
  }
  eliminar(idProductos:number){
    if(confirm("Estas seguro de eliminar el elemento")){
      this.service.eliminarData(idProductos).subscribe(result=>{
        this.toast.warning('Registro eliminado', 'El dato ha sido eliminado')
        this.service.ObtenerDatos();
      })
    }
  }
 editar(data:any){
  this.service.actualizar(data)
 }
  agregar(){
    this.router.navigate(['/AgregarDato'])
  }
  editarNavigation(){
    this.router.navigate(['/EditarDato'])
  }
  BoletinNavegacion(){
    this.router.navigate(['/Boletin'])
  }
  campos(data: any){
    this.service.actualizar(data)
  }
  exportar(){
    this.service.getExcel().subscribe(result=>{
      const blob = new Blob([result], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
      // Utiliza la biblioteca file-saver para descargar el archivo
      saveAs(blob, 'REPORTE COMPILADO.xlsx');
    })
  }
  descargePDF(data:any){
    this.service.genererPDF(data).subscribe(res=>{
      let blob:Blob= res.body as Blob;
      let url=window.URL.createObjectURL(blob);
      let a=document.createElement('a');
      a.download=`Reporte_ID ${data}`;
      a.href=url;
      a.click();
    })
  }
}


import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiconnectService } from '../Services/apiconnect.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home-compoment',
  templateUrl: './home-compoment.component.html',
  styleUrls: ['./home-compoment.component.css']
})
export class HomeCompomentComponent implements OnInit{
  p:number=1;
  datos:any=null;
  constructor(private router: Router, private service: ApiconnectService, private toast:ToastrService){

  }
  ngOnInit(): void {
    this.cargaDatos();
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
}


import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiconnectService } from '../Services/apiconnect.service';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-home-compoment',
  templateUrl: './home-compoment.component.html',
  styleUrls: ['./home-compoment.component.css']
})
export class HomeCompomentComponent implements OnInit{
  p:number=1;
  datos:any=null;
  // controlform=this.fb.nonNullable.group({
  //   id:1
  // });
  constructor(private router: Router, private service: ApiconnectService, private toast:ToastrService, private fb:FormBuilder){

  }
  ngOnInit(): void {
    this.cargaDatos();
    // this.fectData();

  }
  // fectData():void{
  //   const id=this.controlform.value.id ?? 1
  //   this.service.ObtenerDatosByQuery(id).subscribe(result=>{
  //     this.datos=result;
  //   })
  // }
  // buscador():void{
  //   this.fectData();
  // }
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
  campos(data: any){
    this.service.actualizar(data)
  }
}


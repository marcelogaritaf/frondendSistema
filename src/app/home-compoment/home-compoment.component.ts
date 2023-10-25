import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiconnectService } from '../Services/apiconnect.service';

@Component({
  selector: 'app-home-compoment',
  templateUrl: './home-compoment.component.html',
  styleUrls: ['./home-compoment.component.css']
})
export class HomeCompomentComponent implements OnInit{
  p:number=1;
  datos:any=null;
  constructor(private router: Router, private service: ApiconnectService){

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
  LlenarCampos(){
   
  }
  agregar(){
    this.router.navigate(['/AgregarDato'])
  }
}


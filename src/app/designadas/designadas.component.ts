import { Component, OnInit } from '@angular/core';
import { ApiconnectService } from '../Services/apiconnect.service';

@Component({
  selector: 'app-designadas',
  templateUrl: './designadas.component.html',
  styleUrls: ['./designadas.component.css']
})
export class DesignadasComponent implements OnInit{
  p:number=1;
  datos:any;
  constructor(private service:ApiconnectService){

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
}

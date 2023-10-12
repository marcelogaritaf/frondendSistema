import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro-asignar',
  templateUrl: './registro-asignar.component.html',
  styleUrls: ['./registro-asignar.component.css']
})
export class RegistroAsignarComponent {
  datos: FormGroup;

  constructor(private http:HttpClient){
    this.datos= new FormGroup({
      correo: new FormControl('',[Validators.required, Validators.email]),
      asunto: new FormControl('',Validators.required),
      mensaje: new FormControl('',Validators.required),
      archivo: new FormControl('',Validators.required),
    })
  }
  enviarCorreo(){
    let params ={
      email:this.datos.value.correo,
      asunto:this.datos.value.asunto,
      mensaje:this.datos.value.mensaje,
      archivo:this.datos.value.archivo
    }
    console.log(params)
    this.http.post('http://localhost:3000/envio', params).subscribe(resp=>{
      console.log(resp)
    })
  }
}

import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiconnectService } from 'src/app/Services/apiconnect.service';

@Component({
  selector: 'app-asing-task',
  templateUrl: './asing-task.component.html',
  styleUrls: ['./asing-task.component.css']
})
export class AsingTaskComponent implements OnInit{
  datos:FormGroup;
  respuest:any;
  constructor(private http:HttpClient,private service:ApiconnectService){
    this.datos=new FormGroup({
      correo: new FormControl('',[Validators.required, Validators.email]),
      asunto: new FormControl('Asignación de Compra',[Validators.required]),
      mensaje: new FormControl('',[Validators.required]),
    })
  }
  ngOnInit(): void {
    this.service.getData$().subscribe(result=>{
      console.log(result)
      this.respuest= result
      this.datos.patchValue({
        correo:this.respuest.correoElectronico
      })
    })
  }
  enviarCorreo(){
    let params={
      email:this.datos.value.correo,
      asunto:this.datos.value.asunto,
      mensaje:this.datos.value.mensaje,
    }
    console.log(params);
    this.http.post('http://localhost:3000/envio',params).subscribe(resp=>{
      console.log(resp)
    })
  }
}

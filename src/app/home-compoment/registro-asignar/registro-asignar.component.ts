import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ApiconnectService } from 'src/app/Services/apiconnect.service';

@Component({
  selector: 'app-registro-asignar',
  templateUrl: './registro-asignar.component.html',
  styleUrls: ['./registro-asignar.component.css']
})
export class RegistroAsignarComponent {
  datos: FormGroup;

  constructor(private formBuilder:FormBuilder, private service:ApiconnectService, private toast:ToastrService){
    this.datos = this.formBuilder.group({
      toEmail: ['',[Validators.required]],
      subject: ['',[Validators.required]],
      body: ['',[Validators.required]],
      attachment: ['']
    })
  }
  enviarCorreo(){
    const formData=this.datos.getRawValue();
    console.log(formData)
    this.service.enviarCorreo(formData).subscribe(result=>{
      this.toast.success('Correo Enviado','Correctamente')
      console.log(result)
    }, (error: HttpErrorResponse) => {
      console.error('Error en la respuesta del servidor:', error.error);
      this.toast.error('Error al enviar el correo', 'Error');
    })
    console.log(this.datos)
  }
}

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
    /*const formData = new FormData();
    const formValues=this.datos.getRawValue();
    formData.append('toEmail', formValues.toEmail);
    formData.append('subject', formValues.subject);
    formData.append('body', formValues.body);
   // formData.append('attachment', formValues.attachment);*/
    const formData:any={
    toEmail:this.datos.get('toEmail')?.value,
    subject:this.datos.get('subject')?.value,
    body:this.datos.get('body')?.value,
   }

    this.service.enviarCorreo(formData).subscribe(result=>{
      this.toast.success('Correo enviado con exito', 'Correo enviado');
      this.datos.reset();
    }, (error:HttpErrorResponse)=>{
      console.error('Error en la respuesta del servidor:', error.error);
      this.toast.error('Error al enviar el correo', 'Error');
    })
    console.log(this.datos)
  }
}

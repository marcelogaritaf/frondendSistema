import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ApiconnectService } from 'src/app/Services/apiconnect.service';

@Component({
  selector: 'app-asing-task',
  templateUrl: './asing-task.component.html',
  styleUrls: ['./asing-task.component.css']
})
export class AsingTaskComponent implements OnInit{
  datos:FormGroup;
  respuest:any;
  constructor(private http:HttpClient,private service:ApiconnectService, private formBuilder:FormBuilder,private toast:ToastrService){
    this.datos = this.formBuilder.group({
      toEmail: ['',[Validators.required]],
      subject: ['Asignacion de compra',[Validators.required]],
      body: ['',[Validators.required]],
      attachment: ['']
    })
  }
  ngOnInit(): void {
    this.service.getData$().subscribe(result=>{
      console.log(result)
      this.respuest= result
      this.datos.patchValue({
        toEmail:this.respuest.oUsuarios.correoElectronico
      })
    })
  }
  enviarCorreo(){
    const formData = new FormData();
    const formValues = this.datos.getRawValue();
    formData.append('toEmail', formValues.toEmail);
    formData.append('subject', formValues.subject);
    formData.append('body', formValues.body);
    if (formValues.attachment) {
      formData.append('attachment', formValues.attachment.files[0]);
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
  onFileChange(event:any){
    const fileInput = event.target;
    this.datos.get('attachment')?.setValue(fileInput);
  }
}

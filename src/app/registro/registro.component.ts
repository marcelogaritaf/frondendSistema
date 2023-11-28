import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiconnectService } from '../Services/apiconnect.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  form:FormGroup;
  constructor(private formBuilder:FormBuilder, private service:ApiconnectService,  private toast:ToastrService, private router:Router){
    this.form=this.formBuilder.group({
      idUsuarios:0,
      nombreCompleto:['',[Validators.required]],
      correoElectronico:['',[Validators.required]],
      Oficina:['',[Validators.required]],
      Contrasena:['',[Validators.required]]
    })
  }
  registrarUser(){
    const formData:any={
      nombreUsuario:this.form.get('nombreCompleto')?.value,
      correoElectronico:this.form.get('correoElectronico')?.value,
      oficina: this.form.get('Oficina')?.value,
      contrasena:this.form.get('Contrasena')?.value
    }
    if(this.form.valid){
      this.service.registroU(formData).subscribe(data=>{
        const idUsuarios = data.mensaje
        this.toast.success('Usuario registrado correctamente',`ID del usuario ${idUsuarios}`);
        setTimeout(()=>{
          this.router.navigateByUrl("/Home");
        },3000)
      })
    }else{
      this.toast.warning('Debe llenar los campos','Espacios Vacios')
    }
  }
}

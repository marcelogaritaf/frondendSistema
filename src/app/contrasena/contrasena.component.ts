import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiconnectService } from '../Services/apiconnect.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contrasena',
  templateUrl: './contrasena.component.html',
  styleUrls: ['./contrasena.component.css']
})
export class ContrasenaComponent {
  form:FormGroup;
  id=0;
  constructor(private formBuilder:FormBuilder, private service:ApiconnectService,  private toast:ToastrService, private router:Router){
    this.form=this.formBuilder.group({
      idUsuarios:['',[Validators.required]],
      Contrasena:['',[Validators.required]]
    })
  }
  cambiarPass(){
    if(this.form.valid){
      const data = this.form.value;
      this.service.updatePASS(this.id,data).subscribe(resp=>{
        console.log(resp)
        this.toast.info('Registro actualizado', `La contraseña ha sido actualizada`)
      },error=>{
        if(error.error){
          this.toast.error('Datos incorrectos', error.error)
        }
      })
    }else{
      this.toast.warning('Debe llenar los campos','Espacios Vacios')
    }
  }
}

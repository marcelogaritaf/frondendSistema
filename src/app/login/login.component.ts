import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiconnectService } from '../Services/apiconnect.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  form:FormGroup;
  constructor(private formBuilder:FormBuilder, private service:ApiconnectService,  private toast:ToastrService, private router:Router){
    this.form=this.formBuilder.group({
      idUsuarios:0,
      correoElectronico:['',[Validators.required]],
      Contrasena:['',[Validators.required]]
    })
  }
  login(){
    const formData:any={
      correoElectronico:this.form.get('correoElectronico')?.value,
      contrasena:this.form.get('Contrasena')?.value
    }
    if(this.form.valid){
        this.service.login(formData).subscribe(data=>{
          console.log(data);
          this.router.navigateByUrl("/Home")
        },
        error=>{
          if(error.error){
            console.log('error de credenciales incorrectas', error.error);
            this.toast.error('Datos incorrectos', error.error)
          }
        }
        )
    } else{
      this.toast.warning('Debe llenar los campos','Espacios Vacios')
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ApiconnectService } from 'src/app/Services/apiconnect.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit{
  form:FormGroup;
  response:any;
  id=0;
  constructor(private formBuilder:FormBuilder, private service:ApiconnectService, private toast:ToastrService){
    this.form=this.formBuilder.group({
      idUsuarios:0,
      nombreCompleto:['',[Validators.required]],
      correoElectronico:['',[Validators.required]],
      Oficina:['',[Validators.required]]
    })
  }
  ngOnInit(): void {
    this.service.getData$().subscribe(data=>{
      this.response=data;
      console.log(this.form)
      this.form.patchValue({
        nombreCompleto:this.response.nombreUsuario,
        correoElectronico:this.response.correoElectronico,
        Oficina:this.response.oficina
      })
      this.id=this.response.idUsuarios;
    })
  }
  editarUser(){
    if(this.form.valid){
      this.form.get('idUsuarios')?.setValue(this.id);
      const data = this.form.value;
      this.service.updatePASS(this.id, data).subscribe(resp=>{
        this.toast.info('Usuario actualizado', `EL usuario con el ID ${this.id} ha sido actualizado`)
      })
    }else{
      this.toast.error('Error','Dato no actualizado')
    }
  }
}

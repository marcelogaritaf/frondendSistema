import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ApiconnectService } from 'src/app/Services/apiconnect.service';

@Component({
  selector: 'app-update-designadas',
  templateUrl: './update-designadas.component.html',
  styleUrls: ['./update-designadas.component.css']
})
export class UpdateDesignadasComponent implements OnInit{
  form:FormGroup;
  response:any;
  id=0;
  constructor(private formBuilder:FormBuilder, private service:ApiconnectService, private toast:ToastrService){
    this.form=this.formBuilder.group({
      idAsignados:0,
      idCompilado:['',[Validators.required]],
      idUsuarios:['',[Validators.required]],
      fechaInicio:['',[Validators.required]],
      fechaFin:['',[Validators.required]],
    })
  }
  ngOnInit(): void {
    this.service.getData$().subscribe(data=>{
      this.response=data;
      this.form.patchValue({
        idCompilado:this.response.idCompilado,
        idUsuarios:this.response.idUsuarios,
        fechaInicio:this.response.fechaInicio,
        fechaFin:this.response.fechaFin,
      })
      this.id=this.response.idAsignados;
    })
  }
  EditarAsignaciones(){
    if(this.form.valid){
      this.form.get('idAsignados')?.setValue(this.id);
      const data = this.form.value;
      this.service.updateAsignaciones(this.id,data).subscribe(resp=>{
        this.toast.info('Registro actualizado', `EL dato con el ID ${this.id} ha sido actualizado`)
      })
    }else[
      this.toast.error('Error','Dato no actualizado')
    ]
  }
}

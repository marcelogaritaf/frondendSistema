import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiconnectService } from '../Services/apiconnect.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-asignar',
  templateUrl: './asignar.component.html',
  styleUrls: ['./asignar.component.css']
})
export class AsignarComponent {
  form:FormGroup;
  constructor(private formBuilder:FormBuilder, private service:ApiconnectService, private toast:ToastrService){
    this.form=this.formBuilder.group({
      idAsignados:0,
      idCompilado:['',[Validators.required]],
      idUsuarios:['',[Validators.required]],
      fechaInicio:['',[Validators.required]],
      fechaFinal:['',[Validators.required]],
    })
  }
  agregarAsignaciones(){
    const formData:any={
      idCompilado:this.form.get('idCompilado')?.value,
      idUsuarios:this.form.get('idUsuarios')?.value,
      fechaInicio:this.form.get('fechaInicio')?.value,
      fechaFin: this.form.get('fechaFinal')?.value,
    }
    this.service.addAsig(formData).subscribe(result=>{
      console.log('guardado correctamente')
      this.toast.success('Dato agregado', 'Los datos han sido agregados correctamente');
      this.form.reset();
    })
    console.log(this.form)
  }
}

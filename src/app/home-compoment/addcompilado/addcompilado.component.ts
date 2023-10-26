import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ApiconnectService } from 'src/app/Services/apiconnect.service';
import { CompiladoModels } from 'src/app/models/compiladoModels';
@Component({
  selector: 'app-addcompilado',
  templateUrl: './addcompilado.component.html',
  styleUrls: ['./addcompilado.component.css']
})
export class AddcompiladoComponent {
  form: FormGroup;
  constructor(private formBuilder:FormBuilder, private service:ApiconnectService, private toast:ToastrService){
    this.form = this.formBuilder.group({
      idCompilado: 0,
      oficina: ['', [Validators.required]],
      area: ['', [Validators.required]],
      codigoPrograma: ['', [Validators.required]],
      codigoSubpartida: ['', [Validators.required]],
      idArticulo: ['', [Validators.required]],
      periodo: ['', [Validators.required]],
      prioridad: ['', [Validators.required]],
      tipoTramite: ['', [Validators.required]],
      nContrato: ['',],
      certificacion: ['',],
      nSCuCuA: ['',]
    })
  }

  agregarDatos(){
   const formData:any={
    oficina: this.form.get('oficina')?.value,
    area: this.form.get('area')?.value,
    codigoPrograma: this.form.get('codigoPrograma')?.value,
    codigoSubpartida: this.form.get('codigoSubpartida')?.value,
    idProductos: this.form.get('idArticulo')?.value,
    periodoEjecucion: this.form.get('periodo')!.value,
    prioridad: this.form.get('prioridad')?.value,
    tipoTramite: this.form.get('tipoTramite')?.value,
    numeroContratoVigente: this.form.get('nContrato')!.value,
    requisionCertificacion: this.form.get('certificacion')!.value,
    numeroScUcUa: this.form.get('nSCuCuA')!.value
   }
   this.service.addData(formData).subscribe(result=>{
     this.toast.success('Dato agregado', 'Los datos han sido agregados correctamente');
     this.form.reset();
   })
    console.log(this.form)
  }
}

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiconnectService } from 'src/app/Services/apiconnect.service';
import { CompiladoModels } from 'src/app/models/compiladoModels';
@Component({
  selector: 'app-addcompilado',
  templateUrl: './addcompilado.component.html',
  styleUrls: ['./addcompilado.component.css']
})
export class AddcompiladoComponent {
  form: FormGroup;
  constructor(private formBuilder:FormBuilder, private service:ApiconnectService){
    this.form = this.formBuilder.group({
      idCompilado: ['', [Validators.required]],
      oficina: ['', [Validators.required]],
      area: ['', [Validators.required]],
      codigoPrograma: ['', [Validators.required]],
      codigoSubpartida: ['', [Validators.required]],
      idArticulo: ['', [Validators.required]],
      periodo: ['', [Validators.required]],
      prioridad: ['', [Validators.required]],
      tipoTramite: ['', [Validators.required]],
      nContrato: [''],
      certificacion: [''],
      nSCuCuA: [''],
    })
  }

  agregarDatos(){
   const formData:CompiladoModels={
    ID_Compilado: this.form.get('idCompilado')?.value,
     Oficina: this.form.get('oficina')?.value,
     Area: this.form.get('area')?.value,
     Codigo_Programa: this.form.get('codigoPrograma')?.value,
     Codigo_Subpartida: this.form.get('codigoSubpartida')?.value,
     ID_Productos: this.form.get('idArticulo')?.value,
     Periodo_Ejecucion: this.form.get('periodo')?.value,
     Prioridad: this.form.get('prioridad')?.value,
     Tipo_Tramite: this.form.get('tipoTramite')?.value,
     Numero_Contrato_Vigente: this.form.get('nContrato')?.value,
     Requision_Certificacion: this.form.get('certificacion')?.value,
     Numero_SC_UC_UA: this.form.get('nSCuCuA')?.value
   }
   this.service.addData(formData).subscribe(result=>{
     console.log('guardado bien')
     this.form.reset();
   })
    console.log(this.form)
  }
}

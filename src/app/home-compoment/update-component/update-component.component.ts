import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ApiconnectService } from 'src/app/Services/apiconnect.service';

@Component({
  selector: 'app-update-component',
  templateUrl: './update-component.component.html',
  styleUrls: ['./update-component.component.css']
})
export class UpdateComponentComponent implements OnInit{
  form: FormGroup;
  response:any;
  id=0;
  constructor(private service:ApiconnectService, private formBuilder:FormBuilder, private toast:ToastrService){
    this.form = this.formBuilder.group({
      idCompilado: 0,
      oficina: ['', [Validators.required]],
      area: ['', [Validators.required]],
      codigoPrograma: ['', [Validators.required]],
      codigoSubpartida: ['', [Validators.required]],
      articulo: ['', [Validators.required]],
      codigoArticulo: ['', [Validators.required]],
      cantidad: ['', [Validators.required]],
      costoUnitario: ['', [Validators.required]],
      montoTotal: ['', [Validators.required]],
      montoModificar: [''],
      montoReal: ['', [Validators.required]],
      Descripcion: [''],
      estado: ['', [Validators.required]],
      periodo: ['', [Validators.required]],
      prioridad: ['', [Validators.required]],
      Observaciones: [''],
      tipoTramite: ['', [Validators.required]],
      nContrato: ['',],
      certificacion: ['',],
      nSCuCuA: ['',],
      periodoYear: ['', [Validators.required]]
    })
  }
 
  ngOnInit(): void {
    this.service.getData$().subscribe(data=>{
      console.log(data);
      this.response=data;
      this.form.patchValue({
        oficina:this.response.oficina,
        area:this.response.area,
        codigoPrograma:this.response.codigoPrograma ,
        codigoSubpartida:this.response.codigoSubpartida ,
        articulo:this.response.articulo ,
        codigoArticulo:this.response.codigoArticulo ,
        cantidad:this.response.cantidad ,
        costoUnitario:this.response.costoUnitario ,
        montoTotal: this.response.montoTotal,
        montoModificar:this.response.montoModificar ,
        montoReal:this.response.montoReal ,
        Descripcion: this.response.descripcion,
        estado: this.response.estado,
        periodo: this.response.periodo,
        prioridad:this.response.prioridad ,
        Observaciones: this.response.observaciones,
        tipoTramite: this.response.tipoTramite,
        nContrato:this.response.numeroContratoVigente ,
        certificacion: this.response.requisionCertificacion,
        nSCuCuA:this.response.numeroScUcUa ,
        periodoYear:this.response.periodo
      })
      this.id=this.response.idCompilado;
    })
  }
  editarData(){
    if (this.form.valid){
      const data=this.form.value;
      this.service.updateData(this.id,data).subscribe(resp=>{
        console.log(resp)
        this.toast.info('Registro actualizado', 'El dato ha sido actualizado')
      })
    }else[
      this.toast.error('Error','Dato no actualizado')
    ]
  }
  
}

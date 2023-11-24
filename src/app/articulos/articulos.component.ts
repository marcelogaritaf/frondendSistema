import { AfterViewInit, Component, ViewChild, OnInit} from '@angular/core';
import { ApiconnectService } from '../Services/apiconnect.service';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Toast, ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-articulos',
  templateUrl: './articulos.component.html',
  styleUrls: ['./articulos.component.css']
})
export class ArticulosComponent{
   datos:any;
   p:number=1;
   constructor(private service:ApiconnectService, private toast: ToastrService){
      this.service.ObtenerUsuarios().subscribe(result=>{
       console.log(result)
        this.datos=result;

      })
   }
   eliminar(idUsuarios:number){
      if(confirm("Estas seguro de eliminar el elemento")){
         this.service.eliminarUsuarios(idUsuarios).subscribe(resp=>{
            this.toast.warning('Registro eliminado', 'El dato ha sido eliminado')
            this.service.ObtenerDatos();
         })
      }
   }
}

import { Component, ViewChild} from '@angular/core';
import { ApiconnectService } from '../Services/apiconnect.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-articulos',
  templateUrl: './articulos.component.html',
  styleUrls: ['./articulos.component.css']
})
export class ArticulosComponent{
    datos:any;
    p:number=1;
    constructor(private service:ApiconnectService){
       this.service.ObtenerArticulos().subscribe(result=>{
        console.log(result)
         this.datos=result;

       })
    }
}

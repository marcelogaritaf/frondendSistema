import { Component, ViewChild} from '@angular/core';
import { ApiconnectService } from '../Services/apiconnect.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';


 export interface ProductData{
   idProductos: string;
   articulo: string;
   codigoArticulo: string;
   cantidad: string;
   costoUnitario: string;
   montoTotal:string;
   descripcion:string;
 }
@Component({
  selector: 'app-articulos',
  templateUrl: './articulos.component.html',
  styleUrls: ['./articulos.component.css']
})
export class ArticulosComponent{
  displayedColumns : string[]=['idProductos','articulo','codigoArticulo','cantidad','costoUnitario','montoTotal','descripcion']
  dataSource!: MatTableDataSource<ProductData>
  // dataSource = [{
  //   articulo: "CONSULTORIA EN INFORMATICA",
  //   cantidad: 1,
  //   codigoArticulo: 23634,
  //   costoUnitario: 80000000,
  //   descripcion: "VMWare Tanzu activation services para implementación de tanzu kubernetes y poder desplegar aplicaciones basadas en contenedores y así dar mejor servicio de aplicaciones y formas de trabajo en la dtic",
  //   idProductos: 1001,
  //   montoTotal: 80000000,
  // }]
   datos:any;
   constructor(private service:ApiconnectService){
      this.service.ObtenerArticulos().subscribe(result=>{
       console.log(result)
        this.datos=result;

        this.dataSource = new MatTableDataSource(this.datos) 
      })
   }
}

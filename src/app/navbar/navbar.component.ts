import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(private route:Router){}
  homeNavigation(){
    this.route.navigate(['/Home']);
  }
  asignarNavigation(){
    this.route.navigate(['/Asignacion']);
  }
  designadasNavigation(){
    this.route.navigate(['/Designadas']);
  }
  UsuariosNavigation(){
    this.route.navigate(['/Usuarios'])
  }
}

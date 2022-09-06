import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/services/usuarios.service';
@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.page.html',
  styleUrls: ['./lista-alumnos.page.scss'],
})
export class ListaAlumnosPage implements OnInit {

  alumnos = []  
  upper(texto: string){
    return texto.toLocaleUpperCase()
  }

  constructor(public Servicio: UsuariosService) { }

  ngOnInit() {
    this.Servicio.getUsuarios().forEach( u => {
      if(u.usuario === 'alumno'){
        this.alumnos.push(u)
      }
    })
    
  }

}

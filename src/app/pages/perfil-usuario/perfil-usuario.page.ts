import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-perfil-usuario',
  templateUrl: './perfil-usuario.page.html',
  styleUrls: ['./perfil-usuario.page.scss'],
})
export class PerfilUsuarioPage implements OnInit {
  datos = {
   
  }
  lista =[]
  
  constructor(public Servicio: UsuariosService, public ruta: ActivatedRoute) { }

  ngOnInit() {
    this.ruta.paramMap.subscribe( us =>{
      this.datos = this.Servicio.getUsuarioById(us.get('usuarioID'))
       console.log(this.datos)
       this.lista.push(this.datos)
    })
  }

}

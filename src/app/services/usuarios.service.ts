import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  usuarios: any[] = [
    {
      id: '1',
      rut:'11.111.111-1',
      nombre:'admin',
      fecha_nac: '2000-03-12',
      correo:'admin@admin.com',
      semestre: 1,
      password: 'admin',
      usuario:'administrador'
    }
  ]

  constructor() { }


  getUsuarios(){
    return this.usuarios
  }
  getUsuario(rut){
    return this.usuarios.find(usuario => usuario.rut == rut);
  }

  addUsuarios(usuario):boolean{
    if( this.getUsuario(usuario.rut) == undefined ){
      usuario.id = this.usuarios.length + 1000 + "";
      this.usuarios.push(usuario)
      return true;
    }
    return false;
  }

  

  validarLogin(correo, pass){
    return this.usuarios.find(u => u.correo == correo && u.password == pass);
  }

  getUsuarioById(usuarioID: string){
    return{
      ...this.usuarios.find( us =>{
        return us.id === usuarioID
      })
    }
  }

  getDocentes(usario:string){
    return this.usuarios.find(usuario => usuario.usuario == usuario);
  }
 
}

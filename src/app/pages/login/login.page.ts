import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validator, FormBuilder, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  correo: string
  password: string

  constructor(private toastController: ToastController,private usuariosService: UsuariosService, private router:Router) {
    
   }

  ngOnInit() {
    console.log(this.usuariosService.usuarios)
  }

  login(){
    var usuarioLogin = this.usuariosService.validarLogin(this.correo, this.password);

    //validar que al ingresar admin admin en el formulario, me diga hola:
    if (usuarioLogin != undefined) {
      if (usuarioLogin.usuario === 'administrador') {
        this.router.navigate(['/admin-page']);
      }else if (usuarioLogin.usuario === 'docente'){
        this.router.navigate(['/docente-page']);
      }else{
        this.router.navigate(['/alumno-page']);
      }
    }else{
      this.tostadaError();
    }
  }

  async tostadaError() {
    const toast = await this.toastController.create({
      message: 'Usuario o contraseña incorrectos!!!',
      duration: 3000
    });
    toast.present();
  }
}

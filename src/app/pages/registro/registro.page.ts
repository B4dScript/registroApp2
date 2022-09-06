import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validator, FormBuilder, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { UsuariosService } from 'src/app/services/usuarios.service'
@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {


  alumno = new FormGroup({
    rut: new FormControl('',[Validators.required, Validators.pattern('[0-9]{1,2}.[0-9]{3}.[0-9]{3}-[0-9kK]{1}')]),
    nombre: new FormControl('',[Validators.required, Validators.minLength(3)]),
    correo: new FormControl('',[Validators.required, Validators.minLength(10)]),
    fecha_nac: new FormControl('',[Validators.required]),
    semestre: new FormControl('',[Validators.required, Validators.min(1), Validators.max(8)]),
    password: new FormControl('',[Validators.required, Validators.minLength(8),Validators.maxLength(21)]),
    usuario :new FormControl('alumno')
  })

  verificarPass: string

  constructor(private usuariosService: UsuariosService, private router: Router) {
    
   }

  ngOnInit() {
    console.log(this.usuariosService.usuarios)
  }

  guardar(){
    if(this.alumno.controls.password.value != this.verificarPass){
      alert('Las contrasenas no coinciden')
      return;
    }
    this.usuariosService.addUsuarios(this.alumno.value);
    alert('Usuario registrado!');
    this.router.navigate(['/login']);
    
  }
}

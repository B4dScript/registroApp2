import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-registro-docentes',
  templateUrl: './registro-docentes.page.html',
  styleUrls: ['./registro-docentes.page.scss'],
})
export class RegistroDocentesPage implements OnInit {

  docente = new FormGroup({
    rut: new FormControl('',[Validators.required, Validators.pattern('[0-9]{1,2}.[0-9]{3}.[0-9]{3}-[0-9kK]{1}')]),
    nombre: new FormControl('',[Validators.required, Validators.minLength(3)]),
    correo: new FormControl('',[Validators.required, Validators.minLength(10)]),
    fecha_nac: new FormControl('',[Validators.required]),
    semestre: new FormControl('',[Validators.required, Validators.min(1), Validators.max(8)]),
    password: new FormControl('',[Validators.required, Validators.minLength(8),Validators.maxLength(21)]),
    usuario :new FormControl('docente')
  })

  verificarPass: string

  constructor(private usuariosService: UsuariosService, private router: Router) {
    
   }

  ngOnInit() {
    console.log(this.usuariosService.usuarios)
  }

  guardar(){
    if(this.docente.controls.password.value != this.verificarPass){
      alert('Las contrasenas no coinciden')
      return;
    }
    this.usuariosService.addUsuarios(this.docente.value);
    alert('Usuario registrado!');
    this.router.navigate(['/admin-page']);
    
  }

}

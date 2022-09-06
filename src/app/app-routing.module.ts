import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./pages/registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'admin-page',
    loadChildren: () => import('./pages/admin-page/admin-page.module').then( m => m.AdminPagePageModule)
  },
  {
    path: 'alumno-page',
    loadChildren: () => import('./pages/alumno-page/alumno-page.module').then( m => m.AlumnoPagePageModule)
  },
  {
    path: 'docente-page',
    loadChildren: () => import('./pages/docente-page/docente-page.module').then( m => m.DocentePagePageModule)
  },
  {
    path: 'registro-docentes',
    loadChildren: () => import('./pages/registro-docentes/registro-docentes.module').then( m => m.RegistroDocentesPageModule)
  },
  {
    path: 'lista-docentes',
    loadChildren: () => import('./pages/lista-docentes/lista-docentes.module').then( m => m.ListaDocentesPageModule)
  },
  {
    path: 'lista-alumnos',
    loadChildren: () => import('./pages/lista-alumnos/lista-alumnos.module').then( m => m.ListaAlumnosPageModule)
  },
  {
    path: 'modificar-usuarios',
    loadChildren: () => import('./pages/modificar-usuarios/modificar-usuarios.module').then( m => m.ModificarUsuariosPageModule)
  },
  {
    path: 'perfil-usuario/:usuarioID',
    loadChildren: () => import('./pages/perfil-usuario/perfil-usuario.module').then( m => m.PerfilUsuarioPageModule)
  },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

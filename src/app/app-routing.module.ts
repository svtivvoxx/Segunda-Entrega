import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AngularFireAuthGuard, redirectUnauthorizedTo } from '@angular/fire/compat/auth-guard';



const redireccionLogin = (  ) => redirectUnauthorizedTo(['/home']);

const routes: Routes = [
    { path: '', redirectTo: 'menu', pathMatch: 'full' },
    { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule) },


    { path: 'register', loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule) },
    {path: 'recuperar', loadChildren: () => import('./recuperar/recuperar.module').then( m => m.RecuperarPageModule)},
  {

    canActivate:[AngularFireAuthGuard], data:{authGuardPipe: redireccionLogin},
    path: 'menu',
    loadChildren: () => import('./menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'camara',
    loadChildren: () => import('./camara/camara.module').then( m => m.CamaraPageModule)
  },
  {
    path: 'asistencia',
    loadChildren: () => import('./asistencia/asistencia.module').then( m => m.AsistenciaPageModule)
  },
  {
    path: 'visualizar',
    loadChildren: () => import('./visualizar/visualizar.module').then( m => m.VisualizarPageModule)
  },
  {
    path: 'asignatura/:primaryKey',
    loadChildren: () => import('./asignatura/asignatura.module').then( m => m.AsignaturaPageModule)
  },
  {
    path: 'perfiles-usuarios',
    loadChildren: () => import('./perfiles-usuarios/perfiles-usuarios.module').then( m => m.PerfilesUsuariosPageModule)
  },
  {
    path: 'confirmar-qr',
    loadChildren: () => import('./confirmar-qr/confirmar-qr.module').then( m => m.ConfirmarQrPageModule)
  },
  {
    path: 'ubicacion',
    loadChildren: () => import('./ubicacion/ubicacion.module').then( m => m.UbicacionPageModule)
  },
  {
    path: 'not-found',
    loadChildren: () => import('./not-found/not-found.module').then( m => m.NotFoundPageModule)
  },
  {
    path: '**',
    redirectTo: 'not-found',
    pathMatch: 'full'
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

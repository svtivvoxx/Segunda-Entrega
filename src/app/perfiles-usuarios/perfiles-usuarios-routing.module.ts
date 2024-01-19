import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PerfilesUsuariosPage } from './perfiles-usuarios.page';

const routes: Routes = [
  {
    path: '',
    component: PerfilesUsuariosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PerfilesUsuariosPageRoutingModule {}

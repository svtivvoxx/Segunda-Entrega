import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfirmarQrPage } from './confirmar-qr.page';

const routes: Routes = [
  {
    path: '',
    component: ConfirmarQrPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfirmarQrPageRoutingModule {}

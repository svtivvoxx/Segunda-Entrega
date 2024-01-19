import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfirmarQrPageRoutingModule } from './confirmar-qr-routing.module';

import { ConfirmarQrPage } from './confirmar-qr.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfirmarQrPageRoutingModule
  ],
  declarations: [ConfirmarQrPage]
})
export class ConfirmarQrPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerfilesUsuariosPageRoutingModule } from './perfiles-usuarios-routing.module';

import { PerfilesUsuariosPage } from './perfiles-usuarios.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerfilesUsuariosPageRoutingModule
  ],
  declarations: [PerfilesUsuariosPage]
})
export class PerfilesUsuariosPageModule {}

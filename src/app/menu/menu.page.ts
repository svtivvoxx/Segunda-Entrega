import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AnimationController, IonCard, MenuController } from '@ionic/angular';
import type { Animation } from '@ionic/angular';
import { Menu } from 'src/app/models/menu';
import { HelperService } from 'src/app/services/helper.service';
import { StorageService } from 'src/app/services/storage.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';



@Component({
  selector: './app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage {

  constructor(private router: Router,
              private helper:HelperService,
              private storage:StorageService,
              private menuCtrl: MenuController,
              private auth:AngularFireAuth) { }

  async goToHome() {
    var confirm = await this.helper.showConfirm("Cerrar sesion?", "Confirmar", "Cancelar");
    if(confirm == true){
      await this.auth.signOut();
      this.router.navigateByUrl('home');
    }
  }

  scan() {
  }

  view() {
  }

  ubicacion(){
    
  }

  menu(){
    this.menuCtrl.toggle();
  }

  closeMenu(){
    this.menuCtrl.close();
  }

  perfilesUsuarios(){
    
    this.router.navigateByUrl("perfiles-usuarios");
  }

  ionViewDidLeave(){
    this.menuCtrl.close();
  }
}

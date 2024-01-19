import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { AnimationController, Animation } from '@ionic/angular';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-visualizar',
  templateUrl: 'visualizar.page.html',
  styleUrls: ['visualizar.page.scss'],
})
export class VisualizarPage {

  asistenciaAlumno:any = [];
  email:string="";
  constructor(private router: Router,
    private animationCtrl: AnimationController,
    private auth: AngularFireAuth,
    private storage: StorageService) {}

  goToMenu() {
    this.router.navigate(['/menu']);
  }


  ngOnInit(){
    this.cargarEmail();
    this.verAsistencia();
  }

  animateButtons() {
    const customButtonElement = document.querySelector('.custom-button');

    if (customButtonElement && this.animationCtrl) {
      const fadeInAnimation: Animation = this.animationCtrl.create()
        .addElement(customButtonElement)
        .duration(1000)
        .fromTo('opacity', 0, 1);

      const fadeOutAnimation: Animation = this.animationCtrl.create()
        .addElement(customButtonElement)
        .duration(1000)
        .fromTo('opacity', 1, 0);

      fadeInAnimation.play().then(() => {
        fadeOutAnimation.play();
      });
    }
  }
  async verAsistencia(){
    this.asistenciaAlumno = (await this.storage.obtenerAsistencias()).filter((asis:any) => asis.alumnoRegistro === this.email);
  }
  async cargarEmail(){
    this.email = (await this.auth.currentUser)?.email!;
    console.log("Email", this.email);
  }
}

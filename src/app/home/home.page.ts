import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { HelperService } from 'src/app/services/helper.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  email: string = "";
  password: string = "";
  constructor(
    private router: Router,
    private auth: AngularFireAuth,
    private helper: HelperService,
    private storage: StorageService,
    private rutaActiva : ActivatedRoute,
  ) { 
  
    
  }

  

  ngOnInit() {
    this.helper.showToast("Bienvenido a RegistrApp v.1.1", 5000);
    
  }

  async login() {

    const loader = await this.helper.showLoader("Cargando");

    if (this.email === "" || this.password === "") {
      await loader.dismiss();
      await this.helper.showAlert('Por favor, completa los campos requeridos.', 'Error');
      return;
    }




    try {

      const req = await this.auth.signInWithEmailAndPassword(this.email, this.password);
      console.log("TOKEN", req.user?.getIdToken())
      this.storage.correoUsuario = this.email;
      await loader.dismiss();
      await this.router.navigateByUrl('menu');
    } catch (error:any) {
      if (error.code == 'auth/invalid-email') {
        await loader.dismiss();
        await this.helper.showAlert("El correo no es el correcto.","Error");
      }
      if (error.code == 'auth/weak-password') {
        await loader.dismiss();
        await this.helper.showAlert("El largo de la contraseña es muy corto.","Error");
      }
    }
  }
}

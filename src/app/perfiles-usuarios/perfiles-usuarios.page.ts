import { Component, OnInit } from '@angular/core';
import { StorageService } from '../services/storage.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-perfiles-usuarios',
  templateUrl: './perfiles-usuarios.page.html',
  styleUrls: ['./perfiles-usuarios.page.scss'],
})
export class PerfilesUsuariosPage implements OnInit {
  
  usuario: any[] = [];
  usuarioFiltros: any;

  constructor(private storage: StorageService,
              private auth:AngularFireAuth) { }

  async ngOnInit() {
    await this.cargarUsuario(); // Espera a que se carguen los datos
  }

  async cargarUsuario() {
    this.usuario = await this.storage.obtenerUsuarios(); // Espera a que se resuelva la promesa
    console.log("REGISTRO DE USUARIOS");
    var emailUserToken = await this.auth.currentUser;

    if (Array.isArray(this.usuario)) { // Verifica si es un array antes de aplicar filter
      this.usuarioFiltros = this.usuario.filter((e: { email: string; }) => e.email == emailUserToken?.email);
      console.log("Usuarios filtrados ", this.usuarioFiltros);
    }
  }
}

import { Component, Input, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ModalController } from '@ionic/angular';
import { StorageService } from '../services/storage.service';
import { HelperService } from '../services/helper.service';

@Component({
  selector: 'app-confirmar-qr',
  templateUrl: './confirmar-qr.page.html',
  styleUrls: ['./confirmar-qr.page.scss'],
})
export class ConfirmarQrPage implements OnInit {

  @Input() dataQr:any;
  dataAsis:any;
  email:string="";
  idAsis:string="";
  idAsisVerificar:string="";


  constructor(private modalController:ModalController,
    private auth: AngularFireAuth,
    private storage: StorageService,
    private helperService: HelperService) { }

  ngOnInit() {
    try {
      this.dataAsis = JSON.parse(this.dataQr);
      //console.log("Propiedades recibidas-->", this.dataQr)
      this.obtenerEmail();
    } catch (error) {
      this.helperService.showAlert("Error al leer el QR, por favor cancele la acción.","Error");

    }


  }

  close(){
    this.modalController.dismiss();

  }

  async regAsis(){
    this.idAsis = this.dataAsis.asignatura + this.dataAsis.fecha + this.dataAsis.hora+ this.dataAsis.seccion+this.email;

    try {
      var asistencia =
      [
        {
          primaryKey:this.idAsis,
          leccion: this.dataAsis.leccion,
          seccion:this.dataAsis.seccion,
          asignatura: this.dataAsis.asignatura,
          sala: this.dataAsis.sala,
          docente: this.dataAsis.docente,
          fecha: this.dataAsis.fecha,
          hora: this.dataAsis.hora,
          alumnoRegistro:this.email
        }
      ];

    this.idAsisVerificar = (await this.storage.obtenerAsistencias()).filter((asis:any) => asis.primaryKey == this.idAsis);

    if(this.idAsisVerificar.length > 0){
      this.helperService.showAlert("Ya se ha registrado esta asistencia","Error");
      this.close();
    }else{
      this.storage.guardarAsistencia(asistencia);
      this.helperService.showAlert("Asistencia registrada","Exito");
      this.close();
    }

    } catch (error) {
      this.helperService.showAlert("Error al registrar la asistencia","Error");
      this.close();
    }

  }

  async obtenerEmail(){
    this.email = (await this.auth.currentUser)?.email!;
  }
}

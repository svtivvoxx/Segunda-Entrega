import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BarcodeScanner } from 'capacitor-barcode-scanner';
import { HelperService } from '../services/helper.service';
import { ConfirmarQrPage } from '../confirmar-qr/confirmar-qr.page';

@Component({
  selector: 'app-camara',
  templateUrl: './camara.page.html',
  styleUrls: ['./camara.page.scss'],
})
export class CamaraPage implements OnInit {
  resultadoQr:any = '';

  constructor(private router:Router,
      private activatedRoute:ActivatedRoute,
              private helper:HelperService) { }

  async scan(){
    try {
    this.resultadoQr = (await BarcodeScanner.scan()).code;
    console.log("QR", this.resultadoQr);

      const parametros = {dataQr:this.resultadoQr};
      this.helper.showModal(ConfirmarQrPage, parametros);
    } catch (error) {
      this.helper.showAlert("Error al escanear","Error");
    }

  }

  /*{
    "nombre": "Juan",
    "edad": "15",
    "Direccion": "moneda"
  }*/

  ngOnInit() {
  }
  goToMenu() {
    this.router.navigate(['/menu']);
  }

}

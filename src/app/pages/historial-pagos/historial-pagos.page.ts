import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { AlertController, IonicSafeString } from '@ionic/angular';

@Component({
  selector: 'app-historial-pagos',
  templateUrl: './historial-pagos.page.html',
  styleUrls: ['./historial-pagos.page.scss'],
  standalone: false,
})
export class HistorialPagosPage implements OnInit {

  constructor(private sanitizer: DomSanitizer, private alertController:AlertController) { }

  ngOnInit() {
    
  }

  async irDetalleHistorialPago() {
    //let br = "<br>"
    //let brSafe = this.sanitizer.bypassSecurityTrustHtml(br);

    const alert = await this.alertController.create({
      header: 'Pago 1',
      subHeader: '15/05/2018',
      message: 'Este pago fue aprobado con un monto total de $' + '13000',
      buttons: ['Aceptar'],
    });

    await alert.present();
  }

  async irDetalleHistorialPagoDenegado() {
    let br = "<br>"
    let brSafe = this.sanitizer.bypassSecurityTrustHtml(br);
    const alert = await this.alertController.create({
      header: 'Pago 3',
      subHeader: '15/07/2018',
      message: 'Este pago fue denegado con un monto total de $' + '13000' + 
      new IonicSafeString('<br>')
      + 'Comentario: ' + 'El pago fue denegado por falta de fondos',
      buttons: ['Aceptar'],
    });

    await alert.present();
  }

}

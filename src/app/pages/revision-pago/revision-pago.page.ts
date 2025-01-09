import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { FormularioPago } from 'src/app/interfaces/formulario-pago';

@Component({
  selector: 'app-revision-pago',
  templateUrl: './revision-pago.page.html',
  styleUrls: ['./revision-pago.page.scss'],
  standalone: false,
})
export class RevisionPagoPage implements OnInit {

  constructor(private alertController: AlertController, private router: Router) { }

  message: string='';
  header: string='';
  FP:FormularioPago = {
    montoPagado: 0,
    metodoPago: '',
    comentarios: '',
  }

  ngOnInit() {
  }

  public alertButtons = [
    {
      text: 'Confirmar',
      role: 'confirm',
      handler: () => {
        this.router.navigate(['/lista-comunidad']);
      },
    },
  ];

  async presentAlert(header:string, message:string) {
    
    const alert = await this.alertController.create({
      header: this.header,
      message: this.message,
      buttons: this.alertButtons,
      backdropDismiss: false,
    });

    await alert.present();
  }

  onSubmit() {
    console.log(this.FP);
    console.log("Formulario OK");
    this.header = 'Solicitud aceptada con éxito'
    this.message = 'La solicitud ha sido aceptada con éxito'
    this.presentAlert(this.header, this.message);
  }

}

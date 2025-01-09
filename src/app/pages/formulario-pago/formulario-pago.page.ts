import { booleanAttribute, Component, OnInit } from '@angular/core';
import { FormularioPago } from '../../interfaces/formulario-pago';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulario-pago',
  templateUrl: './formulario-pago.page.html',
  styleUrls: ['./formulario-pago.page.scss'],
  standalone: false,
})
export class FormularioPagoPage implements OnInit {

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
        this.router.navigate(['/listado-servicio']);
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
    if(this.FP.metodoPago!=="" && this.FP.montoPagado>0){
      console.log("Formulario OK");
      this.header = 'Pago enviado con éxito'
      this.message = 'El formulario de pago será revisado por un administrador en la brevedad'
      this.presentAlert(this.header, this.message);
    }
    else{
      this.header = 'Error con el formulario'
      this.message = 'Uno de los campos fue rellenado de manera incorrecta, intentar nuevamente'
      this.presentAlert(this.header, this.message);
    }
  }

}

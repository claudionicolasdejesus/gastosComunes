import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { FormularioPago } from 'src/app/interfaces/formulario-pago';
import { SupabaseService } from 'src/app/supabase.service';
import { StorageService } from 'src/app/ionic-storage.service';

@Component({
  selector: 'app-revision-pago',
  templateUrl: './revision-pago.page.html',
  styleUrls: ['./revision-pago.page.scss'],
  standalone: false,
})
export class RevisionPagoPage implements OnInit {

  constructor(private alertController: AlertController, 
    private router: Router,
    private servicio: SupabaseService,
    private storage: StorageService) { }

  message: string='';
  header: string='';
  comentario: string = '';
  FP:FormularioPago = {
    usuario: '',
    montoPagado: 0,
    metodoPago: '',
    comentarios: '',
    fecha: new Date(),
    aprobado: false,
    revisado: false,
  }

  monto_pagado_fetch:number=0;
  metodo_pago_fetch:string='';
  comentario_fetch:string='';
  fecha_fetch: string='';

  id_pago:number=0;

  ngOnInit() {
    this.storage.get('residencia_id')?.then(residencia_id => {
      this.servicio.getPagoByLastPaymentRevision(residencia_id).then((data) => {
        console.log('ultimo pago: ', data);

        this.monto_pagado_fetch = data.montopagar;
        this.metodo_pago_fetch = data.metodo_pago;
        this.comentario_fetch = data.comentarios;
        this.fecha_fetch = String(data.fecha);
        this.id_pago = data.id_pago;
      });
    })
  }

  public alertButtons = [
    {
      text: 'Confirmar',
      role: 'confirm',
      handler: (alertData:any) => {
        console.log("comentarios: ");
        console.log(alertData.comentario);

        this.servicio.aprobarPago(this.FP.aprobado, this.FP.revisado, this.id_pago,
          alertData.comentario
        )
        this.router.navigate(['/listado-residencia-admin']);
      },
    },
  ];

  async presentAlert() {
    
    const alert = await this.alertController.create({
      header: this.header,
      message: this.message,
      buttons: [
        {
          text: 'Confirmar',
          role: 'confirm',
          handler: () => {
            this.router.navigate(['/listado-residencia-admin']);
          },
        },
      ],
      backdropDismiss: false,
    });

    await alert.present();
  }

  async presentAlertDennied() {
    
    const alert = await this.alertController.create({
      header: this.header,
      message: this.message,
      buttons: this.alertButtons,
      backdropDismiss: false,
      inputs: [
        {
          name: 'comentario',
          type: 'textarea',
          placeholder: 'Escriba acá...',
          attributes: {
            maxlength: 300,
          },
        },
      ],
    });

    await alert.present();
  }

  onSubmit() {

    const activeElement = document.activeElement as HTMLButtonElement;

    if (activeElement.tagName === 'ION-BUTTON') {
      const valueButton = activeElement.getAttribute('value'); // Obtén el valor del botón presionado
      console.log('Valor del botón presionado: ', valueButton);
      console.log('Formulario:', this.FP);
  
      if (valueButton === 'Aceptar') {
        this.FP.revisado = true;
        this.FP.aprobado = true;
        console.log('Formulario aceptado');
        console.log(this.FP.aprobado)

        this.servicio.aprobarPago(this.FP.aprobado, this.FP.aprobado, this.id_pago)

        // alerta
        this.header = 'Solicitud aceptada con éxito'
        this.message = 'Ahora se le redireccionará de vuelta a el listado de residencias.'
        this.presentAlert();
      } else if (valueButton === 'Denegar') {
        this.FP.revisado = true;
        console.log('Formulario denegado');

        // alerta
        this.header = 'Solicitud rechazada'
        this.message = 'Por favor escriba escriba las razones por las cuales la solicitud fue rechazada. (max 300 caracteres)'
        this.presentAlertDennied();
      }
    }
  }
}

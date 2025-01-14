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

  async presentAlert() {
    
    const alert = await this.alertController.create({
      header: this.header,
      message: this.message,
      buttons: this.alertButtons,
      backdropDismiss: false,
    });

    await alert.present();
  }

  public alertInputs = [
    {
      placeholder: 'Name',
    },
    {
      placeholder: 'Nickname (max 8 characters)',
      attributes: {
        maxlength: 8,
      },
    },
    {
      type: 'number',
      placeholder: 'Age',
      min: 1,
      max: 100,
    },
    {
      type: 'textarea',
      placeholder: 'A little about yourself',
    },
  ];

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

  onSubmit(event: Event) {

    event.preventDefault();

    const activeElement = document.activeElement as HTMLButtonElement;

    if (activeElement.tagName === 'ION-BUTTON') {
      const valueButton = activeElement.getAttribute('value'); // Obtén el valor del botón presionado
      console.log('Valor del botón presionado: ', valueButton);
      console.log('Formulario:', this.FP);
  
      if (valueButton === 'Aceptar') {
        this.FP.revisado = true
        console.log('Formulario aceptado');
        this.FP.aprobado = true
        console.log(this.FP.aprobado)
        this.header = 'Solicitud aceptada con éxito'
        this.message = 'Ahora se le redireccionará de vuelta a el listado de comunidades.'
        this.presentAlert();
      } else if (valueButton === 'Denegar') {
        this.FP.revisado = true
        console.log('Formulario denegado');
        this.header = 'Solicitud rechazada'
        this.message = 'Por favor escriba escriba las razones por las cuales la solicitud fue rechazada. (max 300 caracteres)'
        this.presentAlertDennied();
      }
    }
  }
}

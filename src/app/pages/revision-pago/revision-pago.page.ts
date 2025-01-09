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

  onSubmit(event: Event) {

    event.preventDefault();

    let valueButton:string = 'aceptar'

    const buttonClicked = event.target as HTMLElement; // Obtén el elemento HTML que disparó el evento
    const activeElement = document.activeElement as HTMLButtonElement;

    if (activeElement.tagName === 'ION-BUTTON') {
      const valueButton = activeElement.getAttribute('value'); // Obtén el valor del botón presionado
      console.log('Valor del botón presionado: ', valueButton);
      console.log('Formulario:', this.FP);
  
      if (valueButton === 'Aceptar') {
        console.log('Formulario aceptado');
        this.header = 'Solicitud aceptada con éxito'
        this.message = 'Ahora se le redireccionará de vuelta a el listado de comunidades.'
        this.presentAlert(
          this.header,
          this.message
        );
      } else if (valueButton === 'Denegar') {
        console.log('Formulario denegado');
        this.header = 'Solicitud rechazada'
        this.message = 'Por favor escriba escriba las razones por las cuales la solicitud fue rechazada.'
        this.presentAlert(
          this.header,
          this.message
        );
      }
    }
  }
}

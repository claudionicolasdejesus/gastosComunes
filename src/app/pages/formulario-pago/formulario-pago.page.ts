import { Component, OnInit } from '@angular/core';
import { FormularioPago } from '../../interfaces/formulario-pago';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { SupabaseService } from 'src/app/supabase.service';
import { StorageService } from 'src/app/ionic-storage.service';

@Component({
  selector: 'app-formulario-pago',
  templateUrl: './formulario-pago.page.html',
  styleUrls: ['./formulario-pago.page.scss'],
  standalone: false,
})
export class FormularioPagoPage implements OnInit {

  constructor(private alertController: AlertController, 
    private router: Router,
    private servicio:SupabaseService,
    private servicioAlmacenamiento:StorageService,
  ) { }

  message: string='';
  header: string='';
  fecha: Date = new Date(Date.now());

  FP:FormularioPago = {
    usuario: '',
    montoPagado: 0,
    metodoPago: '',
    comentarios: '',
    fecha: new Date(Date.now()),
  }

  ngOnInit() {
    console.log(this.FP + ' | ' + this.FP.metodoPago + ' | ' + 
      this.FP.montoPagado + ' | ' + this.FP.fecha);
  }

  public alertButtons = [
    {
      text: 'Confirmar',
      role: 'confirm',
      handler: () => {
        this.router.navigate(['/listado-residencia']);
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

  async presentAlertDenegado(header:string, message:string) {
    const alert = await this.alertController.create({
      header: this.header,
      message: this.message,
      buttons: [
        {
          text: 'Confirmar',
          role: 'confirm',
        },
      ],
    });

    await alert.present();
  }

  onSubmit() {
    console.log(this.FP)
    console.log(this.FP.metodoPago + ' | ' + 
      this.FP.montoPagado + ' | ' + this.FP.fecha);

    if(this.FP.metodoPago!=="" && this.FP.montoPagado>0){
      this.pago(this.FP.montoPagado, this.FP.metodoPago, 
        this.FP.comentarios);

      console.log("Formulario OK");
      this.header = 'Pago enviado con éxito'
      this.message = 'El formulario de pago será revisado por un administrador en la brevedad'
      this.presentAlert(this.header, this.message);
    }
    else{
      this.header = 'Error con el formulario'
      this.message = 'Uno de los campos fue rellenado de manera incorrecta, intentar nuevamente'
      this.presentAlertDenegado(this.header, this.message);
    }
  }

  pago(montoPagado:number, metodoPago:string, comentarios?:string){
    console.log(this.FP.fecha);
    this.FP.fecha = new Date(Date.now());
    console.log(this.FP.fecha);

    this.servicioAlmacenamiento.get('id_usuario')?.then(id_usuario => {
      console.log("id usuario primera carga promesa:")
      console.log(id_usuario)
      this.servicioAlmacenamiento.get('residencia_id')?.then(id_residencia => {
        console.log("id residencia carga segunda promesa: ")
        console.log(id_residencia)

        this.servicio.crearPago(montoPagado, metodoPago, id_usuario, id_residencia, 
          this.FP.fecha, comentarios)
      })
    })
  }
}

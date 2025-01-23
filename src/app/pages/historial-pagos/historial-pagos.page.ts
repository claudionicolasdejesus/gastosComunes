import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController} from '@ionic/angular';
import { StorageService } from 'src/app/ionic-storage.service';
import { SupabaseService } from 'src/app/supabase.service';

@Component({
  selector: 'app-historial-pagos',
  templateUrl: './historial-pagos.page.html',
  styleUrls: ['./historial-pagos.page.scss'],
  standalone: false,
})
export class HistorialPagosPage implements OnInit {

  pagos: any[] = [];

  constructor(private alertController:AlertController, private router:Router,
    private storage:StorageService, private service:SupabaseService) { }

  ngOnInit() {
    var resultado = this.storage.get('residencia_id')
    if (resultado !== undefined){
      resultado.then(id_usuario => {
        console.log(id_usuario);
        this.service.getPagosRevisadosByResidencia(id_usuario).then(pagos => {
          console.log(pagos);
          if (pagos !== null){
            for(let i=0; pagos.length>i; i++) {
              console.log(pagos[i])
              this.pagos.push(pagos[i])
            }
          }
        })
      })
    }
  }

  async irDetalleHistorialPago() {
    //let br = "<br>"
    //let brSafe = this.sanitizer.bypassSecurityTrustHtml(br);

    const alert = await this.alertController.create({
      header: 'Pago 1',
      subHeader: '15/05/2018',
      message: 'Este pago fue aprobado con un monto total de $' + '13000',
      buttons: [
        {
          text: 'Aceptar',
          role: 'confirm',
        },
      ],
    });

    await alert.present();
  }

  async irDetalleHistorialPagoDenegado() {
    //let br = "<br>"
    //let brSafe = this.sanitizer.bypassSecurityTrustHtml(br);
    const alert = await this.alertController.create({
      header: 'Pago 3',
      subHeader: '15/07/2018',
      message: 'Este pago fue denegado con un monto total de $' + '13000' + '\n'
      
      + 'Comentario: ' + 'El pago fue denegado por falta de fondos',
      buttons: [
        {
          text: 'Aceptar',
          role: 'confirm',
        },
      ],
    });

    await alert.present();
  }

}

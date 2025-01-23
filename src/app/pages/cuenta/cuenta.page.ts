import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { StorageService } from 'src/app/ionic-storage.service';
import { SupabaseService } from 'src/app/supabase.service';

@Component({
  selector: 'app-cuenta',
  templateUrl: './cuenta.page.html',
  styleUrls: ['./cuenta.page.scss'],
  standalone: false,
})
export class CuentaPage implements OnInit {

  nombre_usuario:string=''
  residencias: any[] = []

  constructor(private router:Router, 
    private servicio:SupabaseService,
  public alertController:AlertController,
  private storage:StorageService) { }

  ngOnInit() {
    var resultado = this.storage.get('usuario_id')
    if (resultado !== undefined){
      resultado.then(id_usuario => {
        console.log(id_usuario);
        this.servicio.getUsuarioByIdUsuario(id_usuario).then(usuarioData => {
          console.log(usuarioData);
          this.nombre_usuario = usuarioData.username;
        })
        this.servicio.getResidenciasByUsuario(id_usuario).then(residencias => {
          console.log(residencias);
          if (residencias !== null){
            for(let i=0; residencias.length>i; i++) {
              console.log(residencias[i])
              this.residencias.push(residencias[i])
            }
          }
        })
      })
    }
  }

  async agregarResidenciaAlerta() {
    const alert = await this.alertController.create({
      header: 'Ingresar residencia',
      message: 'Ingrese los datos de la residencia que posee',
      inputs: [
        {
          name: 'nro_residencia',
          type: 'number',
          placeholder: 'Ingrese el número de su residencia',
        },
        {
          name: 'piso',
          type: 'number',
          placeholder: 'Ingrese número si es departamento',
        },
      ],
      buttons: [
        {
          text: 'Confirmar',
          role: 'confirm',
          handler: (alertData) => {
            console.log('nro residencia:', alertData.nro_residencia + ' | tipo: ' + alertData.nro_residencia.type);
            console.log('piso:', alertData.piso + ' | tipo: ' + alertData.piso.type);

            if(alertData.nro_residencia == ''){
              console.log('datos incorrectos');
            } else {
              console.log('Datos correctos');
              this.servicio.getResidenciaByNroResidencia(Number(alertData.nro_residencia)).then(o=>{
                console.log("Residencia datos: ");
                console.log(o);
                let listaComprobante = this.residencias.find(o => o[0] == Number(alertData.nro_residencia));
                console.log("lista comprobante: ");
                console.log(listaComprobante);
                if (o !== undefined || listaComprobante !== undefined) {
                  this.alerta("Residencia existente", "La residencia ya existe, intentelo de vuelta");
                } else {
                    if (alertData.piso == ''){
                      this.residencias.push([Number(alertData.nro_residencia), 'Al día', false, 0]);
                    } else {
                      // se hace esta mierda por separado pq sino alertaData.piso te coloca un string vacío :)
                      this.residencias.push([Number(alertData.nro_residencia), 'Al día', true, Number(alertData.piso)]);
                    }
                }
              console.log(this.residencias);
              })
            }
          }
        },
      ],
    });

    if(this.residencias.length > 0){}
  
    await alert.present();
  }

  async alerta(header:string, message:string) {
    
    const alert = await this.alertController.create({
      header: header,
      message: message,
      buttons: [{
        text: 'Confirmar',
        role: 'confirm',
      }],
      backdropDismiss: false,
    });

    await alert.present();
  }

  eliminarResidenciaLista(nro_residencia:number) {
    for (let i=0; i<this.residencias.length; i++) {
      let nro_residencia_lista = this.residencias[i][0];
      if (nro_residencia_lista == nro_residencia){
        this.residencias.splice(i, 1);
        console.log(this.residencias);
      } else {
        null
      }
    }
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/user';
import { SupabaseService } from 'src/app/supabase.service';
import { AlertController, AlertInput } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
  standalone: false,
})
export class RegistroPage implements OnInit {

  residencias: [[number, string, boolean, number?]] = 
  [[0, '', false, 0]];

  mensaje:string='';

  message: string='';
  header: string='';
  comentario: string = '';

  usr:User = {
    username: '',
    password: ''
  }

  constructor(private router:Router, 
    private servicio:SupabaseService,
  public alertController:AlertController) { }

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
              if (alertData.piso == ''){
              this.residencias.push([Number(alertData.nro_residencia), 'prueba', true]);
              } else {
                // se hace esta mierda por separado pq sino te coloca un string vacío :)
                this.residencias.push([Number(alertData.nro_residencia), 'prueba', true, Number(alertData.piso)]);
              }
              console.log(this.residencias);
            }
          },
        },
      ],
    });

    if(this.residencias.length > 0){}
  
    await alert.present();
  }
  
  eliminarResidenciaLista(nro_residencia:number) {
    for (let i=0; i<this.residencias.length; i++) {
      let nro_residencia_lista = this.residencias[i][0];
      if (nro_residencia_lista == nro_residencia){
        this.residencias.splice(i, 1);
        console.log(this.residencias);
      } else {
        console.log('ERROR');
      }
    }
  }
  
  agregarResidencia() {
    
  }

  ngOnInit() {
    //console.log(this.residencias);
    this.residencias.pop();
    console.log(this.residencias);
    //this.residencias.push([2, 'prueba 2', true, 1])
    //this.residencias.push([2, 'prueba 2', true, 1])
    //console.log(this.residencias);
  }

  onSubmit(){

  }

}

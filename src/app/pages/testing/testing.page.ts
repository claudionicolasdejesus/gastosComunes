import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/ionic-storage.service';
import { SupabaseService } from 'src/app/supabase.service';

@Component({
  selector: 'app-testing',
  templateUrl: './testing.page.html',
  styleUrls: ['./testing.page.scss'],
  standalone: false,
})
export class TestingPage implements OnInit {

  constructor(private servicio:SupabaseService,
    private storage:StorageService
  ) { }

  listaIdPagos: number[]=[]

  ngOnInit() {

    let pagosEliminadoss: any[]=[]

    this.servicio.eliminarResidencia(1).then(data => {
      console.log("eliminar residencia")
      console.log(data)
      //console.log(data.nro_residencia)
    })
    this.servicio.getPagosByResidencia(1).then(data => {
      console.log("???")
      console.log(data)
      if (data) {
        for (let i=0; data.length>i; i++) {
          console.log(data[i])
          console.log(data[i].id_pago)
          this.listaIdPagos.push(data[i].id_pago)
        }

        console.log("LISTA ID PAGOS")
        console.log(this.listaIdPagos)
        this.servicio.eliminarPagos(this.listaIdPagos).then(data => {
          console.log("data eliminar pagos")
          console.log(data)

          if (data) {
            for (let i=0; data.length>i; i++) {
              pagosEliminadoss.push(data[i])
              console.log(data[i])
            }

            console.log("dentro de la promesa")
            console.log(pagosEliminadoss)
          }
        })
      }
    })
    

    console.log("pagos eliminados lista")
    console.log(pagosEliminadoss)
  }

}

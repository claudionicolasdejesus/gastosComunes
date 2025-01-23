import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/ionic-storage.service';
import { SupabaseService } from 'src/app/supabase.service';

@Component({
  selector: 'app-servicio-detalle',
  templateUrl: './servicio-detalle.page.html',
  styleUrls: ['./servicio-detalle.page.scss'],
  standalone: false,
})
export class ServicioDetallePage implements OnInit {

  nro_residencia:number=0;
  estado_residencia:string='';

  constructor(private router:Router,
      private service:SupabaseService,
      private storageService: StorageService) { }

  ngOnInit() {
    this.storageService.get('residencia_id')?.then(data => {
      console.log(data)
      this.nro_residencia = data
      this.service.getResidenciaByNroResidencia(this.nro_residencia).then(data2 => {
        console.log(data2)
        this.estado_residencia = data2.estado
      })
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/ionic-storage.service';
import { SupabaseService } from 'src/app/supabase.service';

@Component({
  selector: 'app-listado-residencia-admin',
  templateUrl: './listado-residencia-admin.page.html',
  styleUrls: ['./listado-residencia-admin.page.scss'],
  standalone: false,
})
export class ListadoResidenciaAdminPage implements OnInit {

  residencias: any[] = [];
  
  constructor(private router:Router, 
    private servicio:SupabaseService,
    private storageService:StorageService
  ) { }

  ngOnInit() {
    this.storageService.remove('residencia_id')

    this.servicio.getAllResidencias().then(data => {
      console.log(data)
      if (data){
        for(let i = 0; data.length > i; i++) {
          console.log(data[i])
          this.residencias.push(data[i])
        }
      }
    })
  }

  seleccionarResidencia(nro_residencia:number) {
    console.log("numero residencia seleccionado: " + nro_residencia)
    this.storageService.set('residencia_id', nro_residencia)
    this.storageService.get('residencia_id')?.then(data => {
      console.log("numero residencia escogida leida después del guardado: ")
      console.log(data)

      this.router.navigate(['/servicio-detalle-admin']);
    });
  }

}

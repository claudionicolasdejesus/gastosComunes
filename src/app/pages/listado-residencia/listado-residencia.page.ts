import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/ionic-storage.service';
import { SupabaseService } from 'src/app/supabase.service';

@Component({
  selector: 'app-listado-residencia',
  templateUrl: './listado-residencia.page.html',
  styleUrls: ['./listado-residencia.page.scss'],
  standalone: false,
})
export class ListadoResidenciaPage implements OnInit {

  residencias: any[] = [];

  constructor(private router:Router,
    private service:SupabaseService,
    private storageService: StorageService
  ) { }

  ngOnInit() {
    this.storageService.remove('residencia_id')

    var resultado = this.storageService.get('id_usuario')
    if (resultado !== undefined){
      resultado.then(data => { console.log("LUGAR BUENO 2: " + data) 
        this.service.getResidenciasByUsuario(data).then((data2) => {
          console.log(data2);
          if (data2 !== null){
            for(let i=0; data2.length>i; i++) {
              console.log(data2[i])
              this.residencias.push(data2[i])
            }
          }
        });
      })
    }
  }

  seleccionarResidencia(nro_residencia:number) {
    console.log("numero residencia seleccionado: " + nro_residencia)
    this.storageService.set('residencia_id', nro_residencia)
    this.storageService.get('residencia_id')?.then(data => {
      console.log("numero residencia escogida leida después del guardado: ")
      console.log(data)

      this.router.navigate(['/servicio-detalle']);
    });
  }

}

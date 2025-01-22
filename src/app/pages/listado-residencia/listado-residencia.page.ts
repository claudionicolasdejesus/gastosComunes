import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
    private service:SupabaseService
  ) { }

  ngOnInit() {
    this.service.getResidenciasByUsuario(1).then((data) => {
      console.log(data);
      if (data !== null){
        for(let i=0; data.length>i; i++) {
          console.log(data[i])
          this.residencias.push(data[i])
        }
      }
      console.log('residencias lista: ')
      console.log(this.residencias[0].nro_residencia)
    });
  }

}

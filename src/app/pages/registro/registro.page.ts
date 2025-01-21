import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/user';
import { SupabaseService } from 'src/app/supabase.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
  standalone: false,
})
export class RegistroPage implements OnInit {

  residencias: [[number, string, boolean, number, number?]] = 
  [[0, '', false, 0]];

  mensaje:string='';
  usr:User = {
    username: '',
    password: ''
  }

  constructor(private router:Router, 
    private servicio:SupabaseService) { }

  agregarResidencia() {
    
  }

  ngOnInit() {
    console.log(this.residencias);
    this.residencias.pop();
    console.log(this.residencias);
    this.residencias.push([2, 'prueba 2', true, 1])
    this.residencias.push([2, 'prueba 2', true, 1, 3])
    console.log(this.residencias);
  }

  onSubmit(){

  }

}

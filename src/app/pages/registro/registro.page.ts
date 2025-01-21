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
  }

  onSubmit(){

  }

}

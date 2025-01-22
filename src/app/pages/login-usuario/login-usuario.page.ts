import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { Router } from '@angular/router';
import { SupabaseService } from 'src/app/supabase.service';

@Component({
  selector: 'app-login-usuario',
  templateUrl: './login-usuario.page.html',
  styleUrls: ['./login-usuario.page.scss'],
  standalone: false,
})
export class LoginUsuarioPage implements OnInit {

  mensaje:string='';
  usr:User = {
    username: '',
    password: ''
  }

  constructor(private router:Router, 
    private servicio:SupabaseService) { }

  ngOnInit() {
  }

  onSubmit(){
    console.log(this.usr);
    this.servicio.signIn(this.usr.username, this.usr.password);
    /* if(this.usr.username=="" && this.usr.password==""){
      console.log("Acceso ok");
        this.router.navigate(['/listado-residencia'])
    }
    else{
      this.mensaje='Acceso Denegado';
    } */
  }
  
}

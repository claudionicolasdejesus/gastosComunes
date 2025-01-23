import { Component, OnInit } from '@angular/core';
import { Admin } from 'src/app/interfaces/admin';
import { Router } from '@angular/router';
import { SupabaseService } from 'src/app/supabase.service';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.page.html',
  styleUrls: ['./login-admin.page.scss'],
  standalone: false,
})
export class LoginAdminPage implements OnInit {

  mensaje:string='';
  admn:Admin = {
    username: '',
    password: ''
  }

  constructor(private router:Router, private servicio:SupabaseService,) { }

  ngOnInit() {
  }

  onSubmit(){
    console.log(this.admn);
    this.servicio.signInAdmin(this.admn.username, this.admn.password).then((data) => {
      console.log(data);

      if(data !== undefined){
        console.log(data.id_admin);
        console.log("Acceso ok");
        this.admn.username = '';
        this.admn.password = '';
        
        this.router.navigate(['/listado-residencia-admin']);
      } else {
        console.log("credenciales incorrectas")
      } 
    });

    /* console.log(this.admn);
    if(this.admn.username=="" && this.admn.password==""){
      console.log("Acceso ok");
        this.router.navigate(['/lista-comunidad'])
    }
    else{
      this.mensaje='Acceso Denegado';
    } */
  }

}

import { Component, OnInit } from '@angular/core';
import { Admin } from 'src/app/interfaces/admin';
import { Router } from '@angular/router';

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

  constructor(private router:Router) { }

  ngOnInit() {
  }

  onSubmit(){
    console.log(this.admn);
    if(this.admn.username=="" && this.admn.password==""){
      console.log("Acceso ok");
        this.router.navigate(['/lista-comunidad'])
    }
    else{
      this.mensaje='Acceso Denegado';
    }
  }

}

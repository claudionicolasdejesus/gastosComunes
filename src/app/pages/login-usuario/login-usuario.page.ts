import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/user';

@Component({
  selector: 'app-login-usuario',
  templateUrl: './login-usuario.page.html',
  styleUrls: ['./login-usuario.page.scss'],
  standalone: false,
})
export class LoginUsuarioPage implements OnInit {

  usr:User = {
    username: '',
    password: ''
  }

  constructor() { }

  ngOnInit() {
  }

  onSubmit(){
    console.log('Formulario enviado');
  }
}

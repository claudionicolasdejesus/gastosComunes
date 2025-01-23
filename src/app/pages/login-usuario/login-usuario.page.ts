import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { Router } from '@angular/router';
import { SupabaseService } from 'src/app/supabase.service';
import { StorageService } from 'src/app/ionic-storage.service';
import { Storage } from '@ionic/storage';

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
    private servicio:SupabaseService,
    private storageService: StorageService) { }

  async ngOnInit() {
    this.storageService.clear()
  }

  onSubmit(){
    console.log(this.usr);
    this.servicio.signIn(this.usr.username, this.usr.password).then((data) => {
      console.log(data);

      if(data !== undefined){
        console.log(data.id_usuario);
        this.storageService.set('id_usuario', data.id_usuario)

        var resultado = this.storageService.get('id_usuario')
        if (resultado !== undefined){
          this.storageService.clear()
          resultado.then(data => { console.log("LUGAR BUENO 1: " + data) })
        }

        console.log("Acceso ok");
        this.usr.username = '';
        this.usr.password = '';
        
        this.router.navigate(['/listado-residencia']);
      } else {
        console.log("credenciales incorrectas")
      } 
    });
  }
  
}

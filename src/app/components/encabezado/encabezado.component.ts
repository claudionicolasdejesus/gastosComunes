import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.scss'],
  standalone: false,
})
export class EncabezadoComponent  implements OnInit {

  constructor(private router:Router, public sanitizer: DomSanitizer) { }

  @Input() titulo: string=''
  ruta: string = ''

  ngOnInit() {
    console.log(this.router.url)

    this.ruta = this.router.url
  }

  htmlBackButton: string = `<ion-back-button defaultHref="/home" text="Volver" color="light"></ion-back-button>`

}

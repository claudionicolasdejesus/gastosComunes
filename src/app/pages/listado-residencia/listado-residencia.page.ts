import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listado-residencia',
  templateUrl: './listado-residencia.page.html',
  styleUrls: ['./listado-residencia.page.scss'],
  standalone: false,
})
export class ListadoResidenciaPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

}

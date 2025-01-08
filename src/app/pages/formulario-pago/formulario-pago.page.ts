import { Component, OnInit } from '@angular/core';
import { FormularioPago } from '../../interfaces/formulario-pago';

@Component({
  selector: 'app-formulario-pago',
  templateUrl: './formulario-pago.page.html',
  styleUrls: ['./formulario-pago.page.scss'],
  standalone: false,
})
export class FormularioPagoPage implements OnInit {

  constructor() { }

  FP:FormularioPago = {
    montoPagado: 0,
    metodoPago: '',
    comentarios: '',
  }

  ngOnInit() {
  }

  onSubmit() {

  }

}

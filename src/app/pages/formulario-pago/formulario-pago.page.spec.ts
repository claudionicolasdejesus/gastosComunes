import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormularioPagoPage } from './formulario-pago.page';

describe('FormularioPagoPage', () => {
  let component: FormularioPagoPage;
  let fixture: ComponentFixture<FormularioPagoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioPagoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

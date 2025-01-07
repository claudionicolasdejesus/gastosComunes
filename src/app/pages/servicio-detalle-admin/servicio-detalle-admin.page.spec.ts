import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ServicioDetalleAdminPage } from './servicio-detalle-admin.page';

describe('ServicioDetalleAdminPage', () => {
  let component: ServicioDetalleAdminPage;
  let fixture: ComponentFixture<ServicioDetalleAdminPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicioDetalleAdminPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

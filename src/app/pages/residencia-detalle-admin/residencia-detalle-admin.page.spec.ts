import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ResidenciaDetalleAdminPage } from './residencia-detalle-admin.page';

describe('ResidenciaDetalleAdminPage', () => {
  let component: ResidenciaDetalleAdminPage;
  let fixture: ComponentFixture<ResidenciaDetalleAdminPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ResidenciaDetalleAdminPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

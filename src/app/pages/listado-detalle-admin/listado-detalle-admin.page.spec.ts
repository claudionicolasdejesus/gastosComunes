import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListadoDetalleAdminPage } from './listado-detalle-admin.page';

describe('ListadoDetalleAdminPage', () => {
  let component: ListadoDetalleAdminPage;
  let fixture: ComponentFixture<ListadoDetalleAdminPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoDetalleAdminPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

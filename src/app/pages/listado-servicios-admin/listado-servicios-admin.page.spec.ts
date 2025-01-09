import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListadoServiciosAdminPage } from './listado-servicios-admin.page';

describe('ListadoServiciosAdminPage', () => {
  let component: ListadoServiciosAdminPage;
  let fixture: ComponentFixture<ListadoServiciosAdminPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoServiciosAdminPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListadoResidenciaAdminPage } from './listado-residencia-admin.page';

describe('ListadoResidenciaAdminPage', () => {
  let component: ListadoResidenciaAdminPage;
  let fixture: ComponentFixture<ListadoResidenciaAdminPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoResidenciaAdminPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

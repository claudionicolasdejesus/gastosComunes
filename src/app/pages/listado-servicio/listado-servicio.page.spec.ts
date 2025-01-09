import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListadoServicioPage } from './listado-servicio.page';

describe('ListadoServicioPage', () => {
  let component: ListadoServicioPage;
  let fixture: ComponentFixture<ListadoServicioPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoServicioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

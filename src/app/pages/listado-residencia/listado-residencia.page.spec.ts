import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListadoResidenciaPage } from './listado-residencia.page';

describe('ListadoResidenciaPage', () => {
  let component: ListadoResidenciaPage;
  let fixture: ComponentFixture<ListadoResidenciaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoResidenciaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListaComunidadPage } from './lista-comunidad.page';

describe('ListaComunidadPage', () => {
  let component: ListaComunidadPage;
  let fixture: ComponentFixture<ListaComunidadPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaComunidadPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ResidenciaDetallePage } from './residencia-detalle.page';

describe('ResidenciaDetallePage', () => {
  let component: ResidenciaDetallePage;
  let fixture: ComponentFixture<ResidenciaDetallePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ResidenciaDetallePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

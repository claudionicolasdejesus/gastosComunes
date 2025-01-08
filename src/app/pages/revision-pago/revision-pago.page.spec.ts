import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RevisionPagoPage } from './revision-pago.page';

describe('RevisionPagoPage', () => {
  let component: RevisionPagoPage;
  let fixture: ComponentFixture<RevisionPagoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RevisionPagoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

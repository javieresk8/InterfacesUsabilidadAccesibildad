import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaEntradaComponent } from './ruta-entrada.component';

describe('RutaEntradaComponent', () => {
  let component: RutaEntradaComponent;
  let fixture: ComponentFixture<RutaEntradaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RutaEntradaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RutaEntradaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

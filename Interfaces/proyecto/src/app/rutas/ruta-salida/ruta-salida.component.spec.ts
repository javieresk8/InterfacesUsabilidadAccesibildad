import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaSalidaComponent } from './ruta-salida.component';

describe('RutaSalidaComponent', () => {
  let component: RutaSalidaComponent;
  let fixture: ComponentFixture<RutaSalidaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RutaSalidaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RutaSalidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

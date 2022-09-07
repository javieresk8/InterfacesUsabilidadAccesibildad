import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreadcrumbSalidaComponent } from './breadcrumb-salida.component';

describe('BreadcrumbSalidaComponent', () => {
  let component: BreadcrumbSalidaComponent;
  let fixture: ComponentFixture<BreadcrumbSalidaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BreadcrumbSalidaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BreadcrumbSalidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

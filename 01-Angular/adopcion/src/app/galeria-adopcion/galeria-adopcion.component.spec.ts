import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GaleriaAdopcionComponent } from './galeria-adopcion.component';

describe('GaleriaAdopcionComponent', () => {
  let component: GaleriaAdopcionComponent;
  let fixture: ComponentFixture<GaleriaAdopcionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GaleriaAdopcionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GaleriaAdopcionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

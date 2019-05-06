import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PasosAdopcionComponent } from './pasos-adopcion.component';

describe('PasosAdopcionComponent', () => {
  let component: PasosAdopcionComponent;
  let fixture: ComponentFixture<PasosAdopcionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PasosAdopcionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PasosAdopcionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

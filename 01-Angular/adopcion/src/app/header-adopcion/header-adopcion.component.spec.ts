import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderAdopcionComponent } from './header-adopcion.component';

describe('HeaderAdopcionComponent', () => {
  let component: HeaderAdopcionComponent;
  let fixture: ComponentFixture<HeaderAdopcionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderAdopcionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderAdopcionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

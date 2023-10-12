import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroAsignarComponent } from './registro-asignar.component';

describe('RegistroAsignarComponent', () => {
  let component: RegistroAsignarComponent;
  let fixture: ComponentFixture<RegistroAsignarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistroAsignarComponent]
    });
    fixture = TestBed.createComponent(RegistroAsignarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

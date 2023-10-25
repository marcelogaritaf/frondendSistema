import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcompiladoComponent } from './addcompilado.component';

describe('AddcompiladoComponent', () => {
  let component: AddcompiladoComponent;
  let fixture: ComponentFixture<AddcompiladoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddcompiladoComponent]
    });
    fixture = TestBed.createComponent(AddcompiladoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

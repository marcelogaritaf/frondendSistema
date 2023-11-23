import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateDesignadasComponent } from './update-designadas.component';

describe('UpdateDesignadasComponent', () => {
  let component: UpdateDesignadasComponent;
  let fixture: ComponentFixture<UpdateDesignadasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateDesignadasComponent]
    });
    fixture = TestBed.createComponent(UpdateDesignadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

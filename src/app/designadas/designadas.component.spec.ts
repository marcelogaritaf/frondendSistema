import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignadasComponent } from './designadas.component';

describe('DesignadasComponent', () => {
  let component: DesignadasComponent;
  let fixture: ComponentFixture<DesignadasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DesignadasComponent]
    });
    fixture = TestBed.createComponent(DesignadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

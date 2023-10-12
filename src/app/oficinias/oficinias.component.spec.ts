import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OficiniasComponent } from './oficinias.component';

describe('OficiniasComponent', () => {
  let component: OficiniasComponent;
  let fixture: ComponentFixture<OficiniasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OficiniasComponent]
    });
    fixture = TestBed.createComponent(OficiniasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

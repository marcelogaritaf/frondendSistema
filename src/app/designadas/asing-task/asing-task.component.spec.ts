import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsingTaskComponent } from './asing-task.component';

describe('AsingTaskComponent', () => {
  let component: AsingTaskComponent;
  let fixture: ComponentFixture<AsingTaskComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AsingTaskComponent]
    });
    fixture = TestBed.createComponent(AsingTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

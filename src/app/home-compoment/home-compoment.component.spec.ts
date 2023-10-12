import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCompomentComponent } from './home-compoment.component';

describe('HomeCompomentComponent', () => {
  let component: HomeCompomentComponent;
  let fixture: ComponentFixture<HomeCompomentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeCompomentComponent]
    });
    fixture = TestBed.createComponent(HomeCompomentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

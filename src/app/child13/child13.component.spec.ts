import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Child13Component } from './child13.component';

describe('Child13Component', () => {
  let component: Child13Component;
  let fixture: ComponentFixture<Child13Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Child13Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Child13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

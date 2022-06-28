import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Detals1Component } from './detals1.component';

describe('Detals1Component', () => {
  let component: Detals1Component;
  let fixture: ComponentFixture<Detals1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Detals1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Detals1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

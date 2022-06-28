import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Productfilter1Component } from './productfilter1.component';

describe('Productfilter1Component', () => {
  let component: Productfilter1Component;
  let fixture: ComponentFixture<Productfilter1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Productfilter1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Productfilter1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

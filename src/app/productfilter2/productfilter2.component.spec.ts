import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Productfilter2Component } from './productfilter2.component';

describe('Productfilter2Component', () => {
  let component: Productfilter2Component;
  let fixture: ComponentFixture<Productfilter2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Productfilter2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Productfilter2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

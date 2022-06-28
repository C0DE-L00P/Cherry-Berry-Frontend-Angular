import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Productfilter3Component } from './productfilter3.component';

describe('Productfilter3Component', () => {
  let component: Productfilter3Component;
  let fixture: ComponentFixture<Productfilter3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Productfilter3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Productfilter3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

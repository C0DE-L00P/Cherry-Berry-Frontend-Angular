import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainLogComponent } from './main-log.component';

describe('MainLogComponent', () => {
  let component: MainLogComponent;
  let fixture: ComponentFixture<MainLogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainLogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

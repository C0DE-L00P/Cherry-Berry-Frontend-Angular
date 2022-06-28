import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogOutSiteComponent } from './log-out-site.component';

describe('LogOutSiteComponent', () => {
  let component: LogOutSiteComponent;
  let fixture: ComponentFixture<LogOutSiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogOutSiteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogOutSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

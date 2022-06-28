import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentInsiteComponent } from './payment-insite.component';

describe('PaymentInsiteComponent', () => {
  let component: PaymentInsiteComponent;
  let fixture: ComponentFixture<PaymentInsiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentInsiteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaymentInsiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

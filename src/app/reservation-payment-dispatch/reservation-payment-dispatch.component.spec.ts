import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationPaymentDispatchComponent } from './reservation-payment-dispatch.component';

describe('ReservationPaymentDispatchComponent', () => {
  let component: ReservationPaymentDispatchComponent;
  let fixture: ComponentFixture<ReservationPaymentDispatchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReservationPaymentDispatchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservationPaymentDispatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

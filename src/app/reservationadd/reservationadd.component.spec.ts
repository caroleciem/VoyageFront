import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationaddComponent } from './reservationadd.component';

describe('ReservationaddComponent', () => {
  let component: ReservationaddComponent;
  let fixture: ComponentFixture<ReservationaddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReservationaddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservationaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

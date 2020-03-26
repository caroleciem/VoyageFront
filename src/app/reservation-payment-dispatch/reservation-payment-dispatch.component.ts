import { Component, OnInit } from '@angular/core';
import { ReservationService } from '../reservation.service';

@Component({
  selector: 'app-reservation-payment-dispatch',
  templateUrl: './reservation-payment-dispatch.component.html',
  styleUrls: ['./reservation-payment-dispatch.component.css']
})
export class ReservationPaymentDispatchComponent implements OnInit {
  Reservation;
  listOfPayers = [{name: 'Carole', amount: '0', hasPaid: 'true'},
   {name: 'Philippe', amount: '0', hasPaid: 'true'},
   {name: 'Pierre', amount: '0', hasPaid: 'false'}]; // TODO = get list of people affected to the reservation
  remainingAmount: number;

  constructor(
    private reservationService: ReservationService,
  ) { }

  ngOnInit() {
   this.Reservation = this.reservationService.reservationSelected;
  }

}

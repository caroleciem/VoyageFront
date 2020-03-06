import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reservation-payment-dispatch',
  templateUrl: './reservation-payment-dispatch.component.html',
  styleUrls: ['./reservation-payment-dispatch.component.css']
})
export class ReservationPaymentDispatchComponent implements OnInit {
  idReservation = 123456; // TODO = get Reservation iD
  totalAmount = 499; // TODO = get Reservation amount
  listOfPayers = [{name: 'Carole', amount: '0', hasPaid: 'true'},
   {name: 'Philippe', amount: '0', hasPaid: 'true'},
   {name: 'Pierre', amount: '0', hasPaid: 'false'}]; // TODO = get list of people affected to the reservation
  remainingAmount: number;

  constructor() { }

  ngOnInit() {
  }

}

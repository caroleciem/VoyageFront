import { Component, OnInit } from '@angular/core';
import { ReservationService } from '../reservation.service';
import { PersonService } from '../person.service';

@Component({
  selector: 'app-reservation-payment-dispatch',
  templateUrl: './reservation-payment-dispatch.component.html',
  styleUrls: ['./reservation-payment-dispatch.component.css']
})
export class ReservationPaymentDispatchComponent implements OnInit {
  Reservation;
  listOfPayers;
  remainingAmount: number;

  constructor(
    private reservationService: ReservationService,
    private personService : PersonService,
  ) { }

  ngOnInit() {
   this.Reservation = this.reservationService.reservationToUpdate;
   this.personService.selectAllPayers(this.reservationService.reservationToUpdate.groupM.id).subscribe(dataList => this.listOfPayers = dataList);
  }


}

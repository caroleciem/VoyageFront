import { Component, OnInit, Input } from '@angular/core';
import { ReservationService } from '../reservation.service';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {

  reservationList;

  constructor(
    private reservationService: ReservationService
    ) {
  ({

    });
  }


  ngOnInit() {
    this.reservationList = this.reservationService.getReservationList();
  }

  transfertReservation(reservation){
    this.reservationService.reservationSelected = reservation;
  }

}

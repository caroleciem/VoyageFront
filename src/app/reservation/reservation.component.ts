import { Component, OnInit, Input } from '@angular/core';
import { ReservationService } from '../reservation.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {

  reservationList;

  constructor(
    private reservationService: ReservationService,
    private formBuilder: FormBuilder) {
   /* this.selectDestForm = this.formBuilder.group*/({

    });
  }


  ngOnInit() {
    this.reservationList = this.reservationService.getReservationList();
  }

  transfertReservation(reservation){
    console.log(reservation.id);
    this.reservationService.reservationSelected = reservation;
  }

}

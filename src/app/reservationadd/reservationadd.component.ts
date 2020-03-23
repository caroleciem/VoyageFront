import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ReservationService } from '../reservation.service';

import { Reservation } from '../interfaceReservation';
import { Trip } from '../trip';
import { DestinationService } from '../destination.service';

//import { Reservation } from '../reservation';

@Component({
  selector: 'app-reservationadd',
  templateUrl: './reservationadd.component.html',
  styleUrls: ['./reservationadd.component.css']
})

export class ReservationaddComponent implements OnInit {
  trip: Trip;

  @Input() reservation;


  reservationForm = this.formBuilder.group({
    // id: '', not usefull in a Form
    bedRoomNumber: '',
    globalPrice: '',
    date: '',
    pensionType: '',
    paymentSet: []
  })



  constructor(
    private formBuilder: FormBuilder,
    private reservationService: ReservationService,
    private destinationService: DestinationService) { }


  ngOnInit() {
    this.trip = this.destinationService.trip;
  }


  onEditReservation(ReservationRecord) {
  this.reservationService.createReservation(ReservationRecord).subscribe(savedReservationRecord => console.log(savedReservationRecord));
  console.log('a venir');
  console.log(ReservationRecord);

  }



}

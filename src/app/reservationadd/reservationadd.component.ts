import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
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
  priceGlob;
  reservationCreation: Reservation;
  pension;




  @Input() reservation;


  reservationForm = this.formBuilder.group({
    // id: '', not usefull in a Form
    bedRoomNumber: ['', Validators.required],
    date: ['', Validators.required],
    pensionType: ['', Validators.required]
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
  simuler(reservation) {
    if (reservation.bedRoomNumber !== 0) {

      this.priceGlob = reservation.bedRoomNumber * this.trip.pricePerPers;
      switch (reservation.pensionType) {
        case 'halfPension':
          this.priceGlob *= 1.5;
          break;
        case 'completePension':
          this.priceGlob *= 2;
          break;
        case 'allInclusive':
          this.priceGlob *= 2.5;
          break;
      }
    }
  }

  onClick(reservation){
    this.priceGlob = reservation.bedRoomNumber * this.trip.pricePerPers;
    switch (reservation.pensionType) {
      case 'halfPension':
        this.pension = 'HALF_PENSION';
        this.priceGlob *= 1.5;
        break;
      case 'completePension':
        this.pension = 'COMPLETE_PENSION';
        this.priceGlob *= 2;
        break;
      case 'allInclusive':
        this.pension = 'ALL_INCLUSIVE';
        this.priceGlob *= 2.5;
        break;
        case 'breakfast':
        this.pension = 'BREAKFAST';
        break;
    }
    this.reservationCreation ={

      bedRoomNumber: reservation.bedRoomNumber ,
      globalPrice: this.priceGlob,
      date : reservation.date,
      pensionType: this.pension,
      trip: this.trip };

    console.log("Reservation Creation:" + this.reservationCreation.pensionType);
    this.reservationService.createReservation(this.reservationCreation)
    .subscribe(savedReservation => console.log("La reservation a sauvegarder: " + savedReservation));
  }

}

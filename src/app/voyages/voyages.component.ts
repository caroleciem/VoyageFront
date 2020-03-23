import { Component, OnInit, Input } from '@angular/core';
import { DestinationService } from '../destination.service';
import { Trip } from '../trip';

@Component({
  selector: 'app-voyages',
  templateUrl: './voyages.component.html',
  styleUrls: ['./voyages.component.css']
})
export class VoyagesComponent implements OnInit {
  @Input() destination;
  @Input() trips;
  tripList;
  trip: Trip;

  constructor(private destinationService: DestinationService) { }

  ngOnInit() {
    this.tripList=this.destination.trips;

  }

  transferTrip(trip: Trip) {
    console.log(trip.descriptiveRestauration);
    this.destinationService.trip = trip;
    }
}

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-voyages',
  templateUrl: './voyages.component.html',
  styleUrls: ['./voyages.component.css']
})
export class VoyagesComponent implements OnInit {
  @Input() destination;
  @Input() trips;
  tripList;
  
  

  constructor() { }

  ngOnInit() {
    this.tripList=this.destination.trips;
    console.log(this.tripList)
    console.log(this.destination);
  }

}

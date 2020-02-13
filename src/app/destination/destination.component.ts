import { Component, OnInit } from '@angular/core';
import {DestinationService} from '../destination.service';

@Component({
  selector: 'app-destination',
  templateUrl: './destination.component.html',
  styleUrls: ['./destination.component.css']
})
export class DestinationComponent implements OnInit {
  destinationsList;

  constructor(private destinationService: DestinationService) { }

  ngOnInit() {
   this.destinationsList=  this.destinationService.getDestinationList();
  }

}

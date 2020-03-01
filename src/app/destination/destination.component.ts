import { Component, OnInit } from '@angular/core';
import {DestinationService} from '../destination.service';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-destination',
  templateUrl: './destination.component.html',
  styleUrls: ['./destination.component.css']
})
export class DestinationComponent implements OnInit {
  destinationsList;
  destinationsListSelect;
  selectDestForm;

  constructor(private destinationService: DestinationService,  private formBuilder: FormBuilder) {
    this.selectDestForm = this.formBuilder.group({
      country: ''

  });
  }
  ngOnInit() {
   this.destinationsList=  this.destinationService.getDestinationList();
   this.destinationsListSelect=this.destinationService.getDestinationList();
  }
  onSubmit(selectDest) {
    if ((selectDest.country == "") && (selectDest.duree == "")) {
      this.destinationsListSelect=this.destinationService.getDestinationList();
    }else{
      this.destinationsListSelect=this.destinationService.getDestinationSelect(selectDest.country);
    }
  }

}

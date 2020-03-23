import { Component, OnInit } from '@angular/core';
import {DestinationService} from '../destination.service';
import {FormBuilder} from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-destination',
  templateUrl: './destination.component.html',
  styleUrls: ['./destination.component.css']
})
export class DestinationComponent implements OnInit {
  destinationsList;
  destinationsListSelect;
  countryList;
  selectDestForm;

  constructor(private destinationService: DestinationService,  private formBuilder: FormBuilder) {
    this.selectDestForm = this.formBuilder.group({
      country: ''

  });
  }
  ngOnInit() {
    this.destinationsList = this.destinationService.getDestinationList().pipe(
      map((backEvents : any)=> backEvents.content)
    );

   this.destinationsListSelect=this.destinationService.getDestinationList().pipe(
      map((backEvents : any)=> backEvents.content)
   );
   this.countryList= this.destinationService.getCountryList();
  }
  onSubmit(selectDest) {
      if ((selectDest.country == "") || (selectDest.country == "---")) {
      this.destinationsListSelect=this.destinationService.getDestinationList().pipe(
        map((backEvents : any)=> backEvents.content)
        );
    }else{
      this.destinationsListSelect=this.destinationService.getDestinationSelect(selectDest.country);
    }
  }
}

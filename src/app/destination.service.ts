import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import { Trip } from './trip';

@Injectable({
  providedIn: 'root'
})
export class DestinationService {
  trip: Trip;

  constructor(private httpClient: HttpClient) { }
  getDestinationList(){
    return this.httpClient.get('http://localhost:8080/api')

  }
  getCountryList(){
    return this.httpClient.get('http://localhost:8080/api/country')

  }
  getDestinationSelect(country){
    let params = new HttpParams();
      params = params.append('country', country);

      const options = { params: params };

    return this.httpClient.get('http://localhost:8080/api/filter',options)


  }
}

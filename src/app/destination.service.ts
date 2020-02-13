import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DestinationService {

  constructor(private httpClient: HttpClient) { }
  getDestinationList(){
    return this.httpClient.get('http://localhost:8080/api')

  }
}

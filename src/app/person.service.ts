import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(private httpClient: HttpClient) { }
  create(person){
    return this.httpClient.post('http://localhost:8080/api/person/', person);

  }
}

import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import { Role } from './role';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  roleList;

  constructor(private httpClient: HttpClient) { }
  create(person){
    return this.httpClient.post('http://localhost:8080/api/person/', person);

  }
  selectAllRole(){
    return this.httpClient.get('http://localhost:8080/api/role/');
  }
}

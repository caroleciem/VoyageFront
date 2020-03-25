import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  constructor(private httpClient: HttpClient) { }
    create(group){
      console.log(group);
      return this.httpClient.post('http://localhost:8080/api/group/', group);
   }
}

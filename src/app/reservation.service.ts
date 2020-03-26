import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  reservationSelected;

  constructor(private httpClient: HttpClient) { }
  getReservationList() {
    return this.httpClient.get('http://localhost:8080/api/reservation');
  }


  createReservation(ReservationRecord) {
    return this.httpClient.post('http://localhost:8080/api/reservation/createReservation', ReservationRecord);
  }


  getFilteredIdList(id) {
    let params = new HttpParams();
    params = params.append('id', id);

    const options = { params: params };

    return this.httpClient.get('http://localhost:8080/api/filter', options);
  }


  update(id,reservationToUpdate){


    return this.httpClient.put('http://localhost:8080/api/reservation/update/'+id,reservationToUpdate);
  }


}

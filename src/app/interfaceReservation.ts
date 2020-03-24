import { Trip } from './trip';

export interface Reservation {

  bedRoomNumber: number;
  globalPrice: number;
  date: Date;
  pensionType: any;
  trip: Trip;
}

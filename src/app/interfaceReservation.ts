import { Trip } from './trip';

export interface Reservation {
  groupM: number;
  bedRoomNumber: number;
  globalPrice: number;
  date: Date;
  pensionType: any;
  trip: Trip;
}

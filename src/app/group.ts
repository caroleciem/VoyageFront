import { Persons } from './persons';
import { Reservation } from './interfaceReservation';

export interface Group {
  personSet: Persons[];
  reservationSet: Reservation[];
}

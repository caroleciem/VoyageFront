import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DestinationComponent } from './destination/destination.component';
import { PaymentComponent } from './payment/payment.component';

import { ReservationComponent } from './reservation/reservation.component';
import { ReservationaddComponent } from './reservationadd/reservationadd.component';

import { ReservationPaymentDispatchComponent } from './reservation-payment-dispatch/reservation-payment-dispatch.component';
import { ClientcreateComponent } from './clientcreate/clientcreate.component';




const routes: Routes = [
 // { path: '', component: DestinationComponent },
  { path: 'payment', component: PaymentComponent},
  { path: 'destination', component: DestinationComponent},
  { path: 'reservation', component: ReservationComponent},
  { path: 'reservationadd', component: ReservationaddComponent}
];


  { path: 'reservation-payment-dispatch', component: ReservationPaymentDispatchComponent}
  { path: 'clientcreate', component: ClientcreateComponent}



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

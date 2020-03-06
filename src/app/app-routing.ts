import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DestinationComponent } from './destination/destination.component';
import { PaymentComponent } from './payment/payment.component';
import { ReservationComponent } from './reservation/reservation.component';
import { ReservationaddComponent } from './reservationadd/reservationadd.component';

const routes: Routes = [
 // { path: '', component: DestinationComponent },
  { path: 'payment', component: PaymentComponent},
  { path: 'destination', component: DestinationComponent},
  { path: 'reservation', component: ReservationComponent},
  { path: 'reservationadd', component: ReservationaddComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

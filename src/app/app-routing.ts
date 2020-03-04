import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DestinationComponent } from './destination/destination.component';
import { PaymentComponent } from './payment/payment.component';
import { ClientcreateComponent } from './clientcreate/clientcreate.component';


const routes: Routes = [
  { path: '', component: DestinationComponent },
  { path: 'payment', component: PaymentComponent},
  { path: 'clientcreate', component: ClientcreateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

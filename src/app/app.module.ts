import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DestinationComponent } from './destination/destination.component';
import { VoyagesComponent } from './voyages/voyages.component';
import { ReservationService } from './reservation.service';
import { AppRoutingModule } from './app-routing';

import { PaymentComponent } from './payment/payment.component';

import { ReservationComponent } from './reservation/reservation.component';
import { ReservationaddComponent } from './reservationadd/reservationadd.component';


import { ReservationPaymentDispatchComponent } from './reservation-payment-dispatch/reservation-payment-dispatch.component';
import { ClientcreateComponent } from './clientcreate/clientcreate.component';



@NgModule({
  declarations: [
    AppComponent,
    DestinationComponent,
    VoyagesComponent,
    PaymentComponent,

    ReservationComponent,

    ReservationaddComponent


    ReservationPaymentDispatchComponent
     ClientcreateComponent


  ],
  imports: [
    BrowserModule,FormsModule,HttpClientModule, ReactiveFormsModule,AppRoutingModule],
  providers: [ReservationService],
  bootstrap: [AppComponent]
})
export class AppModule { }

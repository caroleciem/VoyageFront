import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DestinationComponent } from './destination/destination.component';
import { VoyagesComponent } from './voyages/voyages.component';
import { DestinationService } from './destination.service';

@NgModule({
  declarations: [
    AppComponent,
    DestinationComponent,
    VoyagesComponent
  ],
  imports: [
    BrowserModule,FormsModule,HttpClientModule, ReactiveFormsModule
  ],
  providers: [[DestinationService]],
  bootstrap: [AppComponent]
})
export class AppModule { }

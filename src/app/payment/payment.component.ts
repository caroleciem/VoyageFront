import {
  Component,
  AfterViewInit,
  OnDestroy,
  ViewChild,
  ElementRef,
  ChangeDetectorRef,
  OnInit
} from '@angular/core';

import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit, OnDestroy {

  @ViewChild('cardInfo', {static: false}) cardInfo: ElementRef;

  card: any;
  cardHandler = this.onChange.bind(this);
  error: string;

  value: string;
  paymentTypes: string[] = ['Cheque', 'Espèces', 'Virement', 'Carte'];
  //isDisabled: boolean = (!isAdmin || !hasPaid); //TODO: to link with role and reservation payment status)
  isDisabled = false;

  constructor(private cd: ChangeDetectorRef) {}

  ngOnInit() {}


  ngOnDestroy() {
    this.card.removeEventListener('change', this.cardHandler);
    this.card.destroy();
  }

  onChange({ error }) {
    if (error) {
      this.error = error.message;
    } else {
      this.error = null;
    }
    this.cd.detectChanges();
  }

  onPaymentSelection(event: any){
      this.value = event.target.value;
      if (this.value === 'Carte') {
        this.card = elements.create('#card');
        this.card.mount(this.cardInfo.nativeElement);
        this.card.addEventListener('change', this.cardHandler);
      }
  }

  async onSubmit(form: NgForm) {
    const { token, error } = await stripe.createToken(this.card);

    if (error) {
      console.log('Something is wrong:', error);
    } else {
      console.log('Success!', token);
      // ...send the token to the your backend to process the charge
    }
  }

}

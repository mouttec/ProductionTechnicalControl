import { Component, OnInit, OnDestroy } from '@angular/core';
import { BillingService } from 'src/app/services/billing.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-billing-view',
  templateUrl: './billing-view.component.html',
  styleUrls: ['./billing-view.component.css']
})
export class BillingViewComponent implements OnInit, OnDestroy {

  billings: any[];
  billingSusbcription: Subscription;

  constructor(private billingService: BillingService) { }

  ngOnInit(): void {
    this.billingSusbcription = this.billingService.billingSubject.subscribe(
      (billings: any[]) => {
        this.billings = billings;
        console.log(this.billings);
      }
    );
    this.billingService.readListBilling();
  }

  ngOnDestroy(): void {
    this.billingSusbcription.unsubscribe();
  }

}

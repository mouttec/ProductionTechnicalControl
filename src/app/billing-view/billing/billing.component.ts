import { Component, OnInit, Input } from '@angular/core';
import { BillingService } from 'src/app/services/billing.service';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.css']
})
export class BillingComponent implements OnInit {
  @Input() IndexOfBilling: number;
  @Input() idBilling: number;
  @Input() monthlyInvoice: string;
  @Input() priceInvoice: string;
  @Input() urlInvoice: string;
  @Input() filenameTechnicalControlInvoice: string;

  billings: any[];

  constructor(private billlingService: BillingService) { }

  ngOnInit(): void {
  }

}

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { BillingService } from 'src/app/services/billing.service';
import { Billing } from 'src/app/models/billing.model';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-billing-forms',
  templateUrl: './billing-forms.component.html',
  styleUrls: ['./billing-forms.component.css']
})
export class BillingFormsComponent implements OnInit {

  billingForm: FormGroup;
  uploadResponse;
  billings: Billing[];
  billingSubscription: Subscription;
  idPartner = JSON.parse(localStorage.getItem('idPartner'));


  constructor(private formBuilder: FormBuilder, private billingService: BillingService, private router: Router) { }

  ngOnInit(): void {
    this.billingSubscription = this.billingService.billingSubject.subscribe(
      (billings: Billing[]) => {
        this.billings = billings;
      }
    );
    this.billingService.emitBillingSubject();
    this.initFormBilling();
  }

  initFormBilling() {
    this.billingForm = this.formBuilder.group({
      idTechnicalControlInvoices: '',
      monthlyInvoice: ['', Validators.required],
      priceInvoice: ['', Validators.required],
      saveName: ['']
    });
  }

  onFileSelect(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.billingForm.patchValue({
        urlInvoiceSource: file
      });
      console.log(this.billingForm.patchValue({
        urlInvoice: file
      }))
    }
  }

  onSubmit() {
    console.log(1111);
    const newBilling = new Billing();
    newBilling.idPartner = this.idPartner;
    newBilling.monthlyInvoice = this.billingForm.value.monthlyInvoice;
    newBilling.priceInvoice = this.billingForm.value.priceInvoice;
    newBilling.saveName = this.billingForm.value.urlInvoiceSource;
    this.billingService.addBilling(newBilling);
    this.router.navigate(['/facture']);
    return this.billingService.addBilling(newBilling);
  }
}

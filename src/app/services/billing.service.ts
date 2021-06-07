import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Billing } from 'src/app/models/billing.model';

@Injectable({
  providedIn: 'root'
})
export class BillingService {

  billingSubject = new Subject<Billing[]>();
  baseUrl =  'http://localhost:8888/MoutteCAPI/backend/api/technicalControlInvoices';
  private billings: Billing[];

  constructor(private httpClient: HttpClient) { }

  emitBillingSubject() {
    this.billingSubject.next(this.billings);
  }

  readListBilling() {
    this.httpClient.get<Billing[]> (`${this.baseUrl}/listInvoices.php`).subscribe(
      (response) => {
        this.billings = response;
        this.emitBillingSubject();
      },
      (error) => {
        console.log('erreur de sauvegarde' + error);
      }
    );
    return this.httpClient.get<[]>(`${this.baseUrl}/listInvoices.php`);
  }

  addBilling(billing: Billing) {
    this.httpClient.post(`http://localhost:8888/MoutteCAPI/backend/api/car/editCar.php`, billing).subscribe(
      () => {
        this.billings.push(billing)
      },
      (error) => {
        console.log('erreur de sauvegarde de la facture', + error);
      }
    );
    // return this.httpClient.post(`http://localhost:8888/MoutteCAPI/backend/api/car/editCar.php`, billing);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Booking } from '../models/bookings.model';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  bookingSubject = new Subject<Booking[]>();
  api = 'http://localhost:8888/MoutteCAPI/backend/api/booking/listBooking.php';
  private bookings: Booking[];

  constructor(private httpClient: HttpClient) { }

  emitBookingSubject() {
    this.bookingSubject.next(this.bookings);
  }

  readListBooking(idPartner) {
    this.httpClient.get<Booking[]>(`${this.api}?idPartner=${idPartner}`).subscribe(
      (bookings) => {
        this.bookings = bookings;
        this.emitBookingSubject();
        console.log(bookings);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  getBookingById(idBooking) {
    return this.httpClient.get(`${this.api}?idBooking=${idBooking}`);
  }
}

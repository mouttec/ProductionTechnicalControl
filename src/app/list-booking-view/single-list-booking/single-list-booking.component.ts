import { Component, OnInit } from '@angular/core';
import { BookingService } from 'src/app/services/booking.service';
import { ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-single-list-booking',
  templateUrl: './single-list-booking.component.html',
  styleUrls: ['./single-list-booking.component.css']
})
export class SingleListBookingComponent implements OnInit {

  currentBooking = null;
  firstNameCustomer: string;
  lastNameCustomer: string;
  mailCustomer: string;
  phoneCustomer: string;
  dateForth: string;
  dateBack: string;
  dateRDV: string;
  licensePlateCar: string;
  brandCar: string;
  modelCar: string;
  motorizationCar: string;
  urlGrayCard: string;
  dateOfCirculationCar: string;

  constructor(private bookingService: BookingService, private route: ActivatedRoute, private datePipe: DatePipe) { }

  ngOnInit(): void {
    this.getBooking(this.route.snapshot.paramMap.get('idBooking'));
  }

  getBooking(idBooking) {
    this.bookingService.getBookingById(idBooking).subscribe(
      booking => {
        this.currentBooking = booking;
        this.firstNameCustomer = this.currentBooking[1].firstNameCustomer;
        this.lastNameCustomer = this.currentBooking[1].lastNameCustomer;
        this.mailCustomer = this.currentBooking[1].mailCustomer;
        this.phoneCustomer = this.currentBooking[1].phoneCustomer;
        this.dateForth = this.currentBooking[0].dateForth;
        this.licensePlateCar = this.currentBooking[2].licensePlateCar;
        this.brandCar = this.currentBooking[2].brandCar;
        this.modelCar = this.currentBooking[2].modelCar;
        this.motorizationCar = this.currentBooking[2].motorizationCar;
        this.urlGrayCard = this.currentBooking[2].urlGrayCard;
        this.dateOfCirculationCar = this.currentBooking[2].dateOfCirculationCar;
      }
    );
  }






}

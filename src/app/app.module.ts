import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DatePipe, registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';

import { AppComponent } from './app.component';
import { ListBookingViewComponent } from './list-booking-view/list-booking-view.component';
import { HeaderComponent } from './header/header.component';
import { ListBookingComponent } from './list-booking-view/list-booking/list-booking.component';
import { SingleListBookingComponent } from './list-booking-view/single-list-booking/single-list-booking.component';
import { AuthComponent } from './auth/auth.component';

import { BookingService } from 'src/app/services/booking.service';
import { AuthService } from 'src/app/services/auth.service';
import { PartnerService } from 'src/app/services/partner.service';
import { BillingService } from 'src/app/services/billing.service';

import { ProfilComponent } from './profil/profil.component';
import { UpdateProfilComponent } from './profil/update-profil/update-profil.component';
import { UpdatePasswordComponent } from './profil/update-password/update-password.component';
import { BillingViewComponent } from './billing-view/billing-view.component';
import { BillingComponent } from './billing-view/billing/billing.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { CalendarComponent } from './calendar/calendar.component';
import { BillingFormsComponent } from './billing-view/billing-forms/billing-forms.component';

registerLocaleData(localeFr);

@NgModule({
  declarations: [
    AppComponent,
    ListBookingViewComponent,
    HeaderComponent,
    ListBookingComponent,
    SingleListBookingComponent,
    AuthComponent,
    ProfilComponent,
    UpdateProfilComponent,
    UpdatePasswordComponent,
    BillingViewComponent,
    BillingComponent,
    CalendarComponent,
    BillingFormsComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    CalendarModule.forRoot({ provide: DateAdapter, useFactory: adapterFactory })
  ],
  providers: [
    BookingService,
    AuthService,
    PartnerService,
    BillingService,
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

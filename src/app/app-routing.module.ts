import { UpdatePasswordComponent } from './profil/update-password/update-password.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { BillingFormsComponent } from './billing-view/billing-forms/billing-forms.component';
import { BillingViewComponent } from './billing-view/billing-view.component';
import { CalendarComponent } from './calendar/calendar.component';
import { ListBookingViewComponent } from './list-booking-view/list-booking-view.component';
import { SingleListBookingComponent } from './list-booking-view/single-list-booking/single-list-booking.component';
import { ProfilComponent } from './profil/profil.component';
import { UpdateProfilComponent } from './profil/update-profil/update-profil.component';
import { AuthGuard } from 'src/app/services/auth.guard';

const routes: Routes = [
  { path: 'booking', component: CalendarComponent, canActivate: [AuthGuard] },
  { path: 'facture', component: BillingViewComponent, canActivate: [AuthGuard] },
  { path: 'addFacture', component: BillingFormsComponent, canActivate: [AuthGuard] },
  { path: 'list-rdv', component: ListBookingViewComponent, canActivate: [AuthGuard] },
  { path: 'list-rdv/:idBooking', component: SingleListBookingComponent, canActivate: [AuthGuard] },
  { path: 'profil', component: ProfilComponent, canActivate: [AuthGuard] },
  { path: 'profil/updateProfil', component: UpdateProfilComponent, canActivate: [AuthGuard] },
  { path: 'profil/updatePassword', component: UpdatePasswordComponent, canActivate: [AuthGuard] },
  { path: '', component: AuthComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

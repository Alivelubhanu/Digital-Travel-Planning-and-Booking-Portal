import { Routes } from '@angular/router';
// App routes for the Angular standalone pages.
import { Home } from './home/home';
import { DestinationsComponent } from './destinations/destinations';
import { ActivitiesComponent } from './activities/activities';
import { Booking } from './booking/booking';
import { Login } from './login/login';
import { Signup } from './signup/signup';
import { Confirmation } from './confirmation/confirmation';
import { DetailsComponent } from './details/details';
import { ContactComponent } from './contact/contact';
import { AuthGuard } from './auth.guard';
import { MyBookingsComponent } from './my-bookings/my-bookings';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'destinations', component: DestinationsComponent },
  { path: 'activities', component: ActivitiesComponent },
  { path: 'booking', component: Booking, canActivate: [AuthGuard] },
  { path: 'confirmation', component: Confirmation, canActivate: [AuthGuard] },
  { path: 'login', component: Login },
  { path: 'signup', component: Signup },
  { path: 'details/:name', component: DetailsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'my-bookings', component: MyBookingsComponent, canActivate: [AuthGuard] },
];

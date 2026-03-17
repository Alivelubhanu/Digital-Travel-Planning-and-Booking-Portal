import { Routes } from '@angular/router';
import { Home } from './home/home';
import { DestinationsComponent } from './destinations/destinations';
import { ActivitiesComponent } from './activities/activities';
import { Booking } from './booking/booking';
import { Login } from './login/login';
import { Signup } from './signup/signup';
import { Confirmation } from './confirmation/confirmation';
import { DetailsComponent } from './details/details';
import { ContactComponent } from './contact/contact';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'destinations', component: DestinationsComponent },
  { path: 'activities', component: ActivitiesComponent },
  { path: 'booking', component: Booking },
  { path: 'confirmation', component: Confirmation },
  { path: 'login', component: Login },
  { path: 'signup', component: Signup },
  { path: 'details/:name', component: DetailsComponent },
  { path: 'contact', component: ContactComponent },
];

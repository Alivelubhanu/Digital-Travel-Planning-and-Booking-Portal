import { Routes } from '@angular/router';
import { Home } from './home/home';
import { DestinationsComponent } from './destinations/destinations';
import { ActivitiesComponent } from './activities/activities';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'destinations', component: DestinationsComponent },
  { path: 'activities', component: ActivitiesComponent }
];

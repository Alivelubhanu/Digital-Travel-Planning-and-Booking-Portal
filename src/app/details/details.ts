import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DESTINATIONS, type Destination, type Hotel, type StateInfo } from '../../assets/data/destinations-data';
import { TripSelectionService } from '../trip-selection.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './details.html',
  styleUrls: ['./details.css'],
})
export class DetailsComponent {

  place: Destination | undefined;
  selectedState: StateInfo | null = null;
  selectedHotel: Hotel | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private tripSelection: TripSelectionService,
    private auth: AuthService,
  ) {}

  ngOnInit() {
    const name = this.route.snapshot.paramMap.get('name');

    this.place = DESTINATIONS.find(d => d.name === name);
    this.selectedState = null;
    this.selectedHotel = null;
  }

  selectState(state: StateInfo) {
    this.selectedState = state;
    this.selectedHotel = null;
  }

  selectHotel(hotel: Hotel) {
    this.selectedHotel = hotel;
  }

  get hotelsToShow(): Hotel[] {
    if (!this.place) return [];
    if (this.selectedState) return this.selectedState.hotels;
    // Default hotels: show all hotels across states (country-level view)
    return this.place.states.flatMap(s => s.hotels);
  }

  bookNow() {
    if (!this.place) return;

    this.tripSelection.setSelection({
      destinationName: this.place.name,
      stateName: this.selectedState?.name,
      hotel: this.selectedHotel ?? undefined,
    });

    if (!this.auth.isLoggedIn()) {
      this.router.navigate(['/login'], { queryParams: { returnUrl: '/booking?prefill=1' } });
      return;
    }

    this.router.navigate(['/booking'], { queryParams: { prefill: 1 } });
  }
}
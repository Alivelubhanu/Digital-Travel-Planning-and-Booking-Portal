import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DESTINATIONS, type Destination, type Hotel, type StateInfo } from '../../assets/data/destinations-data';
import { AuthService } from '../auth.service';
import { BookingService } from '../booking.service';
import { TripSelectionService, type TripSelection } from '../trip-selection.service';

interface BookingData {
  username: string;
  email: string;
  destination: string;
  stateName?: string;
  hotelName?: string;
  members: number;
  days: number;
  nights: number;
  foodPreference: string;
  beds: number;
  rooms: number;
  travelMode: string;
  travelDate: string;
  checkoutDate?: string;
  totalPrice?: number;
}

@Component({
  selector: 'app-booking',
  imports: [CommonModule, FormsModule],
  templateUrl: './booking.html',
  styleUrls: ['./booking.css'],
})
export class Booking implements OnInit {
  bookingData: BookingData = {
    username: '',
    email: '',
    destination: '',
    stateName: '',
    hotelName: '',
    members: 1,
    days: 1,
    nights: 0,
    foodPreference: '',
    beds: 1,
    rooms: 1,
    travelMode: '',
    travelDate: '',
    checkoutDate: '',
    totalPrice: 0,
  };

  destinations: string[] = DESTINATIONS.map(d => d.name);

  destinationPricing: Record<string, number> = {
    Paris: 4000,
    Maldives: 4500,
    India: 2500,
    Dubai: 3500,
    Bali: 3000,
    'New York': 4000,
    Rome: 3500,
    Switzerland: 4500,
  };

  travelModePricing: Record<string, number> = {
    Flight: 9000,
    Train: 1500,
    Bus: 800,
    Metro: 600,
    Taxi: 2500,
    Car: 2000,
    Bike: 500,
    Auto: 1000,
  };

  // Food pricing (per person per day in ₹)
  foodPreferencePricing: Record<string, number> = {
    Vegetarian: 350,
    'Non-Vegetarian': 550,
    Vegan: 450,
  };

  minDate: string = '';
  selectedFromDetails: TripSelection | null = null;
  availableStates: StateInfo[] = [];
  availableHotels: Hotel[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    @Inject(BookingService) private bookingService: BookingService,
    private auth: AuthService,
    private tripSelection: TripSelectionService,
  ) {}

  ngOnInit() {
    const today = new Date();
    this.minDate = today.toISOString().split('T')[0];

    const user = this.auth.getCurrentUser();
    if (user) {
      this.bookingData.username = user.fullName || '';
      this.bookingData.email = user.email || '';
    }

    const shouldPrefill = this.route.snapshot.queryParamMap.get('prefill') === '1';
    if (shouldPrefill) {
      this.selectedFromDetails = this.tripSelection.getSelection();
      if (this.selectedFromDetails?.destinationName) {
        this.bookingData.destination = this.selectedFromDetails.destinationName;
        this.bookingData.stateName = this.selectedFromDetails.stateName || '';
        this.bookingData.hotelName = this.selectedFromDetails.hotel?.name || '';
      }
    } else {
      this.tripSelection.clearSelection();
      this.selectedFromDetails = null;
      this.bookingData.destination = '';
      this.bookingData.stateName = '';
      this.bookingData.hotelName = '';
    }

    this.refreshStateAndHotelOptions();
    this.calculateTotalPrice();
  }

  onDestinationChange() {
    this.bookingData.stateName = '';
    this.bookingData.hotelName = '';
    this.refreshStateAndHotelOptions();
    this.calculateTotalPrice();
  }

  onStateChange() {
    this.bookingData.hotelName = '';
    this.refreshStateAndHotelOptions();
  }

  private refreshStateAndHotelOptions() {
    const dest = this.getSelectedDestination();
    this.availableStates = dest?.states ?? [];

    const selectedState = this.availableStates.find(s => s.name === this.bookingData.stateName);
    this.availableHotels = selectedState ? selectedState.hotels : [];
  }

  private getSelectedDestination(): Destination | undefined {
    if (!this.bookingData.destination) return undefined;
    return DESTINATIONS.find(d => d.name === this.bookingData.destination);
  }

  calculateNights() {
    if (this.bookingData.days && this.bookingData.days > 0) {
      this.bookingData.nights = this.bookingData.days - 1;
    } else {
      this.bookingData.nights = 0;
    }
    this.updateCheckoutDate();
    this.calculateTotalPrice();
  }

  updateCheckoutDate() {
    this.bookingData.checkoutDate = this.computeCheckoutDate(this.bookingData.travelDate, this.bookingData.days);
  }

  private computeCheckoutDate(checkinIso: string, days: number): string {
    if (!checkinIso) return '';
    const d = new Date(checkinIso);
    if (Number.isNaN(d.getTime())) return '';
    const n = Number.isFinite(days) ? Math.max(1, days) : 1;
    d.setDate(d.getDate() + n);
    return d.toISOString().split('T')[0];
  }

  calculateTotalPrice() {
    let total = 0;

    if (this.bookingData.destination && this.bookingData.members && this.bookingData.days) {
      const destinationRate = this.destinationPricing[this.bookingData.destination] || 0;
      total += destinationRate * this.bookingData.members * this.bookingData.days;
    }

    // Food cost (per person per day)
    if (this.bookingData.foodPreference && this.bookingData.members && this.bookingData.days) {
      const foodRate = this.foodPreferencePricing[this.bookingData.foodPreference] || 0;
      total += foodRate * this.bookingData.members * this.bookingData.days;
    }

    if (this.bookingData.rooms && this.bookingData.nights) {
      total += 1000 * this.bookingData.rooms * this.bookingData.nights;
    }

    if (this.bookingData.beds && this.bookingData.nights) {
      total += 500 * this.bookingData.beds * this.bookingData.nights;
    }

    if (this.bookingData.travelMode && this.bookingData.days) {
      const travelRate = this.travelModePricing[this.bookingData.travelMode] || 0;
      total += travelRate * this.bookingData.days;
    }

    this.bookingData.totalPrice = total;
  }

  onSubmit() {
    if (!this.bookingData.destination || !this.bookingData.foodPreference || !this.bookingData.travelMode || !this.bookingData.travelDate) {
      return;
    }

    this.updateCheckoutDate();
    this.calculateTotalPrice();
    this.bookingService.setBooking(this.bookingData);
    this.router.navigate(['/confirmation']);
  }
}

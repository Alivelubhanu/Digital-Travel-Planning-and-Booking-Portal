import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { BookingService } from '../booking.service';
import { AuthService } from '../auth.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DESTINATIONS } from '../../assets/data/destinations-data';

interface BookingData {
  username: string;
  email: string;
  destination: string;
  members: number;
  days: number;
  nights: number;
  foodPreference: string;
  beds: number;
  rooms: number;
  travelMode: string;
  travelDate: string;
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
    members: 1,
    days: 1,
    nights: 0,
    foodPreference: '',
    beds: 1,
    rooms: 1,
    travelMode: '',
    travelDate: '',
    totalPrice: 0
  };

  destinations: string[] = DESTINATIONS.map(d => d.name);

  // Destination pricing (per person per day in ₹)
  destinationPricing: { [key: string]: number } = {
    'Paris': 4000,
    'Maldives': 4500,
    'India': 2500,
    'Dubai': 3500,
    'Bali': 3000,
    'New York': 4000,
    'Rome': 3500,
    'Switzerland': 4500
  };

  // Travel mode pricing (per day in ₹)
  travelModePricing: { [key: string]: number } = {
    'Car': 2000,
    'Auto': 1000
  };

  minDate: string = '';

  constructor(
    private router: Router,
    @Inject(BookingService) private bookingService: BookingService,
    private auth: AuthService
  ) {}

  ngOnInit() {
    const today = new Date();
    this.minDate = today.toISOString().split('T')[0];

    const user = this.auth.getCurrentUser();
    if (user) {
      this.bookingData.username = user.fullName || '';
      this.bookingData.email = user.email || '';
    }
  }

  calculateNights() {
    if (this.bookingData.days && this.bookingData.days > 0) {
      this.bookingData.nights = this.bookingData.days - 1;
    } else {
      this.bookingData.nights = 0;
    }
    this.calculateTotalPrice();
  }

  calculateTotalPrice() {
    let total = 0;

    // Base destination price (per person per day)
    if (this.bookingData.destination && this.bookingData.members && this.bookingData.days) {
      const destinationRate = this.destinationPricing[this.bookingData.destination] || 0;
      total += destinationRate * this.bookingData.members * this.bookingData.days;
    }

    // Room supplement (₹1000 per room per night)
    if (this.bookingData.rooms && this.bookingData.nights) {
      total += 1000 * this.bookingData.rooms * this.bookingData.nights;
    }

    // Bed supplement (₹500 per bed per night)
    if (this.bookingData.beds && this.bookingData.nights) {
      total += 500 * this.bookingData.beds * this.bookingData.nights;
    }

    // Travel mode cost (per day)
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

    this.calculateTotalPrice();
    this.bookingService.setBooking(this.bookingData);
    this.router.navigate(['/confirmation']);
  }
}

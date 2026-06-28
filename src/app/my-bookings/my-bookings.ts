import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { BookingService } from '../booking.service';
import { AuthService } from '../auth.service';

interface BookingData {
  bookingId?: string;
  destination: string;
  stateName?: string;
  hotelName?: string;
  travelDate?: string;
  checkoutDate?: string;
  username?: string;
  email?: string;
  totalPrice?: number;
}

@Component({
  selector: 'app-my-bookings',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './my-bookings.html',
  styleUrls: ['./my-bookings.css'],
})
export class MyBookingsComponent {
  bookingData: BookingData | null = null;

  constructor(
    private bookingService: BookingService,
    private router: Router,
    private auth: AuthService,
  ) {}

  ngOnInit() {
    this.bookingData = this.bookingService.getBooking();

    // If not logged in, guard should redirect, but keep it safe.
    if (!this.auth.isLoggedIn()) {
      this.router.navigate(['/login']);
    }
  }
}


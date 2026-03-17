import { Injectable } from '@angular/core';

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

}


@Injectable({
  providedIn: 'root'
})
export class BookingService {
  private booking: BookingData | null = null;

  setBooking(data: BookingData) {
    this.booking = data;
  }

  getBooking(): BookingData | null {
    return this.booking;
  }

  clearBooking() {
    this.booking = null;
  }
}
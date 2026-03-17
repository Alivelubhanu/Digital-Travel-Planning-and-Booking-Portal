import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { BookingService } from '../booking.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-confirmation',
  imports: [CommonModule, RouterModule],
  templateUrl: './confirmation.html',
  styleUrls: ['./confirmation.css'],
})
export class Confirmation implements OnInit {
  bookingData: any = null;

  constructor(private bookingService: BookingService, private router: Router) {}

  ngOnInit() {
    this.bookingData = this.bookingService.getBooking();
    if (!this.bookingData) {
      // if someone navigates directly, redirect back to booking
      this.router.navigate(['/booking']);
    }
  }

  formatDate(dateStr: string) {
    if (!dateStr) return '';
    const d = new Date(dateStr);
    return d.toDateString();
  }

  downloadPDF() {
    // use jsPDF library to construct a pdf
    import('jspdf').then(jsPDF => {
      const doc = new jsPDF.jsPDF();
      const b = this.bookingData || {};

      // Header
      doc.setFillColor(46, 166, 223);
      doc.rect(0, 0, 210, 28, 'F');
      doc.setTextColor(255, 255, 255);
      doc.setFontSize(18);
      doc.text('TravelVista Booking Confirmation', 14, 18);

      doc.setTextColor(17, 24, 39);
      doc.setFontSize(11);
      doc.text(`Booking ID: ${b.bookingId || '-'}`, 14, 36);
      doc.text(`Generated: ${new Date().toDateString()}`, 140, 36);

      const section = (title: string, y: number) => {
        doc.setFillColor(243, 244, 246);
        doc.rect(14, y, 182, 9, 'F');
        doc.setTextColor(17, 24, 39);
        doc.setFontSize(12);
        doc.text(title, 16, y + 6.5);
      };

      const row = (label: string, value: any, y: number) => {
        doc.setTextColor(75, 85, 99);
        doc.setFontSize(10);
        doc.text(label, 16, y);
        doc.setTextColor(17, 24, 39);
        doc.setFontSize(10);
        doc.text(String(value ?? '-'), 90, y);
      };

      let y = 46;
      section('User Information', y);
      y += 16;
      row('Full Name', b.username, y); y += 8;
      row('Email', b.email, y); y += 8;

      y += 4;
      section('Trip Selection', y);
      y += 16;
      row('Destination', b.destination, y); y += 8;
      row('State / City', b.stateName || '-', y); y += 8;
      row('Hotel', b.hotelName || '-', y); y += 8;

      y += 4;
      section('Trip Details', y);
      y += 16;
      row('Members', b.members, y); y += 8;
      row('Days', b.days, y); y += 8;
      row('Nights', b.nights, y); y += 8;
      row('Food Preference', b.foodPreference, y); y += 8;
      row('Travel Mode', b.travelMode, y); y += 8;
      row('Travel Date', this.formatDate(b.travelDate), y); y += 8;
      row('Checkout Date', b.checkoutDate ? this.formatDate(b.checkoutDate) : '-', y); y += 8;

      y += 4;
      section('Amount Summary', y);
      y += 16;
      row('Total Amount (INR)', b.totalPrice ? `₹${Number(b.totalPrice).toLocaleString('en-IN')}` : '-', y);

      doc.setTextColor(107, 114, 128);
      doc.setFontSize(9);
      doc.text('Thank you for booking with TravelVista. Have a great trip!', 14, 285);

      doc.save(`booking-${b.bookingId || 'confirmation'}.pdf`);
    });
  }
}
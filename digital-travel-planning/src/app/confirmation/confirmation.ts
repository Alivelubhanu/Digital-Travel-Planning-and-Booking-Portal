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
      doc.setFontSize(16);
      doc.text('Travel Booking Confirmation', 20, 20);
      doc.setFontSize(12);
      let y = 30;
      const addLine = (label: string, value: any) => {
        doc.text(`${label}: ${value}`, 20, y);
        y += 10;
      };
      Object.entries(this.bookingData).forEach(([key, val]) => {
        addLine(key.charAt(0).toUpperCase() + key.slice(1), val);
      });
      doc.save('booking-confirmation.pdf');
    });
  }
}
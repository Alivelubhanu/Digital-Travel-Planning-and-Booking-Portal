import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DESTINATIONS } from '../../assets/data/destinations-data';

@Component({
  selector: 'app-destinations',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './destinations.html',
  styleUrls: ['./destinations.css'],
})
export class DestinationsComponent {
  destinations = DESTINATIONS;
}

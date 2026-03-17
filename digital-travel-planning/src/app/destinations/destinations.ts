import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DESTINATIONS } from '../../assets/data/destinations-data';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../auth.service';
import { TripSelectionService } from '../trip-selection.service';

@Component({
  selector: 'app-destinations',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './destinations.html',
  styleUrls: ['./destinations.css'],
})
export class DestinationsComponent {
  destinations = DESTINATIONS;
  filteredDestinations = DESTINATIONS;

  searchText = '';
  selectedCategory = '';

  get resultsCount(): number {
  return this.filteredDestinations.length;
}

  applyFilters() {
  this.filteredDestinations = this.destinations.filter(place => {

    const matchesSearch =
      place.name.toLowerCase().includes(this.searchText.toLowerCase()) ||
      place.description.toLowerCase().includes(this.searchText.toLowerCase());

    const matchesCategory =
      this.selectedCategory === 'All' ||
      place.category === this.selectedCategory;

    return matchesSearch && matchesCategory;
    
    });
  }

  constructor(
    private auth: AuthService,
    private router: Router,
    private tripSelection: TripSelectionService,
  ) {}

  onBook(placeName: string, event: Event) {
    event.stopPropagation();
    event.preventDefault();

    this.tripSelection.setSelection({ destinationName: placeName });

    if (!this.auth.isLoggedIn()) {
      this.router.navigate(['/login'], { queryParams: { returnUrl: '/booking?prefill=1' } });
      return;
    }

    this.router.navigate(['/booking'], { queryParams: { prefill: 1 } });
  }
} 

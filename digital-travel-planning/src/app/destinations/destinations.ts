import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DESTINATIONS } from '../../assets/data/destinations-data';

@Component({
  selector: 'app-destinations',
  standalone: true,
  imports: [CommonModule, FormsModule],
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
} 

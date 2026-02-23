import { Component } from '@angular/core';
import { Navbar } from '../navbar/navbar';

@Component({
  selector: 'app-home',
  imports: [Navbar],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

  scrollToDestinations() {
    const section = document.getElementById('destinations');
    section?.scrollIntoView({ behavior: 'smooth' });
  }

}

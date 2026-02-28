import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
})
export class Home {

  scrollToDestinations() {
    const section = document.getElementById('destinations');
    section?.scrollIntoView({ behavior: 'smooth' });
  }

}

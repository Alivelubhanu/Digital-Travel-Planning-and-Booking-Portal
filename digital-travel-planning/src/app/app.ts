import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './navbar/navbar';
import { FooterComponent } from './footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, FooterComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('digital-travel-planning');
}

import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './navbar/navbar';
import { FooterComponent } from './footer/footer';
import { ToastComponent } from './toast/toast';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, FooterComponent, ToastComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('digital-travel-planning');
}

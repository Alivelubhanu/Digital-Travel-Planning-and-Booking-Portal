import { Component, HostListener } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { CommonModule } from '@angular/common';
import { ToastService } from '../toast/toast.service';

@Component({
  selector: 'app-navbar',
  imports: [RouterModule, CommonModule],
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css'],
})
export class Navbar {
  theme: 'light' | 'dark' = 'light';
  accountMenuOpen = false;
  accountView: 'actions' | 'profile' | 'bookings' | 'settings' = 'actions';

  constructor(
    public auth: AuthService,
    private router: Router,
    private toast: ToastService,
  ) {
    const saved = localStorage.getItem('theme');
    this.theme = saved === 'dark' ? 'dark' : 'light';
    this.applyTheme();
  }

  private applyTheme() {
    document.body.classList.toggle('theme-dark', this.theme === 'dark');
    document.body.classList.toggle('theme-light', this.theme === 'light');
  }

  toggleTheme() {
    this.theme = this.theme === 'dark' ? 'light' : 'dark';
    localStorage.setItem('theme', this.theme);
    this.applyTheme();
    this.toast.show({
      title: `Theme: ${this.theme}`,
      type: 'info',
      durationMs: 900,
    });
  }

  toggleAccountMenu() {
    this.accountMenuOpen = !this.accountMenuOpen;
    if (this.accountMenuOpen) this.accountView = 'actions';
  }

  @HostListener('document:click')
  onDocClick() {
    this.accountMenuOpen = false;
  }

  onMyProfile() {
    this.accountMenuOpen = false;
    const u = this.auth.getCurrentUser();
    const name = u?.fullName ?? 'User';
    this.accountView = 'profile';
    // Keep dropdown open and show profile details.
    this.accountMenuOpen = true;
    this.toast.clear();
    // Use a small delay to ensure DOM updates reliably.
    setTimeout(() => {
      // no-op; template uses accountView
    }, 0);
  }

  onMyBookings() {
    this.accountMenuOpen = false;
    this.accountView = 'actions';
    this.router.navigate(['/my-bookings']);
  }

  onSettings() {
    this.accountMenuOpen = true;
    this.accountView = 'settings';
  }

  logout() {
    this.toast.show({
      title: 'Logged out',
      message: 'You have been signed out successfully.',
      type: 'info',
      durationMs: 1400,
    });
    this.accountMenuOpen = false;
    this.accountView = 'actions';
    this.auth.logout();
  }
}

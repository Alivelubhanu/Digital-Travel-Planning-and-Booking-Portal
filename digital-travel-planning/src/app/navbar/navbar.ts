import { Component } from '@angular/core';
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
  constructor(
    public auth: AuthService,
    private router: Router,
    private toast: ToastService,
  ) {}

  logout() {
    this.toast.show({
      title: 'Logged out',
      message: 'You have been signed out successfully.',
      type: 'info',
      durationMs: 1400,
    });
    this.auth.logout();
  }
}

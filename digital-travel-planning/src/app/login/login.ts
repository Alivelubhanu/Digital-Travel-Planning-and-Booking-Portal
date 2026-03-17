import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { AuthService } from '../auth.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './login.html',
  styleUrls: ['./login.css'],
})
export class Login {
  email: string = '';
  password: string = '';
  errorMessage: string = '';
  private returnUrl: string | null = null;

  constructor(
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute,
  ) {
    this.returnUrl = this.route.snapshot.queryParamMap.get('returnUrl');
  }

  onLogin() {
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(this.email)) {
      this.errorMessage = 'Invalid email format';
      return;
    }

    // Attempt login
    if (this.authService.login(this.email, this.password)) {
      // If user was redirected here by a guard, go back there; otherwise go Home.
      this.router.navigateByUrl(this.returnUrl || '/');
    } else {
      this.errorMessage = 'Incorrect email or password';
    }
  }
}

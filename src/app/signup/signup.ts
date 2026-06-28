import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';
import { AuthService } from '../auth.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './signup.html',
  styleUrls: ['./signup.css'],
})
export class Signup {
  fullName: string = '';
  email: string = '';
  phoneNumber: string = '';
  password: string = '';
  confirmPassword: string = '';
  travelType: string = '';
  budget: number | null = null;
  agreeToTerms: boolean = false;
  errorMessage: string = '';
  successMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onSignup() {
    this.errorMessage = '';
    this.successMessage = '';

    if (!this.phoneNumber.trim()) {
      this.errorMessage = 'Phone number is required';
      return;
    }

    if (!this.travelType) {
      this.errorMessage = 'Please select a travel type';
      return;
    }

    if (!this.agreeToTerms) {
      this.errorMessage = 'Please agree to Terms & Conditions';
      return;
    }

    const result = this.authService.register({
      fullName: this.fullName,
      email: this.email,
      phoneNumber: this.phoneNumber,
      travelType: this.travelType,
      budget: this.budget ?? undefined,
      password: this.password,
      confirmPassword: this.confirmPassword,
    });

    if (result.success) {
      this.successMessage = result.message;
      setTimeout(() => {
        this.router.navigate(['/login']);
      }, 2000);
    } else {
      this.errorMessage = result.message;
    }
  }
}
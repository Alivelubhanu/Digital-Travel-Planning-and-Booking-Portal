import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

interface User {
  fullName: string;
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated = false;
  private currentUser: User | null = null;
  private users: User[] = [];

  constructor(private router: Router) {
    // Load users from localStorage
    const storedUsers = localStorage.getItem('users');
    if (storedUsers) {
      this.users = JSON.parse(storedUsers);
    }

    // Add demo user if not exists
    const demoUser: User = { fullName: 'Demo User', email: 'user@travel.com', password: 'password123' };
    if (!this.users.find(u => u.email === demoUser.email)) {
      this.users.push(demoUser);
      localStorage.setItem('users', JSON.stringify(this.users));
    }

    // Check if user is already logged in
    const storedAuth = localStorage.getItem('isAuthenticated');
    if (storedAuth === 'true') {
      this.isAuthenticated = true;
      this.currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
    }
  }

  register(fullName: string, email: string, password: string, confirmPassword: string): { success: boolean; message: string } {
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return { success: false, message: 'Invalid email format' };
    }

    // Check if email already exists
    if (this.users.find(u => u.email === email)) {
      return { success: false, message: 'Email already registered' };
    }

    // Validate password length
    if (password.length < 6) {
      return { success: false, message: 'Password must be at least 6 characters long' };
    }

    // Check if passwords match
    if (password !== confirmPassword) {
      return { success: false, message: 'Passwords do not match' };
    }

    // Register user
    const newUser: User = { fullName, email, password };
    this.users.push(newUser);
    localStorage.setItem('users', JSON.stringify(this.users));

    return { success: true, message: 'Registration successful' };
  }

  login(email: string, password: string): boolean {
    const user = this.users.find(u => u.email === email && u.password === password);
    if (user) {
      this.isAuthenticated = true;
      this.currentUser = { fullName: user.fullName, email: user.email, password: '' }; // Don't store password in currentUser
      localStorage.setItem('isAuthenticated', 'true');
      localStorage.setItem('currentUser', JSON.stringify(this.currentUser));
      return true;
    }
    return false;
  }

  logout(): void {
    this.isAuthenticated = false;
    this.currentUser = null;
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('currentUser');
    this.router.navigate(['/login']);
  }

  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }

  getCurrentUser(): User | null {
    return this.currentUser;
  }
}
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-user-menu',
  standalone: true,
  imports: [],
  templateUrl: './user-menu.component.html',
  styleUrl: './user-menu.component.scss',
})
export class UserMenuComponent {
  isMenuOptionDisplayed = false;
  constructor(private authService: AuthService, private router: Router) {}

  toggleMenu() {
    this.isMenuOptionDisplayed = !this.isMenuOptionDisplayed;
  }

  navigateToProfile() {
    this.isMenuOptionDisplayed = false;
    this.router.navigate(['/profile']);
  }

  logout() {
    this.isMenuOptionDisplayed = false;
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}

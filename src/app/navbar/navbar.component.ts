
import { Component } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
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

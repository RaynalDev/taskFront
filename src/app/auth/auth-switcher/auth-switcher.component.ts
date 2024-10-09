import { Component } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { SignupComponent } from '../signup/signup.component';


@Component({
  selector: 'app-auth-switcher',
  standalone: true,
  imports: [LoginComponent, SignupComponent],
  templateUrl: './auth-switcher.component.html',
  styleUrl: './auth-switcher.component.scss'
})
export class AuthSwitcherComponent {

  showLogin : boolean = true; // true for login, false for register

  toggleComponent(){
    this.showLogin= ! this.showLogin;
  }
}

import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterModule, HttpClientModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  // onSubmit() {
  //   this.authService.login(this.email, this.password).subscribe({
  //     next: (response: any) => {
  //       this.authService.saveToken(response.token);
  //       this.router.navigate(['/']);
  //     },
  //     error: (error) => {
  //       console.error('Login failed', error);
  //     },
  //   });
  // }

onSubmit(){
  this.authService.login(this.email,this.password);
  console.log(this.email,this.password);
  
}

}


import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormBuilder,FormGroup, Validator, Validators, FormControl } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';


@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule,RouterLink, RouterLinkActive],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {

  signupForm = new FormGroup({
    username : new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    confirmPassword: new FormControl('')
  });  

  constructor(private authService: AuthService,  private fb:FormBuilder, private router:Router){
  
  }

  onSubmit() {
    const formData = {
      username: this.signupForm.get('username')?.value ?? '',
      email: this.signupForm.get('email')?.value ?? '',
      password: this.signupForm.get('password')?.value ?? ''
    };
  
    this.authService.signup(formData).subscribe({
      next : (user) =>   {
        console.log('inscription validée', user);
        this.authService.login(user.username,user.password).subscribe(
          {
            next: () => this.router.navigate(['/dashboard'])
          }
        )
      },
      error : (error) =>    console.error('Erreur lors de l inscription',error),
    });
  } 
  
  
}

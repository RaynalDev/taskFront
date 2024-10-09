import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormBuilder,FormGroup, Validator, Validators, FormControl } from '@angular/forms';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
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

  constructor(private authService: AuthService,  private fb:FormBuilder){
  
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.signupForm.value);
  }
}

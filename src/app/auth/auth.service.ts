import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly apiurl = 'http://localhost:3000';
  private readonly tokenName = 'auth_token';

  constructor(private http: HttpClient, private router:Router) { }
  
  login(email: string, password: string){
    
  }
}

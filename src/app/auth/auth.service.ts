import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly apiUrl = environment.apiUrl;
  private readonly tokenName = 'auth_token';
  private jwtHelper = new JwtHelperService();

  constructor(
    private http: HttpClient,
    private router: Router
  ) {}

  login(email: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, { email, password });
  }

  logout() {
    localStorage.removeItem(this.tokenName);
    this.router.navigate(['/login']);
  }

  isAuthenticated(): boolean {
    const token = localStorage.getItem(this.tokenName);
    // si le token existe et si il n'a pas expiré
    return !!token && !this.jwtHelper.isTokenExpired(token);
  }

  saveToken(token: string) {
    localStorage.setItem(this.tokenName, token);
  }
}

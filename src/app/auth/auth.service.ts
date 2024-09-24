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

  private isFakeAuthenticated:boolean = false;

  constructor(
    private http: HttpClient,
    private router: Router
  ) {}

  // login(email: string, password: string): Observable<any> {
  //   return this.http.post(`${this.apiUrl}/login`, { email, password });
  // }


  login(userName:string, password:string){
    //vérificaiton factice
    if(userName === 'admin' && password === 'admin'){
      this.isFakeAuthenticated = true;
      localStorage.setItem(this.tokenName, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c');
      this.router.navigate(['/dashboard']);
    }
  }

  logout() {
    this.isFakeAuthenticated = false;
    localStorage.removeItem(this.tokenName);
    this.router.navigate(['/login']);
  }

  isLoggedIn():boolean{
    return localStorage.getItem(this.tokenName)  == 'fakeToken';
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

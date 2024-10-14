import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { User } from '../user/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly apiUrl = environment.apiUrl;
  private readonly tokenName = 'auth_token';
  private jwtHelper = new JwtHelperService();

  private isFakeAuthenticated: boolean = false;

  private usersUrl = 'assets/users.json';
  private currentUserSubject = new BehaviorSubject<User|null | null>(null);
  private currentUser$ = this.currentUserSubject.asObservable();

  constructor(private http: HttpClient, private router: Router) {

    const storedUser = localStorage.getItem('currentUser');
    if(storedUser){
      this.currentUserSubject.next(JSON.parse(storedUser))
    }

  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiUrl}/users`);
  }

  getCurrentUser(): Observable<User|null> {
    return this.currentUser$;
  }

  login(userName: string, password: string): Observable<boolean> {
    return this.getUsers().pipe(
      map((users) => {
        console.log('Users fetched :', users);
        const user = users.find(
          (u) =>
            (u.username === userName || u.email === userName) &&
            u.password === password
        );

        if (user) {
          console.log('User found:', user); // Ajoute ce log
          this.currentUserSubject.next(user);
          localStorage.setItem('currentUser', JSON.stringify(user));
          return true;
        }
        console.log('no user found');
        return false;
      })
    );
  }

  signup(user:{username: string, email:string, password:string }): Observable<User> {
    console.log('username, email et password ',  user.username, user.email , user.password   );
    
    return this.http.post<User>(`${this.apiUrl}/signup`,  user );
  }

  logout() {
    this.isFakeAuthenticated = false;
    localStorage.removeItem('currentUser');
    this.router.navigate(['/login']);
  }



  isAuthenticated(): boolean {
    // const token = localStorage.getItem('currentUser');
    // // si le token existe et si il n'a pas expiré
    // return !!token && !this.jwtHelper.isTokenExpired(token);
    return true;
  }

  
}

import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable, of, catchError, map, throwError } from "rxjs";
import { LoginDTO, RegisterDTO, User } from "src/app/models/user";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  springBootUrl = 'http://localhost:8080/guessthemovie/users';

  constructor(private router: Router, private http: HttpClient) {}

  login(loginData: LoginDTO): Observable<User> {
    return this.http.post<User>(`${this.springBootUrl}/login`, loginData)
          .pipe(map(user =>{
            localStorage.setItem('user', JSON.stringify(user));
            return user;
          })
          );
    //return of(user);

  }

  register(registerData: RegisterDTO): Observable<any> {
    return this.http.get(`${this.springBootUrl}/${registerData.username}`)
          .pipe(map((_response) =>{
            return throwError("Username già in uso!");
          }),
          catchError((_error) => {
            return this.http.post(`${this.springBootUrl}/register`, registerData);
          })
          );
  }

  logout() {
    localStorage.removeItem("user");
  }

  isAuthenticated() {
    return !!localStorage.getItem("user");
  }

  getCurrentUser() {
    const user = JSON.parse(localStorage.getItem("user") || '') as User;
    return user;
  }
}

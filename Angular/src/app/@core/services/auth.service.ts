import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { finalize, Observable, of, tap } from "rxjs";
import { LoginDTO, RegisterDTO, User } from "src/app/models/user";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  springBootUrl = 'http://localhost:8080';

  constructor(private router: Router, private http: HttpClient) {}

  login(loginData: LoginDTO): Observable<User> {

    // Stub prima di implementare l'API
    // const user: User = {
    //   name: 'Paolino',
    //   surname: 'Paperino',
    //   username: 'papero123'
    // }
    // return of(user);
    // Fine stub
  
    return this.http.post<User>(`${this.springBootUrl}/login`, loginData).pipe(
      tap((user: User) => {
        localStorage.setItem("user", JSON.stringify(user));
        this.router.navigateByUrl("/welcome");
      })
    )
  }

 
  // register(registerData: RegisterDTO) : Observable<User> {
  //   this.router.navigateByUrl("/register");
  //   // TODO Chiamare il servizio per la registrazione e redirigere l'utente alla root per il login
  //   return this.http.post<User>(`${this.springBootUrl}/login`, registerData).pipe(
  //     tap((user: User) => {
  //       localStorage.setItem("user", JSON.stringify(user));
  //       this.router.navigateByUrl("/welcome");
  //     })
  //   )
    
  // }

  register(registerData: RegisterDTO): Observable<User> {
    // TODO Chiamare il servizio per la registrazione e redirigere l'utente alla root per il login
    return this.http.post<User>(`${this.springBootUrl}/register`, registerData).pipe(
      tap((user: User) => {
        localStorage.setItem("user", JSON.stringify(user));
        this.router.navigateByUrl("/welcome");
      }),
      finalize(() => {
        this.router.navigateByUrl("/");
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

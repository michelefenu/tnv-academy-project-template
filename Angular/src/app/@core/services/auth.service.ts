import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { of, tap } from "rxjs";
import { LoginDTO, RegisterDTO, User } from "src/app/models/user";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  springBootUrl = 'http://localhost:8080/users';


  private registeredUsers: User[] = [];

  constructor(private router: Router, private http: HttpClient) {}

  login(loginData: LoginDTO): Observable<any> {
    const user= this.registeredUsers.find(user => user.username === loginData.username);
      if (user && user.password === loginData.password) {
      localStorage.setItem("user", JSON.stringify(user));
      return of(user);
    } else {
      return of({ error: 'Invalid credentials' });
    }
  }

 
  register(registerData: RegisterDTO): Observable<any> {
   
    const newUser: User = {
      id: this.generateId(),
      username: registerData.username,
      name: registerData.name,
      surname: registerData.surname,
      password: registerData.password
    };
       this.registeredUsers.push(newUser);

       console.log("utente:",this.registeredUsers.length);

    return of(null).pipe(
      tap(() => {
       
        this.router.navigateByUrl('/login');
      })
    );
  }

  private generateId(): number {
    
    return Math.floor(Math.random() * 1000);
  }

 
 
 
 
 
 
 
 
 
 
 
 
 
  /*login(loginData: LoginDTO) : Observable<any> {

       const user: User = {
       id: 4,
        name: 'Paolino',
      surname: 'Paperino',
      username: 'papero123'
    }
    return of(user);
    // Fine stub 
  }
  /* 
  
 /*    console.log('auth service.ts', loginData);

    const url = ${this.springBootUrl}/login; // Sostituisci con il tuo endpoint effettivo per il login
    return this.http.post(url, loginData);

    const user = loginData;

     */

   

    // Passare username e password
    // return this.http.get(${this.springBootUrl}/api/user);

    // Stub prima di implementare l'API
 /*      const user: User = {
        name: 'Paolino',
      surname: 'Paperino',
      username: 'papero123'
    }
    return of(user);
    // Fine stub 
  } */

 /* register(registerData: RegisterDTO): Observable<any> {
    console.log('auth service.ts', registerData);
        const url = ${this.springBootUrl}/users/;

    return this.http.post(url, registerData)
      .pipe(
        // Se la registrazione ha successo, reindirizza l'utente alla pagina di login
        tap(() => this.router.navigateByUrl('/login'))
      );
  }*/

 

  logout() {
    localStorage.removeItem("user");
  }

  isAuthenticated() {
    return !!localStorage.getItem("user");
  }

  getCurrentUser() {
    const user = JSON.parse(localStorage.getItem("user") || '') as User;
    return user;
  }
}
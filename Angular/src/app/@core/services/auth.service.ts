import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { of } from "rxjs";
import { LoginDTO, RegisterDTO, User } from "src/app/models/user";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  springBootUrl = 'http://localhost:8080/users';

  constructor(private router: Router, private http: HttpClient) {}

  login(loginData: LoginDTO) : Observable<any> {
    console.log('auth service.ts', loginData);

    const url = `${this.springBootUrl}/login`; // Sostituisci con il tuo endpoint effettivo per il login
    return this.http.post(url, loginData);

    // Passare username e password
    // return this.http.get(`${this.springBootUrl}/api/user`);

    // Stub prima di implementare l'API
    /*const user: User = {
      name: 'Paolino',
      surname: 'Paperino',
      username: 'papero123'
    }
    return of(user);*/
    // Fine stub
  }

  register(registerData: RegisterDTO) {
     // Effettua la chiamata HTTP al backend per la registrazione
     this.http.post(`${this.springBootUrl}/api/register`, registerData).subscribe({
      next: (response: any) => {
        // Se la registrazione ha successo, reindirizza l'utente alla pagina desiderata dopo il login
        this.router.navigateByUrl("/login");
      },
      error: (error) => {
        console.error("Errore durante la registrazione:", error);
        // Gestire eventuali errori durante la registrazione qui

   /* console.log('auth service.ts', registerData);
    const url = `${this.springBootUrl}/`; // Sostituisci con il tuo endpoint effettivo per il login
    return this.http.post(url, registerData);*/
      }
    });
  }

/*   versione originale progetto
  register(registerData: RegisterDTO) {

    // TODO Chiamare il servizio per la registrazione e redirigere l'utente alla root per il login
    //this.router.navigateByUrl("/");
  }
 */

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
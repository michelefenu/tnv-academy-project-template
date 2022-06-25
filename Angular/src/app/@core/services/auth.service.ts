import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { LoginDTO, RegisterDTO, User } from "src/app/models/user";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  constructor(private router: Router) {}

  login(loginData: LoginDTO) {
    // TODO Chiamare il servizio per l'autenticazione e salvare l'utente corrente nel localStorage
    const response: User = {
      name: "Paolino",
      surname: "Paperino",
      username: "paolino504",
      email: "paolino@paperino.it",
    };

    localStorage.setItem("user", JSON.stringify(response));
    this.router.navigateByUrl("/");
  }

  register(registerData: RegisterDTO) {
    // TODO Chiamare il servizio per la registrazione e redirigere l'utente alla root per il login
    
    this.router.navigateByUrl("/");
  }

  logout() {
    localStorage.removeItem("user");
    this.router.navigateByUrl("/login");
  }

  isAuthenticated() {
    return !!localStorage.getItem("user");
  }
}

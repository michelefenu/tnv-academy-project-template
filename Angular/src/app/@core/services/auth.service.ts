import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root",
})
export class AuthService {

  constructor(private router: Router) {}

  login() {
    localStorage.setItem(
      "user",
      JSON.stringify({
        name: "Paolino",
        surname: "Paperino",
      })
    );
    this.router.navigateByUrl('/');
  }

  logout() {
    localStorage.removeItem("user");
    this.router.navigateByUrl('/login');
  }

  isAuthenticated() {
    return !!localStorage.getItem("user");
  }
}

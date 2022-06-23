import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "src/app/@core/services/auth.service";

@Component({
  selector: "tnv-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    if(this.authService.isAuthenticated()) {
      this.router.navigateByUrl("/");
    }
  }

  login() {
    this.authService.login()
  }
}

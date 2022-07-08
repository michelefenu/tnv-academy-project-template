import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
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
    if (this.authService.isAuthenticated()) {
      this.router.navigateByUrl("/");
    }
  }

  login(form: NgForm) {
    form.control.markAllAsTouched();
    if (form.valid) {
      this.authService.login(form.value).subscribe({
        next: (res) => {
          localStorage.setItem("user", JSON.stringify(res));
          this.router.navigateByUrl("/");
        },
        error: (err) => {
          console.error(err);
        },
      });
    }
  }
}

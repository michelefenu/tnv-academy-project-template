import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "src/app/@core/servicesAuth/auth.service";

@Component({
  selector: "tnv-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    if (this.authService.isAuthenticated()) {
      this.router.navigateByUrl("/");
    }
  }

  login(form: NgForm) {
    console.log("login component.ts", form.value);
    form.control.markAllAsTouched();
    if (form.valid) {
      this.authService.login(form.value).subscribe({
        next: (response) => {
          localStorage.setItem("user", JSON.stringify(response));
          this.router.navigateByUrl("/home");
        },
        error: () => alert("Login Errato"),
      });
    }
  }
}

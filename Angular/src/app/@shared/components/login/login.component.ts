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
      this.router.navigateByUrl("/");   //when logged in go to main page of localhost
    }
  }

  login(form: NgForm) {
    console.log("login component.ts", form.value);                //test for showing login data
    form.control.markAllAsTouched();                              //verify if all fields are filled
    if (form.valid) {                                             
      this.authService.login(form.value).subscribe({              
        next: (response) => {                                     
          localStorage.setItem("user", JSON.stringify(response)); 
          this.router.navigateByUrl("/welcome");                  //when logged navigate to welcome page with filter for movies
        },
        error: () => alert("Login Error, check your username or password"),   //alert message                  
      });
    }
  }
}

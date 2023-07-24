import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "src/app/@core/servicesAuth/auth.service";
import { RegisterDTO } from "src/app/models/user";

@Component({
  selector: "tnv-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"],
})
export class RegisterComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    if (this.authService.isAuthenticated()) {
      this.router.navigateByUrl("/login");
    }
  }

  register(form: NgForm) {
    form.control.markAllAsTouched();
    if (form.valid) {
      const registerData: RegisterDTO = {
        name: form.value.name,
        surname: form.value.surname,
        username: form.value.username,
        password: form.value.password,
      };
      this.authService.register(registerData)
      .subscribe( () => {
        this.router.navigateByUrl("/login");
      },
      (error: any) => {
        if(error.status === 400 && error.error.message === "Utente già esistente"){
          alert("Username già esistente");
        }else{
          console.error("Errore durante la registrazione", error);
          alert("Errore durante la registrazione. Username già esistente");
        }
      }
      );
    }
  }
}

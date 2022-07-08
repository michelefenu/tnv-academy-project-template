import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { catchError, Observable, of } from "rxjs";
import { LoginDTO, RegisterDTO, User } from "src/app/@models/user";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  constructor(private router: Router, private httpClient: HttpClient) {}

  login(loginData: LoginDTO) {
    return this.httpClient.get(
      `http://localhost:8080/users/username/${loginData.username}/password/${loginData.password}`
    );
  }

  register(registerData: RegisterDTO) {
    const newUser: RegisterDTO = {
      name: registerData.name,
      surname: registerData.surname,
      username: registerData.username,
      password: registerData.password,
    };
    return this.httpClient.post(`http://localhost:8080/users/`, newUser);
  }

  logout() {
    localStorage.removeItem("user");
  }

  isAuthenticated() {
    return !!localStorage.getItem("user");
  }

  getCurrentUser() {
    const user = JSON.parse(localStorage.getItem("user") || "") as User;
    return user;
  }

  getUser(username: string) {
    return this.httpClient.get<User>(`http://localhost:8080/users/${username}`);
  }

  createUser(newUser: User) {
    return this.httpClient.post<User>(`http://localhost:8080/users/`, newUser);
  }

  updateUser(userId: number, user : Partial<RegisterDTO>){try{
    const updateUser : Partial<RegisterDTO> ={
      name : user.name,
      surname : user.surname,
      username : user.username,
    }
    this.httpClient.put<User>(`http://localhost:8080/users/${userId}`,updateUser)

     return console.log("Utente salvato")

  }
  catch{
     return console.log("Utente non aggiornato")
  }
   
  }
  
}

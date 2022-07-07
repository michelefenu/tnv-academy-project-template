import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { catchError, Observable, of } from "rxjs";
import { LoginDTO, RegisterDTO, User } from "src/app/@models/user";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  constructor(private router: Router, private httpClient : HttpClient) {}
  

  login(loginData: LoginDTO) {
    const response: User = {
      name: "Paolino",
      surname: "Paperino",
      username: "paolino504",
      id: 4,
    };

    localStorage.setItem("user", JSON.stringify(response));

    return of('login ok');
    /*try{
      const response = this.getUser(loginData.username);
      localStorage.setItem("user", JSON.stringify(response));
      return of('login ok');
    } catch{
      return of('login fallito')
    }*/

  }
  
  register(registerData: RegisterDTO) {
    try{
      const newUser : RegisterDTO ={
        name : registerData.name,
        surname : registerData.surname,
        username : registerData.username,
        password : registerData.password,
      }
       this.httpClient.put(`http://localhost:8080/users/`,newUser);
  
       this.router.navigateByUrl("/");

       return console.log("Utente salvato")

    }
    catch{
       return console.log("Utente non creato")
    }
    
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

  getUser(username : string){
   return  this.httpClient.get<User>( `http://localhost:8080/users/${username}`);
  }

  createUser(newUser :User){
    return this.httpClient.post<User>(`http://localhost:8080/users/`,newUser);
  }

  updateUser(username: string, user : User){
    return this.httpClient.put<User>(`http://localhost:8080/users/${username}`,user);
  }
  
}

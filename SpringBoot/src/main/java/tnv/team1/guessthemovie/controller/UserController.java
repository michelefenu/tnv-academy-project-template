/** Questa classe rappresenta un controller REST per gestire le operazioni relative agli utenti.
È annotata con @RestController, che la rende un controller REST che restituisce direttamente dati JSON.
La classe gestisce le richieste HTTP relative agli utenti, come ottenere tutti gli utenti,
ottenere un utente specifico tramite il suo ID, registrare un nuovo utente e consentire
il login di un utente esistente. */

package tnv.team1.guessthemovie.controller;

import tnv.team1.guessthemovie.model.User;
import tnv.team1.guessthemovie.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/guessthemovie/users")
public class UserController {
    @Autowired
    private UserService userService;


    @GetMapping("/")
    public Iterable<User> getAllUsers(){
        return userService.getAllUsers();
    }
    @GetMapping("/{id}")
    public User getUser(@PathVariable int id){
        return userService.getUser(id);
    }
    @PostMapping("/register")
    public void registerUser(@RequestBody User user){
        userService.registerUser(user);
    }
    @PostMapping("/login")
    public User loginUser(@RequestBody User user) {
        return userService.loginUser(user.getUsername(), user.getPassword());
    }
}


package com.thenetvalue.sbTutorial1.controller;

import com.thenetvalue.sbTutorial1.model.Credential;
import com.thenetvalue.sbTutorial1.model.User;
import com.thenetvalue.sbTutorial1.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/users")
public class UserController {
    private UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    //CRUD operations (Create Read Update Delete)

    @PostMapping("/")
    public String addUser(@RequestBody User user) {
        return userService.addUser(user);
    }

    @GetMapping("/{id}")  //    /users/1
    public User getUserById(@PathVariable("id") int id) {
        return userService.getUser(id);
    }

    //allUsers - GET
    @GetMapping("/")
    public Iterable<User> allUsers() {
        return userService.allUsers();
    }

    @GetMapping("/search/username/{partialUsername}")
    public List<User> searchUsernameByUsername(@PathVariable("partialUsername") String partialUsername) {
        return this.userService.findUserByPartialUsername(partialUsername);
    }

    @GetMapping("/search/{username}")
    public User searchUserByUsername(@PathVariable("username") String username){
        return this.userService.findUserByUsername(username);
    }

    //updateUser - PUT
    @PutMapping("/{id}")
    public String updateUser(@PathVariable("id") int id, @RequestBody User user) {
        return userService.updateUser(id, user);
    }

    //deleteUser - DELETE
    @DeleteMapping("/{id}")
    public String deleteUser(@PathVariable("id") int id) {
        return userService.deleteUser(id);
    }

    @PostMapping("/login")
    public String login(@RequestBody Credential credential){
        return userService.login(credential);
    }

    //TODO public String login(String username, String password) -> restituisce OK se username e password coincidono con quelle del db
    //Con la POST dovete creare un oggetto di classe Credential che contiene username e password
    // { "username" : "....", "password" : "...." }
}

package com.thenetvalue.sbTutorial1.controller;

import com.thenetvalue.sbTutorial1.model.Credential;
import com.thenetvalue.sbTutorial1.model.User;
import com.thenetvalue.sbTutorial1.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/users")

public class UserController {

    private UserService userService;

    @Autowired
    public UserController(UserService userService){
        this.userService=userService;
    }

    @PostMapping("/")
    public User addUser(@RequestBody User user){
        return userService.addUser(user);
    }

    @GetMapping("/{id}")
    public User getUserById(@PathVariable("id") int id){
        return userService.getUser(id);
    }

    @GetMapping("/allusers")
    public Iterable<User> findAllUsers(){
        return userService.findAllUsers();
    }

    @GetMapping("/search/username/{username}")
    public User searchUserByUsername(@PathVariable ("username") String username){
        return this.userService.findUserByUsername(username);
    }

    @GetMapping("/search/partialUsername/{partialUsername}")
    public List<User> searchUserByPartialUsername(@PathVariable ("partialUsername") String partialUsername){
        return this.userService.findUserByUsernameContains(partialUsername);
    }

    @PutMapping("/{id}")
    public String updateUser(@PathVariable("id") int id, @RequestBody User user){
            return userService.updateUser(id,user);
    }

    @DeleteMapping("/{id}")
    public String deleteUser(@PathVariable("id") int id){
        return userService.deleteUser(id);
    }


    @PostMapping("/login")
    public User login(@RequestBody Credential credential) {
        User userResult = userService.login(credential.getUsername(),credential.getPassword());

        if(userResult!=null){
            return userResult;
        } else{
            throw new RuntimeException("login non riuscito");
        }
    }


}

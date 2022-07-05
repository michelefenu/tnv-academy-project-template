package com.thenetvalue.sbTutorial1.controller;

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
    public UserController(UserService userService) {
        this.userService = userService;
    }
    @PostMapping("/")
    public String addUser(@RequestBody User user){
        return userService.addUser( user);
    }

    @GetMapping("/{id}")
    public User getUserById(@PathVariable("id") int id){
        return userService.getUser(id);
    }

    @GetMapping("/username/{username}/password/{password}")
    public ResponseEntity getUserByUsernameAndPassword( @PathVariable("username") String username,
                                              @PathVariable("password") String password){
        User user = userService.getUserByUsernameAndPassword(username, password);
        if(user != null){
            return new ResponseEntity(user,HttpStatus.OK);
        }
        return new ResponseEntity(HttpStatus.NOT_FOUND);
    }

    @GetMapping("/username/{username}")
    public Iterable<User> getUsersByUsernameContains(@PathVariable("username") String username){
        return userService.getUsersByUsernameContains(username);
    }

    //allUsers get
    @GetMapping("/")
    public Iterable<User> getUsers()  {
        return userService.getUsers();
    }

    //updateUsers put
    @PutMapping("/{id}")
    public String putUser(@PathVariable("id") int id,@RequestBody User user)  {
        return userService.putUser(id,user);
    }

    @DeleteMapping("/{id}")
    public String deleteUser( @PathVariable("id") int id ){
        return userService.deleteUser(id);
    }


}

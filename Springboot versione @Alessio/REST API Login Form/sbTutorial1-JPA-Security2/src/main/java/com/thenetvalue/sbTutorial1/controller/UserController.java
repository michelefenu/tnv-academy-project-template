package com.thenetvalue.sbTutorial1.controller;

import com.thenetvalue.sbTutorial1.model.Credential0;
import com.thenetvalue.sbTutorial1.model.User;
import com.thenetvalue.sbTutorial1.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.security.saml2.Saml2RelyingPartyProperties;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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

    @GetMapping("search/username/{partialUsername}")
    public List<User> searchUsernameByUsername(@PathVariable("partialUsername") String partialUsername) {
        return this.userService.findUserByUsername(partialUsername);
    }

    /*** Versione @GetMapping del metodo di login
     * Metodo login riceve due parametri
     * @Param Username,
     * @Param Password
     *
     * Per i test si possono inserire nell'interfaccia Parametri
     * (queste due user sono le uniche in database registrate con password cryptata):
     *
     *      key    "username": "crypto3",
     *      value  "password": "crypto3";
     *
     *      key    "username": "crypto2",
     *      value  "password": "crypto2";
     *
     * Il metodo login in @GetMapping esegue un return di messaggi di login avvenuta con successo o permesso rifiuato
     */
    @GetMapping("/loginStatus")
    public String checkLoginStatus(@RequestParam String username,@RequestParam String password){
        return userService.checkLoginStatus(username,password);
    }

    /*** Versione @PostMapping del metodo di login
     * Per i test si possono inserire in Postaman: Body/raw/text/JSON i seguenti dati
     * (queste due user sono le uniche in database registrate con password cryptata):
     *
     *     {
     *     "username": "crypto2",
     *     "password": "crypto2"
     *     }
     *
     *      {
     *      "username": "crypto3",
     *      "password": "crypto3
     *      }
     *
     * */
    @PostMapping("/login")
    public String loginPost(@RequestBody Credential0 userCredential){return userService.loginPost(userCredential);}

    @PostMapping("/logout")
    public String logout(@RequestBody User user){return userService.logoutPost(user);}


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

    //TODO public String login(String username, String password) -> restituisce OK se username e password coincidono con quelle del db
    //Con la POST dovete creare un oggetto di classe Credential che contiene username e password
    // { "username" : "....", "password" : "...." }


}

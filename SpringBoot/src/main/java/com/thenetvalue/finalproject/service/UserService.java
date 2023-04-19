package com.thenetvalue.finalproject.service;

import com.thenetvalue.finalproject.DAO.UserRepositoryDAO;
import com.thenetvalue.finalproject.controller.exceptions.UserRegistrationException;
import com.thenetvalue.finalproject.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import javax.naming.AuthenticationException;
import java.util.List;

@Service
public class UserService {
    UserRepositoryDAO userDAO;                                //Interface with logics and methods
    @Autowired                             //Dependency Injection, Qualifier non necessario ma utile
    public UserService(@Qualifier("dbUserDAO") UserRepositoryDAO userDAO) {
        this.userDAO = userDAO;
    }
    //Implemented methods
//    public String register(User user) throws UserRegistrationException {         //User must not be null > IllegalArgumentException
//        User newUser = new User();                                                //new User inzialized
//        for (User anyUser : userDAO.findAll()){                             //for each User in DB
//            if (!(anyUser.getUsername().equalsIgnoreCase(user.getUsername()))){   
////                newUser.setUsername(user.getUsername());
////                newUser.setPassword((user.getPassword()));
//                newUser = userDAO.save(user);           //do not invert with saving in authorityDAO!!!
//                if (newUser != null){                                               //if new user is not null
//                    return "New user " + user.getUsername() + " saved correctly";   //return new data
//                }
//            }
//            else {
//                return "Error, this username already exist";                //return error
//            }
//        }
//            throw new UserRegistrationException();                           //return error 
//    }

    //    public String login(String username, String password) {
//        try {
//            User user = userDAO.findByUsernameIs(username).get(0);
//            if (password == user.getPassword()) {
//                return "Login successful";
//            }
//            else {
//                return "ERROR! wrong password, retry";
//            }
//        } catch (Exception i){
//            return "ERROR! Username is not correct, retry";
//        }
//    }
    public User testRegister(User user) throws UserRegistrationException {
        for (User anyUser : userDAO.findAll()) {                             //for each User in DB
            if (anyUser.getUsername().equals(user.getUsername())) {
                //check on empty field are demanded to JS?
                throw new UserRegistrationException();
            }
        }
        User newUser = userDAO.save(user);
        return newUser;   //return new data
    }

    public User testLogin(String username, String password) throws AuthenticationException {
        List<User> users = userDAO.findByUsernameIs(username); //assuming there is just one value in list
        if (users.isEmpty()) {
            throw new AuthenticationException();
        }
        User user = users.get(0);
        if (!password.equals(users.get(0).getPassword())) {
            throw new AuthenticationException();
        }
        return user;
    }
}

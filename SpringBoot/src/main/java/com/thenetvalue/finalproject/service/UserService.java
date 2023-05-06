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
    @Autowired                             
    public UserService(@Qualifier("dbUserDAO") UserRepositoryDAO userDAO) {
        this.userDAO = userDAO;
    }
    
    public User register(User user) throws UserRegistrationException {
        for (User anyUser : userDAO.findAll()) {                             //for each User in DB
            if (anyUser.getUsername().equals(user.getUsername())) {
                //check on empty field are demanded to JS?
                throw new UserRegistrationException();
            }
        }
        User newUser = userDAO.save(user);
        return newUser;   //return new data
    }

    public User login(String username, String password) throws AuthenticationException {
        List<User> users = userDAO.findByUsernameIs(username); //assuming there is just one value in list
        if (users.isEmpty()) {
            throw new AuthenticationException();
        }
        User user = users.get(0);
        if (!password.equals(users.get(0).getPassword())) {
            throw new AuthenticationException();
        }
        user.setPassword(""); //hide password
        return user;
    }
}

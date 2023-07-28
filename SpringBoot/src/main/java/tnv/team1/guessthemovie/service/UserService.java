package tnv.team1.guessthemovie.service;


import tnv.team1.guessthemovie.exceptions.PasswordException;
import tnv.team1.guessthemovie.exceptions.UserExistingException;
import tnv.team1.guessthemovie.model.User;
import tnv.team1.guessthemovie.DAO.UserRepositoryDAO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service("userService")
public class UserService implements UserServiceInterface {
    @Autowired
    private UserRepositoryDAO userRepositoryDAO;


    public User findByUsername(String Username) {
        return null;
    }

    public Iterable<User> getAllUsers(){
        return userRepositoryDAO.findAll();
    }
    public User getUser(int id){
        Optional<User> user = this.userRepositoryDAO.findById(id);
        if(user.isPresent()){
            return user.get();
        } return null;
    }


    public void registerUser(User user) {
        User existingUser = userRepositoryDAO.findByUsername(user.getUsername());
        if(existingUser == null) {
            userRepositoryDAO.save(user);
        } else {
            throw new UserExistingException("Username già in uso!");
        }
    }

    public User loginUser(String username, String password){
        User user = userRepositoryDAO.findByUsername(username);
        if(user != null && user.getPassword().equals(password)){
            return user;
        }else{
            throw new PasswordException("Password sbagliata!");
        }
    }
}

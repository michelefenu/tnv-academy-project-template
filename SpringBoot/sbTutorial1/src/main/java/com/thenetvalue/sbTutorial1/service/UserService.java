package com.thenetvalue.sbTutorial1.service;

import com.thenetvalue.sbTutorial1.dao.UserRepositoryDAO;
import com.thenetvalue.sbTutorial1.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {
    UserRepositoryDAO userDAO;
    @Autowired
    PasswordEncoder passwordEndcoder;

    @Autowired
    public UserService(@Qualifier("dbUserDAO") UserRepositoryDAO userDAO){
        this.userDAO=userDAO;
    }

    public User addUser(User user){
        user.setPassword(passwordEndcoder.encode(user.getPassword()));
        User resultUser = userDAO.save(user);
        return resultUser;
        /*
        if(resultUser!=null){
            return "Utente salvato correttamente";
        }else {
            return "Errore nel salvataggio dell'utente";
        }
         */
    }

    public User getUser(int id){
        return userDAO.findById(id).get();
    }

    public Iterable<User> findAllUsers(){
        return userDAO.findAll();
    }

    public User findUserByUsername(String username){
        return userDAO.findByUsername(username);
    }

    public List<User> findUserByUsernameContains(String partialUsername){
        return userDAO.findByUsernameContains(partialUsername);
    }

    public String updateUser(int id, User user){
        user.setId(id);
        user.setPassword(passwordEndcoder.encode(user.getPassword()));
        User resultUser = userDAO.save(user);
        if(resultUser!=null){
            return "Utente modificato correttamente";
        }else{
            return "Errore nell'aggiornamento dell'utente";
        }
    }

    public String deleteUser(int id){
        /*Opz 1
        Integer idInteger = id;
        userDAO.deleteById(idInteger);
        User userResult = getUser(id);
        if(userResult==null){
            return "Utente eliminato correttamente";
        }else{
            return "Errore nell'eliminazione dell'utente";
        }
        */
        User userResult = userDAO.findById(id).orElse(null);
        if(userResult==null){
            return "Utente non presente";
        }else{
            userDAO.deleteById(id);
            return "Utente eliminato correttamente!";
        }
    }

    public User login(String username, String password) throws RuntimeException{
        User userResult = userDAO.findByUsername(username);
        //String encodedPassword = passwordEndcoder.encode(password);
        if((userResult!=null)&&(passwordEndcoder.matches(password, userResult.getPassword()))){
                       return userResult;
        }else {
            return  null;
        }
    }
}

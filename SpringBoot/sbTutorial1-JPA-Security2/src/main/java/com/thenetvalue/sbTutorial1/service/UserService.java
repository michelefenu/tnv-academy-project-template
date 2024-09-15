package com.thenetvalue.sbTutorial1.service;

import com.thenetvalue.sbTutorial1.dao.UserRepositoryDAO;
import com.thenetvalue.sbTutorial1.model.Credential;
import com.thenetvalue.sbTutorial1.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.context.annotation.Bean;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.security.crypto.bcrypt.BCrypt;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;

@Service
public class UserService {
    UserRepositoryDAO userDAO;

    @Autowired
    PasswordEncoder passwordEncoder;

    @Autowired
    JdbcTemplate jdbcTemplate;

    @Autowired
    public UserService(@Qualifier("dbUserDAO") UserRepositoryDAO userDAO){
        this.userDAO = userDAO;
    }

    public String addUser(User user) {
        //TODO encoding password prima del salvataggio
        user.setPassword(this.passwordEncoder.encode(user.getPassword()));
        User resultUser = userDAO.save(user);

        String ruolo = "ROLE_USER";
        String sql = "INSERT INTO authorities (username, authority) VALUES (?, ?)";
        jdbcTemplate.update(sql, user.getUsername(), ruolo);

        if (resultUser != null) {
            return "Utente salvato correttamente";
        } else {
            return "Errore nel salvataggio dell'utente";
        }
    }

    public User getUser(int id) {
        return userDAO.findById(id).get();
    }

    public Iterable<User> allUsers() {
        return userDAO.findAll();
    }

    public List<User> findUserByPartialUsername(String partialUsername) {
        return userDAO.findByUsernameContains(partialUsername);
    }

    public User findUserByUsername(String username){
        return userDAO.findUserByUsername(username);
    }

    public String updateUser(int id, User user) {
        user.setId(id);
        user.setPassword(this.passwordEncoder.encode(user.getPassword()));
        User resultUser = userDAO.save(user);

        String ruolo = "ROLE_USER";
        String sql = "INSERT INTO authorities (username, authority) VALUES (?, ?)";
        jdbcTemplate.update(sql, user.getUsername(), ruolo);

        if (resultUser != null) {
            return "Utente aggiornato correttamente";
        } else {
            return "Errore nell'aggiornamento dell'utente";
        }
    }

    public String deleteUser(int id) {
        User resultUser = userDAO.findById(id).orElse(null);
        if (resultUser == null) {
            return "Utente non trovato!";
        } else {
            userDAO.delete(resultUser);
            return "Utente cancellato correttamente";
        }
    }

    public String login(Credential credential){

        User userDB = findUserByUsername(credential.getUsername());

        if (BCrypt.checkpw(credential.getPassword(),userDB.getPassword())){
            return "Login eseguito";
        } else{
            return "Errore nel login";
        }
    }

}

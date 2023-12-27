package com.thenetvalue.sbTutorial1.service;

import com.thenetvalue.sbTutorial1.dao.UserRepositoryDAO;
import com.thenetvalue.sbTutorial1.model.Credential0;
import com.thenetvalue.sbTutorial1.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.boot.autoconfigure.ldap.embedded.EmbeddedLdapProperties;
import org.springframework.boot.autoconfigure.security.saml2.Saml2RelyingPartyProperties;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {
    UserRepositoryDAO userDAO;

    @Autowired
    PasswordEncoder passwordEncoder;

    @Autowired
    public UserService(@Qualifier("dbUserDAO") UserRepositoryDAO userDAO) {
        this.userDAO = userDAO;
        this.passwordEncoder = passwordEncoder;
    }

    public String addUser(User user) {
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        //TODO encoding password prima del salvataggio
        //this.passwordEncoder......
        User resultUser = userDAO.save(user);
        //this.passwordEncoder.encode(user.getPassword());

        if (resultUser != null) {

            return "Utente salvato correttamente";
        } else {
            return "Errore nel salvataggio dell'utente";
        }
    }


    public String checkLoginStatus(String username, String password) {
        if (username == null || username.isEmpty() || password == null || password.isEmpty()) {
            return "ERROR: Permission denied. Please provide valid credentials.";
        }

        Optional<User> optionalUser = userDAO.findByUsername(username);

        if (optionalUser.isEmpty()) {
            return "ERROR: Username not found.";
        }

        User user = optionalUser.get();

        if (passwordEncoder.matches(password, user.getPassword())) {
            String loginStatus = user.isEnabled() ? "Online" : "Offline";
            return "Login status: " + loginStatus;
        } else {
            return "ERROR: Wrong Password - Permission denied.";
        }
    }



    public String loginPost(Credential0 userCredential) {
        Optional<User> userInDao = userDAO.findByUsername(userCredential.getUsername());

        if (userInDao.isPresent()) {
            User user0 = userInDao.get();

            if (passwordEncoder.matches(userCredential.getPassword(), userInDao.get().getPassword())) {
                user0.setEnabled(); // Imposta l'utente come abilitato
                userDAO.save(user0); // Salva la modifica nel database

                return "Login ok.\n" + userInDao.get().getUsername() + " Status: Online";
            } else {
                return "ERROR: Wrong Password - permission denied";
            }
        } else {
            return "ERROR: username not found";
        }
    }

    public String logoutPost(User user) {
        Optional<User> userInDao = userDAO.findByUsername(user.getUsername());

        if (userInDao.isPresent()) {
            User user0 = userInDao.get();

            if (passwordEncoder.matches(user.getPassword(), userInDao.get().getPassword())) {
                if (userInDao.get().isEnabled()) {
                    userInDao.get().setDisabled(); // Imposta l'utente come disabilitato
                    userDAO.save(user0); // Salva la modifica nel database

                    return "Logout user.\n" + userInDao.get().getUsername() + " Status: Offline";
                } else {
                    return "ERROR: User is already offline.";
                }
            } else {
                return "ERROR: Logout failed - Wrong Password";
            }
        } else {
            return "ERROR: User not found";
        }
    }

     /* backup metods for login and check-status:
    public String checkLoginStatus(String username, String password);
    public String loginPost(Credential0 userCredential);


    public String login(String username, String password) {
        if (username == null || username.isEmpty() || password == null || password.isEmpty()) {
            return "ERROR permission denied: Any account found. Please register. ";
        }

        Optional<User> optionalUser = userDAO.findByUsername(username);

        if (optionalUser.isEmpty()) {
            return "ERROR: username not found";
        }

        User user = optionalUser.get(); // cast Optional<User> to User

        if (passwordEncoder.matches(password, user.getPassword())) {
            boolean LoginStatusEnabled = user.isEnabled();
            return "Login ok.\n"+optionalUser.get().getUsername()+" Status: Online";
        } else {
            return "ERROR: Wrong Password - permission denied";
        }
    }
     */


    /*
    public String loginPost(Credential0 userCredential) {
        Optional<User> userInDao = userDAO.findByUsername(userCredential.getUsername());

        if (userInDao.isPresent()) {
            User user0 = userInDao.get();

            if (passwordEncoder.matches(userCredential.getPassword(), userInDao.get().getPassword())) {
                boolean enabled = user0.isEnabled();
                return "Login ok.\n"+userInDao.get().getUsername()+" Status: Online";
            } else {
                userInDao.get().isEnabled();
                return "ERROR: Wrong Password - permission denied";
            }
        } else {
            return "ERROR: username not found";
        }
    }

    */

    public User getUser(int id) {
        return userDAO.findById(id).get();
    }

    public Iterable<User> allUsers() {
        return userDAO.findAll();
    }

    public List<User> findUserByUsername(String partialUsername) {
        return userDAO.findByUsernameContains(partialUsername);
    }


    public List<User> findByUsernameComplete(String username) {
        return userDAO.findByUsernameContains(username);
    }

    public String updateUser(int id, User user) {
        user.setId(id);
        User resultUser = userDAO.save(user);
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
}

/** Questa è un'interfaccia che definisce i metodi per il servizio degli utenti. Contiene le firme dei metodi per
 * ottenere tutti gli utenti, ottenere un utente per ID,
 * registrare un nuovo utente e consentire il login di un utente esistente. */

package tnv.team1.guessthemovie.service;

import tnv.team1.guessthemovie.model.User;

public interface UserServiceInterface {
    public Iterable<User> getAllUsers();
    public User getUser(int id);
    public void registerUser(User user);
    public User loginUser(String username, String password);
}

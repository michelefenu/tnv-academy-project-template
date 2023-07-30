/** Questa è un'altra classe eccezione personalizzata che estende RuntimeException.
Viene lanciata quando si tenta di registrare un utente con un nome utente già esistente. */

package tnv.team1.guessthemovie.exceptions;

//exception in caso di username gia esistente in fase di registrazione
public class UserExistingException extends RuntimeException{
    public UserExistingException(String message){
        super(message);
    }
}

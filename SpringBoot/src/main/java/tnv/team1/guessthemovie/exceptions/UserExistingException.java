package tnv.team1.guessthemovie.exceptions;

//exception in caso di username gia esistente in fase di registrazione
public class UserExistingException extends RuntimeException{
    public UserExistingException(String message){
        super(message);
    }
}

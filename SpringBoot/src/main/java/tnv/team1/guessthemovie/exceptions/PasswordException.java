/** Questa è una classe eccezione personalizzata che estende RuntimeException.
Viene lanciata quando si verifica un'eccezione relativa a una password errata. */

package tnv.team1.guessthemovie.exceptions;

public class PasswordException extends RuntimeException{
    public PasswordException(String message){
        super(message);
    }
}

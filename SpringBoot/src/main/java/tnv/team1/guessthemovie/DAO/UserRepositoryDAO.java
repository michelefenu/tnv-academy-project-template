/** Questa interfaccia definisce un'interfaccia di accesso ai dati (DAO) per la gestione degli utenti.
Estende CrudRepository<User, Integer>, che fornisce operazioni di base per la persistenza degli utenti,
come l'inserimento, la modifica, l'eliminazione e la ricerca. */

package tnv.team1.guessthemovie.DAO;
import tnv.team1.guessthemovie.model.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository("dbUserDAO")
public interface UserRepositoryDAO extends CrudRepository<User, Integer> {
    User findByUsername(String Username);

}

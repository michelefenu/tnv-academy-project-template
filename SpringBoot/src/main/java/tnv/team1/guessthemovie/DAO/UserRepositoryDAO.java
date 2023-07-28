package tnv.team1.guessthemovie.DAO;
import tnv.team1.guessthemovie.model.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository("dbUserDAO")
public interface UserRepositoryDAO extends CrudRepository<User, Integer> {
    User findByUsername(String Username);

}

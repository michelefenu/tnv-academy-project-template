package com.thenetvalue.sbTutorial1.dao;

import com.thenetvalue.sbTutorial1.model.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository("dbUserDAO")
public interface UserRepositoryDAO extends CrudRepository<User, Integer> {
    public List<User> findByUsernameContains(String partialUsername);
    public List<User> findByPassword(String password);
    public Optional<User> findByUsername(String username);
    //public Optional<User> findByUsername(String username);
}

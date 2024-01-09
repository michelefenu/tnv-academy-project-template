package com.thenetvalue.sbTutorial1.dao;

import com.thenetvalue.sbTutorial1.model.Credential;
import com.thenetvalue.sbTutorial1.model.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository("dbUserDAO")
public interface UserRepositoryDAO extends CrudRepository<User, Integer> {
    public List<User> findByUsernameContains(String partialUsername);
    public User findUserByUsername(String username);
}

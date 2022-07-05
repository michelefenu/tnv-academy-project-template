package com.thenetvalue.sbTutorial1.dao;

import com.thenetvalue.sbTutorial1.model.User;
import com.thenetvalue.sbTutorial1.repository.InMemoryDatabase;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository("firstUserDao")
public class InMemoryUserDAO implements UserDAO {

    @Override
    public int addUser(User user) {
        return InMemoryDatabase.addUser(user);
    }

    @Override
    public User getUserById(int id) {
        return InMemoryDatabase.getUserById(id);
    }

    @Override
    public User getUserByNome(String nome) {
        return null;
    }

    @Override
    public List<User> getUsers() {
        return InMemoryDatabase.getUsers();
    }

    @Override
    public int putUser(int id, User user) {
        return InMemoryDatabase.putUser(id, user);
    }

    @Override
    public int deleteUser(int id) {
        return InMemoryDatabase.deleteUser(id);
    }
}

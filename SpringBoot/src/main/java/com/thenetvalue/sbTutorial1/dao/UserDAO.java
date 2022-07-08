package com.thenetvalue.sbTutorial1.dao;

import com.thenetvalue.sbTutorial1.model.User;

import java.util.List;

public interface UserDAO {
    public int addUser(User user);
    public User getUserById(int id);
    public User getUserByNome( String nome);
    public List<User> getUsers();
    public int putUser(int id, User user);
    public int deleteUser(int id);

}

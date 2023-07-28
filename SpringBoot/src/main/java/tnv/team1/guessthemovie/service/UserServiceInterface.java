package tnv.team1.guessthemovie.service;

import tnv.team1.guessthemovie.model.User;

public interface UserServiceInterface {
    public Iterable<User> getAllUsers();
    public User getUser(int id);
    public void registerUser(User user);
    public User loginUser(String username, String password);
}

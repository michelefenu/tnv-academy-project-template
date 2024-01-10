package com.thenetvalue.sbTutorial1.model;

import jakarta.persistence.*;

@Entity

public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    //@SequenceGenerator(name = "userSequence", sequenceName = "user_seq", allocationSize = 1)
    private int id;
    private String name;
    private String surname;
    private String username;
    private String password;
    private boolean enabled = true;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSurname() {
        return surname;
    }

    public void setSurname(String surname) {
        this.surname = surname;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
/*
    public boolean isEnabled() {
        return enabled;
    }

    public void setEnabled(boolean enabled) {
        this.enabled = enabled;
    }
 */
}

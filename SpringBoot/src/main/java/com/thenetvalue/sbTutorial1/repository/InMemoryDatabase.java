package com.thenetvalue.sbTutorial1.repository;

import com.thenetvalue.sbTutorial1.model.User;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class InMemoryDatabase {
   static Map< Integer,User> users = new HashMap<>();
   static int lastIndex = 0;

   public static int addUser (User user ){
       user.setId(++lastIndex);
       users.put(user.getId(), user);
       return 1;
   }

   public static User getUserById( int id){
       return users.get(id);

   }

    public static List<User> getUsers() {
       return new ArrayList<User>(users.values()) ;
    }

    public static int putUser(int id, User user) {
       users.put(id, user);
       return 1;
    }

    public static int deleteUser(int id) {
        users.remove(id);
        return 1;
    }
}

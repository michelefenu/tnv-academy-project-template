package com.thenetvalue.finalproject.DAO;

import com.thenetvalue.finalproject.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository("dbUserDAO")
public interface UserRepositoryDAO extends JpaRepository<User, Integer> {  /*CrudRepository<T,ID>
extends Repository<T,ID>  Interface for generic CRUD operations on a repository for a specific type.*/
    public List<User> findByUsernameIs(String username);
}

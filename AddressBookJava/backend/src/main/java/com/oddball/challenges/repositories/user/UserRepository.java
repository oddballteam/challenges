package com.oddball.challenges.repositories.user;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.oddball.challenges.entities.user.User;

@Repository
public interface UserRepository extends CrudRepository<User, Long> {

}


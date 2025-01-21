package com.oddball.challenges.repositories.oddball;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.oddball.challenges.entities.oddball.Oddball;

@Repository
public interface OddballRepository extends CrudRepository<Oddball, Long> {

}


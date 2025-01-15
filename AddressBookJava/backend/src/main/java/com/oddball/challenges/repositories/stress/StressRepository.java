package com.oddball.challenges.repositories.stress;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.oddball.challenges.entities.stress.Stress;

@Repository
public interface StressRepository extends CrudRepository<Stress, Long> {

}


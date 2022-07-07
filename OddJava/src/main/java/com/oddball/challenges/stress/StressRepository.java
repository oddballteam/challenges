package com.oddball.challenges.stress;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StressRepository extends CrudRepository<Stress, Long> {

}


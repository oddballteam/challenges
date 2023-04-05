package com.oddball.challenges.mood;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MoodRepository extends CrudRepository<Mood, Long> {

}


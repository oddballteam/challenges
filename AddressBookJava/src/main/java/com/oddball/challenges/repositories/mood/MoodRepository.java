package com.oddball.challenges.repositories.mood;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.oddball.challenges.entities.mood.Mood;

@Repository
public interface MoodRepository extends CrudRepository<Mood, Long> {

}


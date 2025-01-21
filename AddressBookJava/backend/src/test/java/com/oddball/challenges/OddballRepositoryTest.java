package com.oddball.challenges;

import static org.assertj.core.api.Assertions.assertThat;

import java.util.List;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.oddball.challenges.entities.oddball.Oddball;
import com.oddball.challenges.repositories.oddball.OddballRepository;

@SpringBootTest
public class OddballRepositoryTest {

    @Autowired
    private OddballRepository oddballRepository;

    @Test
    public void whenCalled_thenCorrectNumberOfOddball() {
        List<Oddball> oddball = (List<Oddball>) oddballRepository.findAll();
        assertThat(oddball.size()).isEqualTo(5000);
    }
}


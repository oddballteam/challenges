package com.oddball.challenges;

import static org.assertj.core.api.Assertions.assertThat;

import com.oddball.challenges.mood.Mood;
import com.oddball.challenges.mood.MoodRepository;
import java.util.List;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;

@DataJpaTest
public class MoodRepositoryTest {

    @Autowired
    private MoodRepository moodRepository;

    @Test
    public void whenCalled_thenCorrectNumberOfMoods() {
        List<Mood> moods = (List<Mood>) moodRepository.findAll();
        assertThat(moods.size()).isEqualTo(150408);
    }
}


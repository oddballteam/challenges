package com.oddball.challenges;

import com.oddball.challenges.mood.Mood;
import com.oddball.challenges.mood.MoodRepository;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;

@RunWith(SpringRunner.class)
@DataJpaTest
public class MoodRepositoryTest {

    @Autowired
    private MoodRepository moodRepository;

    @Test
    public void whenCalled_thenCorrectNumberOfMoods() throws Exception {
        List<Mood> moods = (List<Mood>) moodRepository.findAll();
        assertThat(moods.size()).isEqualTo(150408);
    }
}


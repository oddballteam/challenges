package com.oddball.challenges;

import com.oddball.challenges.stress.Stress;
import com.oddball.challenges.stress.StressRepository;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;

@RunWith(SpringRunner.class)
@DataJpaTest
public class StressRepositoryTest {

    @Autowired
    private StressRepository stressRepository;

    @Test
    public void whenCalled_thenCorrectNumberOfStress() throws Exception {
        List<Stress> stress = (List<Stress>) stressRepository.findAll();
        assertThat(stress.size()).isEqualTo(150417);
    }
}


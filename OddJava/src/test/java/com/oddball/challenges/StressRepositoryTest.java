package com.oddball.challenges;

import static org.assertj.core.api.Assertions.assertThat;

import com.oddball.challenges.stress.Stress;
import com.oddball.challenges.stress.StressRepository;
import java.util.List;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;

@DataJpaTest
public class StressRepositoryTest {

    @Autowired
    private StressRepository stressRepository;

    @Test
    public void whenCalled_thenCorrectNumberOfStress() {
        List<Stress> stress = (List<Stress>) stressRepository.findAll();
        assertThat(stress.size()).isEqualTo(150417);
    }
}


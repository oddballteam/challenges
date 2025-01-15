package com.oddball.challenges;

import static org.assertj.core.api.Assertions.assertThat;

import java.util.List;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;

import com.oddball.challenges.entities.stress.Stress;
import com.oddball.challenges.repositories.stress.StressRepository;

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


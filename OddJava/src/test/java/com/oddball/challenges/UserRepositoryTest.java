package com.oddball.challenges;

import static org.assertj.core.api.Assertions.assertThat;

import com.oddball.challenges.user.User;
import com.oddball.challenges.user.UserRepository;
import java.util.List;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;

@DataJpaTest
public class UserRepositoryTest {

    @Autowired
    private UserRepository userRepository;

    @Test
    public void whenCalled_thenCorrectNumberOfUsers() {
        List<User> users = (List<User>) userRepository.findAll();
        assertThat(users.size()).isEqualTo(1000);
    }
}


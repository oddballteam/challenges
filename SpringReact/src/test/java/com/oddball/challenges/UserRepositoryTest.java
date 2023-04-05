package com.oddball.challenges;

import com.oddball.challenges.user.User;
import com.oddball.challenges.user.UserRepository;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;

@RunWith(SpringRunner.class)
@DataJpaTest
public class UserRepositoryTest {

    @Autowired
    private UserRepository userRepository;

    @Test
    public void whenCalled_thenCorrectNumberOfUsers() throws Exception {
        List<User> users = (List<User>) userRepository.findAll();
        assertThat(users.size()).isEqualTo(1000);
    }
}


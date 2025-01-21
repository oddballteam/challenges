package com.oddball.challenges.components;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import com.oddball.challenges.entities.oddball.Oddball;

import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.transaction.Transactional;
import net.datafaker.Faker;

@Component
public class OddballDataGenerator implements CommandLineRunner {

    @PersistenceContext
    private EntityManager entityManager;

    @Override
    @Transactional
    public void run(String... args) throws Exception {
        // Check if the table already has data
        Long count = (Long) entityManager.createQuery("SELECT COUNT(o) FROM Oddball o").getSingleResult();

        if (count == 0) {
            Faker faker = new Faker();

            for (int i = 0; i < 5000; i++) {
                Oddball oddball = new Oddball();
                oddball.setFirstName(faker.name().firstName());
                oddball.setLastName(faker.name().lastName());
                oddball.setStreet(faker.address().streetAddress());
                oddball.setCity(faker.address().city());
                oddball.setState(faker.address().state());
                oddball.setZip(faker.address().zipCode());
                oddball.setPhone(faker.phoneNumber().phoneNumber());
                oddball.setEmail(faker.internet().emailAddress());
                entityManager.persist(oddball);
            }

            System.out.println("Data generation completed. 5000 records inserted.");
        } else {
            System.out.println("Data already exists. Skipping generation.");
        }
    }
}
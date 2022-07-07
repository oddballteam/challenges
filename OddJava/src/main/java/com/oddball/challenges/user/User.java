package com.oddball.challenges.user;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@Entity
@NoArgsConstructor
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(length = 100)
    private String name;

    @Column(length = 100)
    private String userName;

    @Column(length = 100)
    private String zipCode;

    User(String userName, String name, String zipCode) {
        this.name = name;
        this.userName = userName;
        this.zipCode = zipCode;
    }
}
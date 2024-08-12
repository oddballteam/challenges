package com.oddball.challenges.mood;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import java.util.Date;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@Entity
@Table(name = "moods")
public class Mood {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private long id;

    @Column(name="userId")
    private long userId;

    @Column(name = "date", columnDefinition = "date")
    private Date date;

    @Column(name = "mood", length = 1)
    private int mood;

    @Column(name = "description", length = 255)
    private String description;

    Mood(long userId, Date date, int mood, String description) {
        this.userId = userId;
        this.date = date;
        this.mood = mood;
        this.description = description;
    }
}
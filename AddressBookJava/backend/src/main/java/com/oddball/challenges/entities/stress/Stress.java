package com.oddball.challenges.entities.stress;

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
@Table(name = "stress")
public class Stress {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private long id;

    @Column(name = "userId")
    private long userId;

    @Column(name="date", columnDefinition = "date")
    private Date date;

    @Column(name="stress", length = 1)
    private int stress;

    Stress(long userId, Date date, int stress) {
        this.userId = userId;
        this.date = date;
        this.stress = stress;
    }
}
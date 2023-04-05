package com.oddball.challenges.stress;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.Date;

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
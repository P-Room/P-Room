package com.yejun.proom.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.*;

@NoArgsConstructor
@AllArgsConstructor
@Builder
@Getter
@Setter
@Entity
public class Question {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long questionId;

    @Column(nullable = false)
    private Long personId;

    @ManyToOne
    @JoinColumn(name = "recruitment_id")
    @JsonBackReference
    private Recruitment recruitment;

    @Column(nullable = false)
    private String title;

    @Lob
    private String answer;

    private String hashtag;
}

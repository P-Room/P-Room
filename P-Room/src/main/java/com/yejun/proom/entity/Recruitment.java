package com.yejun.proom.entity;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.yejun.proom.entity.enums.RecruitCondition;
import jakarta.persistence.*;
import lombok.*;

import java.util.Date;
import java.util.List;

@NoArgsConstructor
@AllArgsConstructor
@Builder
@Getter
@Setter
@Entity
@ToString
public class Recruitment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long recruitmentId;

    @Column(nullable = false)
    private Long personId;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private String company;

    private String link;

    @Temporal(TemporalType.DATE)
    @Column(nullable = false)
    private Date startDate;

    @Temporal(TemporalType.DATE)
    @Column(nullable = false)
    private Date deadline;

    @Enumerated(EnumType.STRING)
    private RecruitCondition cond;

    @OneToMany(mappedBy = "recruitment", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JsonManagedReference
    private List<Question> questions;
}

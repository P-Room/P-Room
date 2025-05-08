package com.yejun.proom.repository;

import com.yejun.proom.entity.Recruitment;
import com.yejun.proom.entity.enums.RecruitCondition;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Date;
import java.util.List;
import java.util.Optional;

@Repository
public interface RecruitmentRepository extends JpaRepository<Recruitment, Long> {

    Page<Recruitment> findByPersonId(Pageable pageable, Long personId);

    Page<Recruitment> findByPersonIdAndNameIsLike(Pageable pageable, Long personId, String keyword);

    @EntityGraph(attributePaths = {"questions"}) // N + 1 문제 발생 해결
    @Query("SELECT DISTINCT r FROM Recruitment r JOIN r.questions q WHERE q.personId = :personId AND q.hashtag LIKE CONCAT('%', :keyword, '%')")
    Page<Recruitment> findByHashtagIsLike(Pageable pageable, @Param("personId") Long personId, @Param("keyword") String keyword);

    @Query("SELECT DISTINCT r FROM Recruitment r JOIN FETCH r.questions where r.recruitmentId = :recruitmentId")
    Optional<Recruitment> findByRecruitmentIdWithQuestionUsingFetchJoin(@Param("recruitmentId") Long recruitmentId);
}

package com.yejun.proom.service;

import com.yejun.proom.entity.Recruitment;
import com.yejun.proom.repository.RecruitmentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.NoSuchElementException;

@Service
public class RecruitmentService {

    @Autowired
    private RecruitmentRepository recruitmentRepository;

    public Page<Recruitment> findRecruitmentsByPersonId(Pageable pageable, Long personId) {
        return recruitmentRepository.findByPersonId(pageable, personId);
    }

    public Page<Recruitment> findRecruitmentsByPersonIdAndName(Pageable pageable, Long personId, String keyword) {
        return recruitmentRepository.findByPersonIdAndNameIsLike(pageable, personId, keyword);
    }

    public Page<Recruitment> findByHashtag(Pageable pageable, Long personId, String keyword) {
        return recruitmentRepository.findByHashtagIsLike(pageable, personId, keyword);
    }

    @Transactional
    public void deleteRecruitment(Long recruitmentId, Long personId) throws Exception {
        Recruitment recruitment = recruitmentRepository.findById(recruitmentId).orElseThrow(NoSuchElementException::new);
        if (!recruitment.getPersonId().equals(personId)) {
            throw new Exception("Person id does not match");
        }
        recruitmentRepository.deleteById(recruitmentId);
    }

}

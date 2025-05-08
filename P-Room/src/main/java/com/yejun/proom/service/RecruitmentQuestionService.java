package com.yejun.proom.service;

import com.yejun.proom.dto.request.QuestionRequestDTO;
import com.yejun.proom.dto.request.RecruitQuestionRequestDTO;
import com.yejun.proom.entity.Question;
import com.yejun.proom.entity.Recruitment;
import com.yejun.proom.repository.QuestionRepository;
import com.yejun.proom.repository.RecruitmentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.text.ParseException;
import java.util.*;

@Service
public class RecruitmentQuestionService {

    @Autowired
    private RecruitmentRepository recruitmentRepository;

    @Autowired
    private QuestionRepository questionRepository;

    @Transactional
    public Recruitment save(RecruitQuestionRequestDTO recruitmentRequestDTO, Long personId) throws ParseException {
        Recruitment recruitment = recruitmentRequestDTO.toRecruitment();
        recruitment.setPersonId(personId);
        recruitmentRepository.save(recruitment);

        Long recruitmentId = recruitment.getRecruitmentId();
        recruitment.setQuestions(new ArrayList<>());

        recruitmentRequestDTO.getQuestions().forEach(requestQuestion -> {
            Question question = Question.builder()
                .personId(personId)
                .recruitment(recruitment)
                .title(requestQuestion.getTitle())
                .answer(requestQuestion.getAnswer())
                .hashtag(requestQuestion.getHashtag())
                .build();
            recruitment.getQuestions().add(question);
            questionRepository.save(question);
        });

        return recruitmentRepository.findByRecruitmentIdWithQuestionUsingFetchJoin(recruitmentId).orElseThrow(NoSuchElementException::new);
    }

    public Recruitment getRecruitment(Long recruitmentId, Long personId) throws Exception {
        Recruitment recruitment = recruitmentRepository.findByRecruitmentIdWithQuestionUsingFetchJoin(recruitmentId).orElseThrow(NoSuchElementException::new);
        if (!recruitment.getPersonId().equals(personId)) {
            throw new Exception("Person id does not match");
        }
        return recruitment;
    }

    @Transactional
    public Recruitment update(RecruitQuestionRequestDTO recruitmentRequestDTO, Long personId) throws Exception {
        Recruitment targetRecruit = recruitmentRepository.findById(recruitmentRequestDTO.getRecruitmentId())
            .orElseThrow(NoSuchElementException::new);

        if (!targetRecruit.getPersonId().equals(personId)) {
            throw new Exception("Person id does not match");
        }

        Recruitment request = recruitmentRequestDTO.toRecruitment();

        targetRecruit.setName(request.getName());
        targetRecruit.setCompany(request.getCompany());
        targetRecruit.setCond(request.getCond());
        targetRecruit.setLink(request.getLink());
        targetRecruit.setStartDate(request.getStartDate());
        targetRecruit.setDeadline(request.getDeadline());


        recruitmentRepository.save(targetRecruit);

        /*
        *  요청에 들어온 id 들을 리스트로 만들고
        *  1. 요청에 id가 있으며 실제 questions에도 id가 존재하면 update이고
        *  2. 요청에 id가 null 실제 questions에 id가 있으면 delete
        *  3. 요청에 id가 있고 실제 questions에 없으면 버그
        *  4. 요청에 id가 null 실제 questions에 없으면 insert
        */

        Map<Long, QuestionRequestDTO> updateQuestions = new HashMap<>();
        List<QuestionRequestDTO> insertQuestions = new ArrayList<>();
        List<Long> deleteQuestions = new ArrayList<>();


        recruitmentRequestDTO.getQuestions().forEach(requestQuestion -> { // 요청 내부 반복
            if (requestQuestion.getQuestionId() == null) {
                insertQuestions.add(requestQuestion);
            } else {
                updateQuestions.put(requestQuestion.getQuestionId(), requestQuestion);
            }
        });

        targetRecruit.getQuestions().forEach(question -> {
            if (!updateQuestions.containsKey(question.getQuestionId())) {
                deleteQuestions.add(question.getQuestionId());
            }
        });

        List<Question> resultQuestions = new ArrayList<>();

        deleteQuestions.forEach(questionId -> {
            questionRepository.deleteById(questionId);
        });

        updateQuestions.forEach((id, questionDTO) -> {
            Question targetQuestion = questionRepository.findById(id).orElseThrow(NoSuchElementException::new);
            targetQuestion.setTitle(questionDTO.getTitle());
            targetQuestion.setAnswer(questionDTO.getAnswer());
            targetQuestion.setHashtag(questionDTO.getHashtag());

            resultQuestions.add(targetQuestion);

            questionRepository.save(targetQuestion);
        });

        insertQuestions.forEach(questionDTO -> {
            Question targetQuestion = Question.builder()
                .personId(personId)
                .recruitment(targetRecruit)
                .title(questionDTO.getTitle())
                .answer(questionDTO.getAnswer())
                .hashtag(questionDTO.getHashtag())
                .build();

            resultQuestions.add(targetQuestion);

            questionRepository.save(targetQuestion);
        });

        targetRecruit.setQuestions(resultQuestions);

        return targetRecruit;
    }
}

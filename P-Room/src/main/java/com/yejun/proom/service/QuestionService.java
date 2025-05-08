package com.yejun.proom.service;

import com.yejun.proom.repository.QuestionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class QuestionService {
    @Autowired
    private QuestionRepository questionRepository;

    public void deleteQuestion(Long id){
        questionRepository.deleteById(id);
    }

}

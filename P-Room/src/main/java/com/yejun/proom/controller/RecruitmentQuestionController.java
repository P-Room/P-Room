package com.yejun.proom.controller;

import com.yejun.proom.dto.request.RecruitQuestionRequestDTO;
import com.yejun.proom.entity.Person;
import com.yejun.proom.entity.Recruitment;
import com.yejun.proom.service.RecruitmentQuestionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

@RestController
public class RecruitmentQuestionController {
    @Autowired
    private RecruitmentQuestionService recruitmentQuestionService;

    @PostMapping("/api/recruit/insert")
    public Recruitment insertRecruitmentQuestion(@RequestBody RecruitQuestionRequestDTO recruitmentRequestDTO) throws Exception {
//        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
//        Object principal = authentication.getPrincipal();
//        if (principal instanceof Person) {
//            Long personId = ((Person) principal).getPersonId();
//            return recruitmentQuestionService.save(recruitmentRequestDTO, personId);
//        }
//        throw new Exception("not authenticated");

        return recruitmentQuestionService.save(recruitmentRequestDTO, 1L);
    }

    @GetMapping("/api/recruit/{recruit_id}")
    public Recruitment getRecruitment(@PathVariable("recruit_id") Long recruitmentId) throws Exception {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        Object principal = authentication.getPrincipal();
        if (principal instanceof Person) {
            Long personId = ((Person) principal).getPersonId();
            return recruitmentQuestionService.getRecruitment(recruitmentId, personId);
        }
        throw new Exception("not authenticated");
    }

    @PostMapping("/api/recruit/update")
    public Recruitment updateRecruitmentQuestion(@RequestBody RecruitQuestionRequestDTO recruitmentRequestDTO) throws Exception {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        Object principal = authentication.getPrincipal();
        if (principal instanceof Person) {
            Long personId = ((Person) principal).getPersonId();
            return recruitmentQuestionService.update(recruitmentRequestDTO, personId);
        }
        throw new Exception("not authenticated");

//        return recruitmentQuestionService.update(recruitmentRequestDTO, 1L);
    }


}

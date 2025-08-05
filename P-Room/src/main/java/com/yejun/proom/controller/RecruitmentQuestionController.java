package com.yejun.proom.controller;

import com.yejun.proom.dto.request.RecruitQuestionRequestDTO;
import com.yejun.proom.entity.Person;
import com.yejun.proom.entity.Recruitment;
import com.yejun.proom.service.RecruitmentQuestionService;
import com.yejun.proom.util.CustomOAuth2User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

@PreAuthorize("isAuthenticated()")
@RestController
public class RecruitmentQuestionController {
    @Autowired
    private RecruitmentQuestionService recruitmentQuestionService;

    @PostMapping("/api/recruit/insert")
    public Recruitment insertRecruitmentQuestion(@RequestBody RecruitQuestionRequestDTO recruitmentRequestDTO,
                                                 Authentication authentication) throws Exception {
        Object principal = authentication.getPrincipal();

        if (principal instanceof CustomOAuth2User) {
            Long personId = ((CustomOAuth2User) principal).getPerson().getPersonId();
            return recruitmentQuestionService.save(recruitmentRequestDTO, personId);
        }   else{
            throw new Exception("not authenticated");
        }
    }

    @GetMapping("/api/recruit/{recruit_id}")
    public Recruitment getRecruitment(@PathVariable("recruit_id") Long recruitmentId,
                                      Authentication authentication) throws Exception {
        Object principal = authentication.getPrincipal();
        if (principal instanceof CustomOAuth2User) {
            Long personId = ((CustomOAuth2User) principal).getPerson().getPersonId();
            return recruitmentQuestionService.getRecruitment(recruitmentId, personId);
        } else {
            throw new Exception("not authenticated");
        }
    }

    @PostMapping("/api/recruit/update")
    public Recruitment updateRecruitmentQuestion(@RequestBody RecruitQuestionRequestDTO recruitmentRequestDTO,
                                                 Authentication authentication) throws Exception {
        Object principal = authentication.getPrincipal();
        if (principal instanceof CustomOAuth2User) {
            Long personId = ((CustomOAuth2User) principal).getPerson().getPersonId();
            return recruitmentQuestionService.update(recruitmentRequestDTO, personId);
        } else {
            throw new Exception("not authenticated");
        }
    }


}

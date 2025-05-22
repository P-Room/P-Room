package com.yejun.proom.controller;

import com.yejun.proom.entity.Person;
import com.yejun.proom.entity.Recruitment;
import com.yejun.proom.service.RecruitmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@PreAuthorize("isAuthenticated()")
@RestController
public class RecruitController {

    @Autowired
    private RecruitmentService recruitmentService;

    @GetMapping("/api/recruit")
    public Page<Recruitment> getRecruitments(@RequestParam(defaultValue = "0") int page,
                                             @RequestParam(defaultValue = "10") int size,
                                             @RequestParam(required = false) String name,
                                             @RequestParam(required = false) String hashtag,
                                             Authentication authentication) throws Exception {

        Object principal = authentication.getPrincipal();

        if (principal instanceof Person) {
            Long personId = ((Person) principal).getPersonId();
            if (name == null && hashtag == null) {
                Pageable p = PageRequest.of(page, size, Sort.by("deadline").descending());
                return recruitmentService.findRecruitmentsByPersonId(p, personId);
            } else if (name != null && hashtag == null) {
                Pageable p = PageRequest.of(page, size);
                return recruitmentService.findRecruitmentsByPersonIdAndName(p, personId, name);
            } else if (name == null) {
                Pageable p = PageRequest.of(page, size);
                return recruitmentService.findByHashtag(p, personId, hashtag);
            } else {
                throw new Exception("bad request");
            }
        } else {
            throw new Exception("not authenticated");
        }

    }

    @DeleteMapping("/api/recruit/delete/{id}")
    public void deleteRecruitment(@PathVariable Long id, Authentication authentication) throws Exception {
        Object principal = authentication.getPrincipal();

        if (principal instanceof Person) {
            Long personId = ((Person) principal).getPersonId();
            recruitmentService.deleteRecruitment(id, personId);
        } else {
            throw new Exception("not authenticated");
        }
    }
}

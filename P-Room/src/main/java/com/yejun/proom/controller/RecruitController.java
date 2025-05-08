package com.yejun.proom.controller;

import com.yejun.proom.entity.Person;
import com.yejun.proom.entity.Recruitment;
import com.yejun.proom.service.RecruitmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class RecruitController {

    @Autowired
    private RecruitmentService recruitmentService;

    @GetMapping("/api/recruit")
    public Page<Recruitment> getRecruitments(@RequestParam(defaultValue = "0") int page,
                                             @RequestParam(defaultValue = "10") int size,
                                             @RequestParam(required = false) String name,
                                             @RequestParam(required = false) String hashtag) throws Exception {

//        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
//        Object principal = authentication.getPrincipal();
//
//        if (principal instanceof Person) {
//            Long personId = ((Person) principal).getId();
//            if (name == null && hashtag == null) {
//                Pageable p = PageRequest.of(page, size, Sort.by("deadline").descending());
//                return recruitmentService.findRecruitmentsByPersonId(p, personId);
//            } else if (name != null && hashtag == null) {
//                Pageable p = PageRequest.of(page, size);
//                return recruitmentService.findRecruitmentsByPersonIdAndName(p, personId, name);
//            } else if (name == null) {
//                Pageable p = PageRequest.of(page, size);
//                return recruitmentService.findByHashtag(p, personId, hashtag);
//            } else {
//                throw new Exception("bad request");
//            }
//        }
//
//        throw new Exception("not authenticated");

        if (name == null && hashtag == null) {
            Pageable p = PageRequest.of(page, size, Sort.by("deadline").descending());
            return recruitmentService.findRecruitmentsByPersonId(p, 1L);
        } else if (name != null && hashtag == null) {
            Pageable p = PageRequest.of(page, size);
            return recruitmentService.findRecruitmentsByPersonIdAndName(p, 1L, name);
        } else if (name == null) {
            Pageable p = PageRequest.of(page, size);
            return recruitmentService.findByHashtag(p, 1L, hashtag);
        } else {
            throw new Exception("bad request");
        }

    }


    @DeleteMapping("/api/recruit/delete/{id}")
    public void deleteRecruitment(@PathVariable Long id) throws Exception {
//        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
//        Object principal = authentication.getPrincipal();
//
//        if (principal instanceof Person) {
//            Long personId = ((Person) principal).getId();
//            recruitmentService.deleteRecruitment(id, personId);
//        }
//
//        throw new Exception("not authenticated");

        recruitmentService.deleteRecruitment(id, 1L);
    }
}

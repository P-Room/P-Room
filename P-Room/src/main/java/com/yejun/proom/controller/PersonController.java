package com.yejun.proom.controller;

import com.yejun.proom.util.CustomOAuth2User;
import jakarta.servlet.http.HttpSession;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class PersonController {
    @GetMapping("/me")
    public String getPerson(@AuthenticationPrincipal CustomOAuth2User oAuth2User, HttpSession session) {
        System.out.println("! SESSION ID = " + session.getId() + oAuth2User.getName());
        return oAuth2User.getPerson().getEmail();
    }
}

package com.yejun.proom.controller;

import com.yejun.proom.util.CustomOAuth2User;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class PersonController {
    @GetMapping("/me")
    public String getPerson(@AuthenticationPrincipal CustomOAuth2User oAuth2User) {
        return oAuth2User.getName();
    }
}

package com.yejun.proom.controller;

import com.yejun.proom.service.KakaoAuthService;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Collections;

@Controller
public class AuthController {

    @Autowired
    private KakaoAuthService kakaoAuthService;

    @GetMapping("/auth/login/kakao")
    public String login(String code, HttpSession session) {
        String token = kakaoAuthService.getAccessToken(code);
        String email = kakaoAuthService.getUserInfo(token);
        session.setAttribute("LOGIN_USER", email);

        UsernamePasswordAuthenticationToken authentication = new UsernamePasswordAuthenticationToken(email, null, Collections.emptyList());
        SecurityContextHolder.getContext().setAuthentication(authentication);

        return "redirect:/index.html";
    }
}

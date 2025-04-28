package com.yejun.proom.controller;

import com.yejun.proom.entity.Person;
import com.yejun.proom.service.KakaoAuthService;
import com.yejun.proom.service.PersonService;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Collections;
import java.util.List;

@Controller
public class AuthController {

    @Autowired
    private KakaoAuthService kakaoAuthService;

    @Autowired
    private PersonService personService;

    @GetMapping("/auth/login/kakao")
    public String login(String code) {
        String token = kakaoAuthService.getAccessToken(code);
        String email = kakaoAuthService.getUserInfo(token);
        Person person = personService.save(email, "kakao");
        
        List<GrantedAuthority> authorities = Collections.singletonList(new SimpleGrantedAuthority("ROLE_USER"));
        UsernamePasswordAuthenticationToken authentication = new UsernamePasswordAuthenticationToken(person, null, authorities);
        SecurityContextHolder.getContext().setAuthentication(authentication);

        return "redirect:/index.html";
    }
}

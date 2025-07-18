package com.yejun.proom.controller;

import com.yejun.proom.util.CustomOAuth2User;
import jakarta.servlet.http.HttpSession;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
public class PersonController {
    @GetMapping("/me")
    public ResponseEntity<?> getPerson(@AuthenticationPrincipal CustomOAuth2User user) {
        if (user == null) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build(); // 👈 이렇게!
        }
        return ResponseEntity.ok(Map.of("email", user.getPerson().getEmail()));
    }
}

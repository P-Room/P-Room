package com.yejun.proom.config;

import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.Authentication;
import org.springframework.security.web.authentication.SimpleUrlAuthenticationSuccessHandler;
import org.springframework.stereotype.Component;
import org.springframework.web.util.UriComponentsBuilder;

import java.io.IOException;

@Component
public class LoginSuccessHandler extends SimpleUrlAuthenticationSuccessHandler {

    @Value("${app.frontend-redirect-uri}")
    private String frontendRedirectUri;

    @Override
    public void onAuthenticationSuccess(HttpServletRequest request,
                                        HttpServletResponse response,
                                        Authentication authentication) throws IOException, ServletException {
//        String token = JWT 토큰같은거 넣을 때 필요하대;
        System.out.println("onAuthenticationSuccess");
        String targetUrl = UriComponentsBuilder.fromUriString(frontendRedirectUri)
//            .queryParam("token", token)
            .build().toUriString();
        getRedirectStrategy().sendRedirect(request, response, targetUrl);
    }
}

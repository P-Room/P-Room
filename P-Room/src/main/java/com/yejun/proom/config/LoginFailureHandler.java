package com.yejun.proom.config;

import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.authentication.AuthenticationCredentialsNotFoundException;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.InternalAuthenticationServiceException;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.authentication.SimpleUrlAuthenticationFailureHandler;
import org.springframework.stereotype.Component;
import org.springframework.web.util.UriComponentsBuilder;

import java.io.IOException;
import java.net.URLEncoder;
import java.nio.charset.StandardCharsets;

@Component
public class LoginFailureHandler extends SimpleUrlAuthenticationFailureHandler {

    @Value("${app.frontend-redirect-uri}")
    private String frontendRedirectUri;

    @Override
    public void onAuthenticationFailure(HttpServletRequest request,
                                        HttpServletResponse response,
                                        AuthenticationException exception) throws IOException, ServletException {
        System.out.println(exception.getMessage());
        System.out.println("onAuthenticationFailure");
        String errmsg;

        if(exception instanceof BadCredentialsException || exception instanceof InternalAuthenticationServiceException) {
            errmsg = "아이디 또는 비밀번호가 일치하지 않습니다.";
        } else if (exception instanceof AuthenticationCredentialsNotFoundException) {
            errmsg = "인증 요청이 거부되었습니다. 관리자에게 문의하세요.";
        } else {
            errmsg = "알 수 없는 오류로 로그인 요청을 처리할 수 없습니다. 관리자에게 문의하세요.";
        }


        errmsg = URLEncoder.encode(errmsg, StandardCharsets.UTF_8);
        String targetUri = UriComponentsBuilder.fromUriString(frontendRedirectUri + "?error=true&errmsg=" + errmsg)
                .build().toUriString();
        getRedirectStrategy().sendRedirect(request, response, targetUri);
    }
}

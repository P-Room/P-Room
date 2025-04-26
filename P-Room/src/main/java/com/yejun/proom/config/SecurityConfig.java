package com.yejun.proom.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
public class SecurityConfig {
    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http.csrf((csrf) -> csrf.ignoringRequestMatchers("/**"))
            .authorizeHttpRequests(auth -> auth
                .requestMatchers("/**", "/index", "/auth/**", "/css/**", "/js/**", "/image/**").permitAll()
                .anyRequest().authenticated()
            )
            .oauth2Login(Customizer.withDefaults())
            .formLogin(form -> form.loginPage("/index").permitAll())
            .logout(logout -> logout.logoutSuccessUrl("/index").permitAll())
        ;
        return http.build();
    }
}

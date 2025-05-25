package com.yejun.proom;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;
import org.springframework.data.web.config.EnableSpringDataWebSupport;

// test2
@EnableSpringDataWebSupport(pageSerializationMode = EnableSpringDataWebSupport.PageSerializationMode.VIA_DTO)
@SpringBootApplication(exclude = { SecurityAutoConfiguration.class })
public class PRoomApplication {

    public static void main(String[] args) {
        SpringApplication.run(PRoomApplication.class, args);
    }

}

package com.yejun.proom.util;

import com.yejun.proom.entity.Person;
import lombok.Getter;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.oauth2.core.user.DefaultOAuth2User;

import java.util.Collection;
import java.util.Map;

@Getter
public class CustomOAuth2User extends DefaultOAuth2User {
    private final Person person;

    public CustomOAuth2User(Collection<? extends GrantedAuthority> authorities,
                            Map<String, Object> attributes,
                            String nameAttributeKey,
                            Person person) {
        super(authorities, attributes, nameAttributeKey);
        this.person = person;
    }
}

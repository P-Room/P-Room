package com.yejun.proom.service;

import com.yejun.proom.entity.Person;
import com.yejun.proom.repository.PersonRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.Date;
import java.util.NoSuchElementException;

@Service
public class PersonService {
    @Autowired
    private PersonRepository personRepository;

    public Person save(String email, String provider) {
        return personRepository.findByEmail(email).orElseGet(() -> {
            return personRepository.save(Person.builder()
                .provider(provider)
                .email(email)
                .build()
            );
        });
    }

    public Person findPersonById(Long id) throws Exception{
        return personRepository.findById(id).orElseThrow(NoSuchElementException::new);
    }

    public Person findPersonByEmail(String email) throws Exception{
        return personRepository.findByEmail(email).orElseThrow(NoSuchElementException::new);
    }

    public Person deletePersonById(Long id) throws Exception{
        Person target = personRepository.findById(id).orElseThrow(NoSuchElementException::new);
        target.setDelDtm(new Date());
        personRepository.save(target);
        return target;
    }
}

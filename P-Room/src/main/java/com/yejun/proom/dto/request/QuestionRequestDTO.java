package com.yejun.proom.dto.request;

import lombok.*;

@NoArgsConstructor
@AllArgsConstructor
@Builder
@Getter
@Setter
public class QuestionRequestDTO {
    private Long questionId;
    private String title;
    private String answer;
    private String hashtag;
}

package com.yejun.proom.dto.request;

import com.yejun.proom.entity.Question;
import com.yejun.proom.entity.Recruitment;
import com.yejun.proom.entity.enums.RecruitCondition;
import lombok.*;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

@NoArgsConstructor
@AllArgsConstructor
@Builder
@Getter
@Setter
public class RecruitQuestionRequestDTO {
    private Long recruitmentId;
    private String name;
    private String company;
    private String link;
    private String startDate;
    private String deadline;
    private RecruitCondition cond;
    private List<QuestionRequestDTO> questions;

    private Date toDate(String date) throws ParseException {
        SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        return formatter.parse(date);
    }

    public Recruitment toRecruitment() throws ParseException {
        return Recruitment.builder()
            .name(name)
            .company(company)
            .link(link)
            .startDate(toDate(startDate))
            .deadline(toDate(deadline))
            .cond(cond)
            .build();
    }
}

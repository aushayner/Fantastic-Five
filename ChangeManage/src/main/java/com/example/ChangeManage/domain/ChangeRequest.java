package com.example.ChangeManage.domain;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
public class ChangeRequest {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer requestId;
    private String changeType;
    private String reasonType;
    private String riskLevel;
    private String changeTitle;
    private String whatDescription;
    private String whyDescription;
    private String backoutPlan;
    private Integer backoutTime;
    private String startTime;
    private String endTime;
    private String contact;
    private String status;

    @ManyToOne
    @JoinColumn(name = "id")
    private CMUser user;

}

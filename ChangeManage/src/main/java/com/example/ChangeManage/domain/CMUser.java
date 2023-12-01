package com.example.ChangeManage.domain;


import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
public class CMUser {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer employeeId;
    private String userId;
    private String password;
    private String firstName;
    private String lastName;
    private Integer authorizationLevel; // 0 -> user 1 -> application 2 -> department 3 -> operation

    @OneToMany(mappedBy = "user")
    @JsonIgnore
    private List<ChangeRequest> changeRequests = new ArrayList<>();

}

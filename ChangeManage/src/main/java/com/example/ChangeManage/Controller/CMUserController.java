package com.example.ChangeManage.Controller;


import com.example.ChangeManage.Service.CMUserService;
import com.example.ChangeManage.domain.CMUser;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RequiredArgsConstructor
@RestController
public class CMUserController {

    private final CMUserService cmUserService;

    @CrossOrigin
    @PostMapping("/user")
    public ResponseEntity<?> save(@RequestBody CMUser cmuser){

        System.out.println(cmuser.getEmployeeId());
        System.out.println(cmuser.getUserId());
        System.out.println(cmuser.getPassword());
        System.out.println(cmuser.getFirstName());
        System.out.println(cmuser.getLastName());
        System.out.println(cmuser.getAuthorizationLevel());

        return new ResponseEntity<>(cmUserService.create(cmuser), HttpStatus.CREATED);
    }

}

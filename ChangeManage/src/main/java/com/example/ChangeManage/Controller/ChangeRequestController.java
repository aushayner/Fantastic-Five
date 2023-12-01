package com.example.ChangeManage.Controller;

import com.example.ChangeManage.Service.ChangeRequestService;
import com.example.ChangeManage.domain.CMUser;
import com.example.ChangeManage.domain.ChangeRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.sql.Time;

@RequiredArgsConstructor
@RestController
public class ChangeRequestController {


    private final ChangeRequestService changeRequestService;
    @CrossOrigin
    @PostMapping("/changerequest")
    public ResponseEntity<?> save(@RequestBody ChangeRequest changeRequest) {

        System.out.println("title "+ changeRequest.getChangeTitle());
        System.out.println("what "+ changeRequest.getWhatDescription());
        System.out.println("why "+ changeRequest.getWhyDescription());
        System.out.println("title "+ changeRequest.getChangeType());

        String userId = "testid";
        return new ResponseEntity<>(changeRequestService.create(changeRequest, userId), HttpStatus.CREATED);
    }
    @CrossOrigin
    @GetMapping("/changerequests")
    public ResponseEntity<?> retrieveAll() {
        String userId = "testid";
        return new ResponseEntity<>(changeRequestService.retrieveAllChangeRequest(), HttpStatus.OK);
    }

    @CrossOrigin
    @GetMapping("/approvals")
    public ResponseEntity<?> findByStatus(){
        return new ResponseEntity<>(changeRequestService.retrieveChangeRequestByStatus("Pending"), HttpStatus.OK);
    }


    @CrossOrigin
    @GetMapping("/changerequests/{id}")
    public ResponseEntity<?> findByID(@PathVariable Integer id) {
        String userId = "testid";
        return new ResponseEntity<>(changeRequestService.retrieveChangeRequest(id), HttpStatus.OK);
    }




}

    //    @GetMapping("/findchangerequest")
    //    public ResponseEntity<?> findChangeRequestById() {
    //        String userId = "testid";
    //        return new ResponseEntity<>(changeRequestService.getChangeRequestById(userId), HttpStatus.OK);
    //    }

    //    @GetMapping("/approvechangerequest")
    //    public ResponseEntity<?> approve(ChangeRequest changeRequest) {
    //        String userId = "testid";
    //        int requestId = 0;
    //        return new ResponseEntity<>(changeRequestService.approveChangeRequest(requestId), HttpStatus.OK);
    //    }

    //    @DeleteMapping("/deletechangerequest")
    //    public ResponseEntity<?> delete(ChangeRequest changeRequest) {
    //        String userId = "testid";
    //        return new ResponseEntity<>(changeRequestService.deleteChangeRequest(changeRequest, userId), HttpStatus.OK);
    //    }

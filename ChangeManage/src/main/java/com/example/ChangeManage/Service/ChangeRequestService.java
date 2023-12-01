package com.example.ChangeManage.Service;


import com.example.ChangeManage.Repository.CMUserRepository;
import com.example.ChangeManage.Repository.ChangeRequestRepository;
import com.example.ChangeManage.domain.CMUser;
import com.example.ChangeManage.domain.ChangeRequest;
//import javafx.scene.control.TextFormatter;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@RequiredArgsConstructor
@Service
public class ChangeRequestService {

    private final CMUserRepository cmUserRepository;
    private final ChangeRequestRepository changeRequestRepository;

    public ChangeRequest create(ChangeRequest changeRequest, String userid) {
        CMUser cmuser = cmUserRepository.findByUserId(userid);
        changeRequest.setUser(cmuser);

        return changeRequestRepository.save(changeRequest);
    }

    public List<ChangeRequest> retrieveAllChangeRequest() {

        return changeRequestRepository.findAll();
    }

    public List<ChangeRequest> retrieveChangeRequestByStatus(String status){
        return changeRequestRepository.findByStatus(status);
    }

    public Optional<ChangeRequest> retrieveChangeRequest(Integer id) {

        return changeRequestRepository.findById(id);
    }

}

    //    public ChangeRequest getChangeRequestById(@PathVariable(value = "id") String userid) {
    //        return changeRequestRepository.findByUserId(userid);
    //    }

        //public ChangeRequest deleteChangeRequest(ChangeRequest changeRequest, String userid) {

            //CMUser cmuser = cmUserRepository.findByUserId(userid);
            //changeRequest.setUser(cmuser);

        //    return changeRequestRepository.delete(changeRequest);
        //
        // }

    //    public ChangeRequest approveChangeRequest(Integer temp) {
    //        //get change request
    //        ChangeRequest changeRequest = changeRequestRepository.findChangeRequestById(temp).get();
    //        //get user id
    //        CMUser cmUser = changeRequest.getUser();
    //        //check authentication // 0 = user, 1 = app, 2 = department, 3 = operations
    //        Integer authLevel = cmUser.getAuthorizationLevel();
    //        //get approval value
    //        String approvalStatus = changeRequest.getStatus();
    //        //if-else statements for approval value
    //        Integer status = 0;
    //        if (approvalStatus == "Open"){ status = 0;}
    //        else if (approvalStatus == "Frozen") { status = 1;}
    //        else if (approvalStatus == "Application") { status = 2;}
    //        else if (approvalStatus == "Department") { status = 3;}
    //        else if (approvalStatus == "Approved" || approvalStatus == "Denied") { status = 4;}
    //        else status = 5;
    //        //if-else statments for checking value and changing status
    //        if (status == authLevel){
    //            status++;
    //            if (status == 1) { approvalStatus = "Frozen";}
    //            else if (status == 2) { approvalStatus = "Application";}
    //            else if (status == 3) { approvalStatus = "Department";}
    //            else if (status == 4) { approvalStatus = "Approved";}
    //            else approvalStatus = "Completed";
    //            changeRequest.setStatus(approvalStatus);
    //        }
    //        return changeRequestRepository.save(changeRequest);
    //    }

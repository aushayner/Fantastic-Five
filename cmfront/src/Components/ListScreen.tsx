
import NavigationBar from "./NavigationBar"
import '../App.css'
import Table from 'react-bootstrap/Table';
import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom"


function ListScreen(){
    let navigate = useNavigate();


    const[changeRequests, setChangeRequests] = useState([] as any[])


    const getChangeRequests = async() =>{

        const response = await fetch("http://localhost:8080/changerequests"

        );

        const json = await response.json();

        console.log("json.data");
        console.log(json);
        setChangeRequests(json);
        console.log("changeRequests");
        console.log(changeRequests);

    }


    useEffect(()=>{
        getChangeRequests();
    })


    return(
        <>
            <NavigationBar/>
            <header><h3>List</h3></header>
            <div className={"ListGroup overflow-auto"}>


                <Table striped bordered hover>
                    <thead>
                    <tr>
                    <th>#</th>
                    <th>Title</th>
                    <th>Reason</th>
                    <th>Change Type</th>
                    <th>Risk Level</th>
                    <th>Start Time</th>
                    <th>End Time</th>
                    <th>Change Status</th>
                    
                    </tr>
                    </thead>
                    <tbody>
                    {changeRequests.map((changerequest) => (
                        <tr onClick={()=>{navigate('/view-change/'+changerequest.requestId)}}>
                            <td>{changerequest.requestId}</td>
                            <td>{changerequest.changeTitle}</td>
                            <td>{changerequest.reasonType}</td>
                            <td>{changerequest.changeType}</td>
                            <td>{changerequest.riskLevel}</td>
                            <td>{changerequest.startTime}</td>
                            <td>{changerequest.endTime}</td>
                            <td>{changerequest.status}</td>
                        </tr>
                    ))}
                    </tbody>
                </Table>




            </div>
        </>
    )
}

export default ListScreen;
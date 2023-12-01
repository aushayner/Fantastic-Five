import NavigationBar from "./NavigationBar"
import { useEffect, useState } from "react"
import { Route, useParams} from "react-router-dom";
function ViewChange(){

const[changerequest, setChangeRequest] = useState({
        requestId:'',
        changeType:'',
        reasonType:'',
        changeTitle:'',
        whatDescription:'',
        whyDescription:'',
        backoutPlan:'',
        backoutTime:'',
        startTime:'',
        endTime:'',
        contact:'',
        riskLevel:'',
        status:''

})

//const id = props.match.params.id;
const {id} = useParams();


useEffect(()=>{
    fetch("http://localhost:8080/changerequests/"+id , {method:"GET"})
    .then(res => res.json())
    .then(res=>{
        setChangeRequest(res)
    });
},[])






return(
    <>
        <NavigationBar/>

        <div className="container">
        <form>
            <h2>Change Request Form: {changerequest.requestId}</h2>

            <div className={"row"}>
            <div className={"col"}>
                    <label className={"custom-control-label"}>
                        Title: 
                        <p id={"title"}>{changerequest.changeTitle}</p>
                    </label>
                </div>
                <div className={"col"}>
                    <label className={"custom-control-label"}>
                        Type:
                        <p id={"changeType"}>{changerequest.changeType}</p>
                    </label>
                </div>
                <div className={"col"}>
                    <label className={"custom-control-label"}>
                        Reason: 
                        <p id={"reason"}>{changerequest.reasonType}</p>
                    </label>
                </div>
            </div>

            <div className={"row"}>
                <div className={"col"}>
                    <label className={"custom-control-label"}>
                        Start Time:
                        <p id={"start-time"}>{changerequest.startTime}</p>
                    </label>
                </div>
                <div className={"col"}>
                    <label className={"custom-control-label"}>
                        End Time:
                        <p id={"end-time"}>{changerequest.endTime}</p>
                    </label>
                </div>
            </div>

            <div className={"row"}>
                <h2>Detailed Event Desciption (Executive Summary):</h2>
                <label className={"custom-control-label"}>
                    1. Clearly and concisely what is changing. <br></br>
                    <p>{changerequest.whatDescription}</p>
                </label>
            </div>

            <div className={"row"}>
                <label className={"custom-control-label"}>
                    2.Clearly and concisely describe why the change is occuring. <br></br>
                    <p>{changerequest.whyDescription}</p>
                </label>
            </div>

            <div className={"row"}>
                <label className={"custom-control-label"}>
                    Backout Plan:
                    <p>{changerequest.backoutPlan}</p>
                </label>
            </div>

            <div className={"row"}>
                <label className={"custom-control-label"}>
                    Minutes to Execute Backout Plan:
                    <p>{changerequest.backoutTime}</p>
                </label>
            </div>

            <div className={"row"}>
                <label className={"custom-control-area"}>
                    Risk Level:
                    <p>{changerequest.riskLevel}</p>
                </label>
            </div>

            <div className={"row"}>
                <label className="custom-control-label">
                    Implementation Contact:
                    <p id={"contact"}>{changerequest.contact}</p>
                </label>
            </div>

        </form>
        </div>
    </>

        
    
)
}

export default ViewChange
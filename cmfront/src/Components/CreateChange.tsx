import NavigationBar from "./NavigationBar"
import '../App.css'
import 'bootstrap/dist/css/bootstrap.css';
import { useState } from "react";
import {useNavigate} from "react-router-dom"
function CreateChange(){
    let navigate = useNavigate();


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
        riskLevel:'Low',
        contact:'',
        status:'Pending'

    });

    const submitChangeRequest =(e:React.ChangeEvent<any>)=>{
        e.preventDefault();
        fetch("http://localhost:8080/changerequest", {
          method:"POST",
          headers:{
            "Content-Type" : "application/json"
          },
          body: JSON.stringify(changerequest)
        })
        .then(res=>{
            console.log(1,res);
            if(res.status === 201){
              return res.json();
            }else{
              return null;
            }
          })
        .then(res=>{
          console.log(res)
          if(res!==null){
            //props.history.push('/login');
          }else{
            alert('fails');
          }
        
        }
        
        
        );
        navigate('/list');
    }

    const changeValue=(e:React.ChangeEvent<any>)=>{


        setChangeRequest({
            ...changerequest, [e.target.name]:e.target.value
        });

        console.log("name " + e.target.name );
        console.log("value "+ e.target.value);
        console.log(e);

        console.log(changerequest);
    }
     

    return(
        <>
            <NavigationBar/>

            <div className="container">
            <form onSubmit = {submitChangeRequest} >
                <h2>Change Request Form</h2>
                <div className={"row"}>
                    <div className="col">
                        <label className={"custom-control-label"}>
                            Title:
                            <input type={"text"} id={"title"} onChange={(e) => changeValue(e)} name="changeTitle"></input>
                        </label>
                    </div>
                    <div className="col">
                    <label className={"custom-control-label"}>
                        Type:
                        <input type={"text"} id={"changeType"} onChange={(e) => changeValue(e)} name="changeType"></input>
                    </label>
                    </div>
                    <div className="col">
                    <label className={"custom-control-label"}>
                        Reason:
                        <input type={"text"} id={"reason"}   onChange={(e) => changeValue(e)} name="reasonType"   ></input>
                    </label>
                    </div>
                </div>


                <div className={"row"}>
                    <div className={"col"}>
                        <label className={"custom-control-label"}>
                            Start Time:
                            <input type={"datetime-local"} id={"start-time"} onChange={(e) => changeValue(e)} name="startTime"></input>
                        </label>
                    </div>
                    <div className={"col"}>
                        <label className={"custom-control-label"}>
                            End Time:
                            <input type="datetime-local" id={"end-time"} onChange={(e) => changeValue(e)} name="endTime"></input>
                        </label>
                    </div>
                </div>

                <div className={"row"}>
                    <h2>Detailed Event Desciption (Executive Summary):</h2>
                    <label className={"custom-control-label"}>
                        1. Clearly and concisely what is changing.
                        
                    </label>
                </div>
                <div className={"row"}><textarea onChange={(e) => changeValue(e)} name="whatDescription"></textarea></div>

                <div className={"row"}>
                    <label className={"custom-control-label"}>
                        2.Clearly and concisely describe why the change is occuring.
                    </label>
                    <textarea onChange={(e) => changeValue(e)} name="whyDescription"></textarea>
                </div>

                <div className={"row"}>
                    <label className={"custom-control-label"}>
                        Backout Plan: 
                    </label>
                </div>
                <div className={"row"}><textarea onChange={(e) => changeValue(e)} name="backoutPlan"></textarea></div>

                <div className={"row"}>
                    <label className={"custom-control-label"}>
                        Minutes to Execute Backout Plan:
                        <input type={"text"} onChange={(e) => changeValue(e)} name="backoutTime"></input>
                    </label>
                </div>
                

                <div className={"row"}>
                    <label className={"custom-control-area"}>
                        Risk Level:
                        
                        <input type="radio" className="btn-check" name="riskLevel" id="risk-low" autoComplete="off" value="Low" defaultChecked  onChange={(e) => changeValue(e)}/>
                        <label className="btn btn-outline-success" htmlFor="risk-low">Low</label>

                        <input type="radio" className="btn-check" name="riskLevel" id="risk-medium" value="Medium" autoComplete="off" onChange={(e) => changeValue(e)}/>
                        <label className="btn btn-outline-primary" htmlFor="risk-medium">Medium</label>

                        <input type="radio" className="btn-check" name="riskLevel" id="risk-high" value="High" autoComplete="off" onChange={(e) => changeValue(e)}/>
                        <label className="btn btn-outline-danger" htmlFor="risk-high">High</label>
                    </label>
                </div>

                <div className={"row"}>
                    <label className="custom-control-label">
                        Implementation Contact:
                        <input type="text" id={"contact"} onChange={(e) => changeValue(e)} name="contact"></input>
                    </label>
                </div>
                
                <button type="submit" className="btn btn-success" >Submit</button>
                



            </form>
            </div>
        </>
    )
}

export default CreateChange
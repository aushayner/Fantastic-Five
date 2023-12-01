import {useNavigate} from "react-router-dom"
import '../App.css'
import 'bootstrap/dist/css/bootstrap.css'
function Login(){
    let navigate = useNavigate();
    return (
        <div className={"d-flex justify-content-center"}>
            <form className="form text-center" style={{width:"35%"}} onSubmit={()=>{navigate('/list')}}>

                <img className="mb-4 " src = "SplashLogo.png" width={"100%"}/>
                <input className="form-control" name="UserName" type="username" placeholder="User Name"  required autoFocus/>
                <input className="form-control" name="Password" type="password" placeholder="Password"   required/>

                <button className="btn btn-lg btn-success btn-block" type="submit" name="Submit">Log In</button>

            </form>
        </div>
    )


}
export default Login;
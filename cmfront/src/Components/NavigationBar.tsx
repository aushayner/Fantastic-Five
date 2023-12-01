
import 'bootstrap/dist/css/bootstrap.css';

function NavigationBar(){
    return(
        <>
            <nav className={"navbar navbar-fixed-top navbar-expand-lg navbar-dark bg-success justify-content-between align-items-baseline"}>

                     
                    <div className="navbar-header mr-auto">
                        <a className={"navbar-brand"}><img className="rounded" src={"/BannerLogo.png"} width="40%" height="auto"/></a>
                    </div>
                     
                    <ul className={"nav navbar-nav"}>
                        <li className="nav-item" >
                            <a className={"nav-link"} href={"/list"}>List</a>
                        </li>
                        <li className="nav-item">
                            <a className={"nav-link"} href={"/list-approvals"}>Approvals</a>
                        </li>
                        <li className="nav-item">
                            <a className={"nav-link"} href={"/create-change"}>New Change</a>
                        </li>
                    </ul>


                   
                    


                    <ul className={"nav navbar-nav"}>
                        
                            <li className={"nav-item"}><a className={"nav-link"} href={"#"}>ID: xxxxxxxxxxx</a></li>
                            <li><a className={"nav-link"} href={"/"}>Log Out</a></li>
                        

                    </ul>


            </nav>
        </>
    )
}

export default NavigationBar;
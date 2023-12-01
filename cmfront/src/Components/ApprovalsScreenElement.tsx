import NavigationBar from "./NavigationBar"
import '../App.css'
function ApprovalsScreenElement(){
    return(
        <>
            <input type={"checkbox"} name = "select-box"/>
            <text name={"Title"}></text>
            <text name={"TeamID"}></text>
            <text name={"Reason"}></text>
            <text name={"ChangeType"}></text>
            <text name={"StartTime"}></text>
            <text name={"EndTime"}></text>
            <img/>
            <text name={"RiskLevel"}></text>
            <text name={"ChangeStatus"}></text>
        </>
    )
}

export default ApprovalsScreenElement;
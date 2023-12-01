import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import './App.css'

import {
    BrowserRouter,
    Routes, //replaces "Switch" used till v5
    Route,
} from "react-router-dom";

import Login from "./Components/Login"
import NavigationBar from"./Components/NavigationBar"
import ListScreen from "./Components/ListScreen"
import ViewApproval from "./Components/ViewApproval"
import CreateChange from "./Components/CreateChange"
import ListApprovalScreen from "./Components/ListApprovalsScreen"
import ViewChange from './Components/ViewChange';
function App() {
  return (

    <>

        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<Login/>}/>
                <Route path={"/list"} element={<ListScreen/>}/>
                <Route path={"/view-approval/:id"} element={<ViewApproval/>}/>
                <Route path={"/create-change"} element={<CreateChange/>}/>
                <Route path={"/list-approvals"} element={<ListApprovalScreen/>}/>
                <Route path={"/view-change/:id"} element={<ViewChange/>}/>
                //view only approval
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default App;



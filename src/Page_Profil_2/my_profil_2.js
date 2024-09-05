import React from "react";
import "../UI/commonUI/flex_type_page.css"
import Navbar from "../UI/Navbar/Navbar.js";
import Header from "../UI/Header/Header.js";
import Profil_2 from "./main/Profil_2.js";
export default function Myprofil2(props){
    return( 
    <div class="main_flexBox">
        <div class="top_cont_forUIpage">
            <Header autorz = {props.autorization.status} UID = {props.autorization.UID} path="/MyApplications" />
        </div>
        <div class="body_cont_forUIpage">
            <Navbar user_status={props.autorization.userStatus} />
            <Profil_2/>
        </div>  
    </div>)
}
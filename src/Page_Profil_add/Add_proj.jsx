import React from "react";
import "../UI/commonUI/flex_type_page.css"
import Navbar from "../UI/Navbar/Navbar.js";
import Header from "../UI/Header/Header.js";
import ADD from "./main/Add_project.js"

export default function add(props) {
    return (
        <div class="main_flexBox">
            <div class="top_cont_forUIpage">
            <Header autorz = {props.autorization.status} UID = {props.autorization.UID}  path = "/MyProfil"/>
            </div>
            <div class="body_cont_forUIpage">
                <Navbar user_status = {props.autorization.userStatus}/> 
                <ADD school = {props.autorization.userSchool}/>
            </div>
        </div>
    )
}

import React from "react";
import "../UI/commonUI/flex_type_page.css"
import Navbar from "../UI/Navbar/Navbar.js";
import Header from "../UI/Header/Header.js";
import Application from "./main/Application_main.js";

export default function Applications(props) {
    return (
        <div class="main_flexBox">
            <div class="top_cont_forUIpage">
                <Header autorz = {props.autorization.status} UID = {props.autorization.UID} path="/MyApplications" />
            </div>
            <div class="body_cont_forUIpage">
                <Navbar user_status={props.autorization.userStatus} />
                <Application/>
            </div>  
        </div>
    )
}
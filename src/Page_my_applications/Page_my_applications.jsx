import React, { useEffect, useState } from "react";
import "../UI/commonUI/flex_type_page.css"
import Navbar from "../UI/Navbar/Navbar.js";
import Header from "../UI/Header/Header.js";
import Application_main from "./main/Application_main.jsx";

export default function Page_my_applications(props) {

  return (
    <div class="main_flexBox">
        <div class="top_cont_forUIpage">
            <Header autorz = {props.autorization.status} UID = {props.autorization.UID} path="/MyApplications" />
        </div>
        <div class="body_cont_forUIpage">
            <Navbar user_status={props.autorization.userStatus} />
            <Application_main autorization = { props.autorization } apiAdress = {props.apiAdress}/>
        </div>  
    </div>
  );
}
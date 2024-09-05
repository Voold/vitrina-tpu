import React from 'react';
import Navbar from '../UI/Navbar/Navbar.js';
import Header from '../UI/Header/Header.js';
import MyProjectBody from './main/Main_MyProject.js';
import '../UI/commonUI/flex_type_page.css';

const MyProject = (props) => {
  return (

    <div class = "main_flexBox">

      {/* <Header aut={autz}/> */}
      <div class = "top_cont_forUIpage">
      <Header autorz = {props.autorization.status} UID = {props.autorization.UID}  path = "/MyProfil"/>
      </div>
    
      <div class="body_cont_forUIpage">
        <Navbar user_status = {props.autorization.userStatus}/>
        <MyProjectBody/>
      </div>

    </div>


    )
}

export default MyProject;
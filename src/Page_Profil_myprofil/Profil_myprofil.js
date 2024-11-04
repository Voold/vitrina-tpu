// import React, { useState } from 'react'
import Navbar from '../UI/Navbar/Navbar.js'
import Header from '../UI/Header/Header.js'
import Main from './Main/Profil_myprofil.js'
import "../UI/commonUI/flex_type_page.css"
import { useState } from 'react'
/* import "../UI/Navbar/Navbar.css" */

const MyProfile = (props) => {

  // const [autz, setAutz] = useState("0")

  const setProfileDataHandler = (props) => {
    console.log(props);
  }

  return (
    <div class = "main_flexBox">

      <div class = "top_cont_forUIpage">
        <a name="head"></a>
        <Header autorz = {props.autorization.status} UID = {props.autorization.UID}  path = "/MyProfil"/>
      </div>
    
      <div class="body_cont_forUIpage">
        <Navbar user_status = {props.autorization.userStatus}/>
        <Main onUserInputProfile = {setProfileDataHandler} apiAdress = {props.apiAdress}/>
      </div>

    </div>
    )
}

export default MyProfile;
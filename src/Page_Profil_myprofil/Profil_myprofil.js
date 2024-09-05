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
    // setAutz(props.autz);
  }

/*   const [dark, setDark] = useState("");

  const darkON = () => {
    setDark("dark");
    console.log("1");
  }

  const darkOFF = () => {
    setDark("");
    console.log("0");
  } */

  /* onPoinerEnter={darkON} onMouseOut={darkOFF} */

  return (
    <div class = "main_flexBox">

      <div class = "top_cont_forUIpage">
        <a name="head"></a>
        <Header autorz = {props.autorization.status} UID = {props.autorization.UID}  path = "/MyProfil"/>
      </div>
    
      <div class="body_cont_forUIpage">
        <Navbar user_status = {props.autorization.userStatus}/>
        <Main onUserInputProfile = {setProfileDataHandler}/>
      </div>

    </div>
    )
}

export default MyProfile;
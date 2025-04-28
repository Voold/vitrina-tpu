import Pageprogect from './Page_project.js';
import Katalog from './Katalog.js';

import Add_project from './Page_Profil_add/Add_proj.jsx';
import Applications from './Page_my_applications/Page_my_applications.jsx';
// import Applications from './Page_application/Application.js';
import MyProfile_2 from './Page_Profil_2/my_profil_2.js';
import MyProfile from './Page_Profil_myprofil/Profil_myprofil.js'
import MyProject from './Page_Profil_project/Profil_myproject.js';
import React, { useEffect, useState} from 'react';
import {Route,Routes,redirect } from 'react-router-dom';
import Loading from './UI/Loading/Loading.js';
import Analytics from './Page_analytics/Analytics.js';
import Error from './Error/Error.js';
import Users_page from './Users_page/Users_page.js';

import "./Global_Styles/colors.css"

function App() {

  // адрес бэка
  const apiAdress = "http://213.171.30.90:8000/";
  

  // =================================================================================================
  // Тут через апишку надо будет авторизацию узнать

  const autStatus = 1 // 0 - none | 1 - yep
  const autUID = 'UID_12345' // user UID
  const autUserStatus =  2 // | 0 - user | 1 - lect | 2 - admin |
  const autUserSchool = "ИШИТР" // user School

  //const autorization = [autStatus, autUID, autUserStatus]; // [aut status , UID, user status]
  //autorz = {props.autorization[0]} UID = {props.autorization[1]}

  const autorization = {
    status: autStatus,
    UID: autUID,
    userStatus: autUserStatus,
    userSchool: autUserSchool,
  };
  //autorz = {props.autorization.status} UID = {props.autorization.UID}

  
  // =================================================================================================


  /*const [data, setData] = useState(<Katalog projects={INNITIAL_DATA} autorization = { autorization }/>);*/
  const [data, setData] = useState(<Katalog load={<Loading></Loading>} projects={[]} autorization = { autorization }/>);

  useEffect(() => {
      setTimeout(() => {
        fetch(apiAdress + '/catalog/pending')
          .then(response => response.json())
          .then(data => setData(<Katalog projects={data} autorization = { autorization } apiAdress = {apiAdress} />))
          .catch(error => console.error(error), setData(<Katalog projects={[]} autorization = { autorization } />));
        }, 1500);
  }, []);

  return (
    <>
        <Routes>
          <Route path="/" element={data}/>
          <Route path='/MyProfil' element={<MyProfile autorization = { autorization } apiAdress = {apiAdress} />}/>
          <Route path='/MyProject' element={<MyProject autorization = { autorization } apiAdress = {apiAdress} />}/>
          <Route path='/Add' element={<Add_project autorization = { autorization } apiAdress = {apiAdress} />}/>
          <Route path='/MyApplications' element={<Applications autorization={autorization} apiAdress = {apiAdress} />}/>
          <Route path='/Analytics' element={<Analytics autorization={autorization} apiAdress = {apiAdress} />}/>
          <Route path='/Users_lectures' element={<Users_page autorization={autorization} apiAdress = {apiAdress} />}/>
          <Route path='/Users_students' element={<Users_page autorization={autorization} apiAdress = {apiAdress} />}/>
          {/* <Route path='/MyProfil_2' element={<MyProfile_2 autorization={autorization} apiAdress = {apiAdress} />}/> */}
          <Route path='/Error' element = {<Error error = "Oshibka123"/>}/>
          {/* <Link to={'/Error'} state={{ from: "404" }}></Link> */}
          {/*
            <Redirect to={{
              pathname: '/Error',
              state: { Error: 'ErrorText' }
              }}
            />
          */}
        </Routes>
    </>
  );
}

export default App;

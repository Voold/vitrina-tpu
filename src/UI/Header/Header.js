import React from "react";
import "./Header.css";
import Vitrina from "./ЛоготипВитринаПроектов.svg";
import mobile_Vitrina from "./ЛогоТПУ.svg"
import { Link } from "react-router-dom";



const Header = (props) => {
  let ProfileEntered;

  if (props.autorz === '1' || props.autorz === 1){
    return (
      <div id = "over">

        <header class='header_myprofil'>
          <div class='logo_myprofil ver_for_pc'>
            <img src={Vitrina} alt="Vitrina"></img>
          </div>

          <div class='logo_myprofil mobile'>
          <img src={mobile_Vitrina} alt="Vitrina"></img>
          </div>

            <Link to={props.path}>
              <div class='Myprofil_header_name'>

                <div class='Myprofil_name Myprofil_name_main'>
                  <div class='Myprofil_name'>Иван Иванов</div>
                  <div class = "sub_profil_name">{props.UID}</div>
                </div>
                
                <div class='Myprof_icon'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="66" height="66" viewBox="0 0 66 66" fill="none">
                    <rect width="66" height="66" rx="33" fill="black" fill-opacity="0.12"/>
                    <path d="M41.0091 52H23.9909C22.1372 51.932 20.4104 51.0325 19.2822 49.5472C18.154 48.0618 17.7422 46.1459 18.1592 44.3225L18.5994 42.2135C19.1056 39.3585 21.5383 37.2605 24.4127 37.2H40.5873C43.4617 37.2605 45.8944 39.3585 46.4006 42.2135L46.8408 44.3225C47.2578 46.1459 46.846 48.0618 45.7178 49.5472C44.5896 51.0325 42.8628 51.932 41.0091 52Z" fill="black" fill-opacity="0.56"/>
                    <path d="M33.4169 33.5H31.5831C27.5318 33.5 24.2476 30.1869 24.2476 26.1V21.216C24.2428 19.5659 24.8904 17.982 26.047 16.8152C27.2036 15.6484 28.7737 14.9951 30.4094 15H34.5906C36.2263 14.9951 37.7964 15.6484 38.953 16.8152C40.1096 17.982 40.7572 19.5659 40.7524 21.216V26.1C40.7524 28.0626 39.9795 29.9448 38.6039 31.3326C37.2282 32.7204 35.3624 33.5 33.4169 33.5Z" fill="black" fill-opacity="0.56"/>
                  </svg>
                </div>
              </div>
            </Link>



        </header>

      </div>

      )
                     
  } else {
    ProfileEntered =  <Link to={props.path}>
                        <button class="btn-modal" >
                          <div class="Text">
                            <span>Войти</span>
                          </div>
                        </button>
                      </Link>;
  }

  return (
  <div id = "over_head">

    <a name="head"></a>
    <header class='header_myprofil'>
      <div class='logo_myprofil ver_for_pc'><img src={Vitrina} alt="Vitrina"></img></div>
      <div class='logo_myprofil mobile'><img class="mobile_logo_header" src={mobile_Vitrina} alt="Vitrina"></img></div>
    </header>

    {ProfileEntered}
  

  </div>
  )
}

Header.defaultProps = {
  autorz : "0", 
  path : "/MyProfil",
};

export default Header;


// title: "Название проекта",
// source: "Источник проекта",
// jobs: "Вакансии проекта",
// hashtag1: "Хэштэг1",
// hashtag2: "Хэштег2",
// date_end:"дата окончания",
// duration:"дительность",
// school:"Школа",
// type:"Тип проекта",
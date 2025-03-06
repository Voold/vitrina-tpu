import React, { Component }  from "react";

import style from "./myApplicationsStyle.module.css";
import Block_application from "../components/Block_application.jsx";

export default function Page_my_applications(props) {
  // получаем метод для генерации классов jss


  // <div>
  //     123
  // </div>
  // <div className={classes.root}>
  //     {console.log(classes)}
  //   <h1>That's JssComponent</h1>
  //   <h2 className="basic_h2">I use JSS</h2>
  //   <div className={classes.content_div}>
  //     Any Text
  //   </div>
  // </div>
  

  return (
    <div className={style.root}>
      <div className={style.topApplication}>
        <div className={style.titleBlock}>
          <label className={style.titleLabel}>Мои заявки</label>
          <label className={style.subLabel}>
            <div className={style.newApplicationsSVG}>
              <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="18" cy="18" r="18" fill="#D13535"/>
                <path d="M20.136 6.792L19.624 21.8H15.976L15.464 6.792H20.136ZM15.08 26.632C15.08 25.032 16.328 23.912 17.8 23.912C19.24 23.912 20.488 25.032 20.488 26.632C20.488 28.232 19.24 29.32 17.8 29.32C16.328 29.32 15.08 28.232 15.08 26.632Z" fill="white"/>
              </svg>
            </div>
            Новые заявки</label>
        </div>

        <div className={style.subTopBlock}>
          <div className={style.sortMenu}>

          </div>
          <div className={style.rejectButtton}>

          </div>
        </div>
      </div>
      <div className={style.newApplicationsBlock}>
        <Block_application/>
      </div>
      <div className={style.splitter}></div>

    </div>
  );
}
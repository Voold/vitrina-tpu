import React, { useEffect, useState } from "react";
import "./Application_main.css"
import Popup from "reactjs-popup";
import "./Modal_application.css";
import { ReactComponent as Icon } from "./svg/icon_man.svg"
import { ReactComponent as School } from "./svg/school.svg";
import { ReactComponent as Mounth } from "./svg/mounth.svg";
import { ReactComponent as Type } from "./svg/type_project.svg";
import { ReactComponent as Oke } from "./svg/oke.svg";
import { ReactComponent as Not_oke } from "./svg/not_oke.svg";
import { ReactComponent as Stick } from "./svg/big_stick.svg";
import palka from './image/palka_project.png'
import bloknot from './image/bloknot.png'
import school from './image/school.png'
import fail from './image/fail.png'
import "./Modal.css";

export default function Application() {

    const [modalActive, setModalActive] = useState(false)
    const [newApp, setNewapp] = useState([
    ])
    let value = 1;
    
    return (
        <div class="main_application" >
            <div class="header_application">
                <div class="header_application_1">
                    <p>Мои заявки</p>
                    <div class="sort_application">
                        <button onClick={() => setModalActive(true)}>Сортировка <svg width="23.011719" height="13.012695" viewBox="0 0 23.0117 13.0127" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path id="Line 94" d="M1.5 1.5L11.5 11.5" stroke="#7C7C7C" stroke-opacity="1.000000" stroke-width="3.000000" stroke-linecap="round" />
                            <path id="Line 95" d="M21.5 1.5L11.5 11.5" stroke="#7C7C7C" stroke-opacity="1.000000" stroke-width="3.000000" stroke-linecap="round" />
                        </svg>
                        </button>
                        {modalActive && (

                            <>

                                <div class="modal_app">
                                    <div class="modal_content_app">
                                        <button> <p>Принятые</p> <svg width="20.000000" height="20.000000" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle id="Ellipse 226" cx="10.000000" cy="10.000000" r="8.500000" stroke="#898989" stroke-opacity="1.000000" stroke-width="3.000000" />
                                        </svg>
                                        </button>
                                        <button><p>Отклонённые</p> <svg width="20.000000" height="20.000000" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle id="Ellipse 226" cx="10.000000" cy="10.000000" r="8.500000" stroke="#898989" stroke-opacity="1.000000" stroke-width="3.000000" />
                                        </svg></button>
                                        <button onClick={() => setModalActive(false)}><p>Новые</p> <svg width="20.000000" height="20.000000" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle id="Ellipse 226" cx="10.000000" cy="10.000000" r="8.500000" stroke="#898989" stroke-opacity="1.000000" stroke-width="3.000000" />
                                        </svg></button>
                                    </div>
                                </div>
                            </>
                        )}
                    </div>

                </div>
                <div class="header_application_2">
                    <svg width="36.000000" height="42.000000" viewBox="0 0 36 42" fill="none" xmlns="http://www.w3.org/2000/svg" >
                        <circle id="Ellipse 202" cx="18.000000" cy="21.000000" r="18.000000" fill="#D13535" fill-opacity="1.000000" />
                        <path id="!" d="M15.65 7.72L20.71 7.72L20.27 24.02L16.11 24.02L15.65 7.72ZM20.92 28.57C20.9 30.07 19.64 31.29 18.19 31.29C16.69 31.29 15.45 30.07 15.46 28.57C15.45 27.07 16.69 25.86 18.19 25.86C19.64 25.86 20.9 27.07 20.92 28.57Z" fill="#FFFFFF" fill-opacity="1.000000" fill-rule="evenodd" />
                    </svg>

                    <p class="text_application1" > Новые заявки</p>

                    <div class="reject_everything"><button > Отклонить всё!</button></div>
                </div>
            </div>

            {/* new application */}
            <Popup className="popup1" trigger={
                <div class="application_new">
                    <div>
                        <div class=" appp">
                            <p>Заявка №{value}</p>
                            <p>Источник проекта</p>
                        </div>
                        <div class="appp2">
                            <School /> <p> школа </p>
                            <Mounth /> <p>тип проекта</p>
                            <Type /><p>13 месяцев</p>
                        </div>
                    </div>
                    <div class="appp3">
                        <div class="on_look">
                            <p>На рассмотрении </p>
                        </div>
                        <p> до ............</p>

                        <div class="button_on_look" onClick={(e) => e.stopPropagation()}>
                            <Popup className="popup4" trigger={<button><Oke /></button>} modal
                                nested>
                                <div class="popupContent">
                                    <p>Вы уверены что хотите принять заявку</p>
                                    <p>{"<<"}Заявка #{value}{">>"}</p>
                                    <div class="container_button">
                                        <button>Да</button>
                                        <button>Нет</button>
                                    </div>
                                </div>
                            </Popup>
                            <Popup className="popup4" trigger={<button><Not_oke /></button>} modal
                                nested>
                                <div class="popupContent">
                                    <p>Вы уверены что хотите отклонить заявку</p>
                                    <p>{"<<"}Заявка #{value}{">>"}</p>
                                    <div class="container_button">
                                        <button>Да</button>
                                        <button>Нет</button>
                                    </div>
                                </div>
                            </Popup>
                        </div>
                    </div>
                </div>}
                modal nested>
                <div class="modal_application_">
                    <div class="app_on_look">
                        <p>Заявка #{value}</p>
                        <div class="on_look">
                            <p>На рассмотрении </p>
                        </div>
                    </div>
                    <div class="student_app">
                        <Icon />
                        <div class="student_app2">
                            <p>Костя Тихий</p>
                            <p>{"ИШИТР"}/n курс </p>
                        </div>
                    </div>
                    <div class="content_modal">
                        <div class="to_the_project">
                            <p>К Проекту</p>
                            {/* Позаимстовал для бастроты веерстки */}
                            <div class="opis_2">
                                <div class="left-block_container">

                                    <div class="nazv">
                                        <p>{"Какой-то там проект"}</p>
                                    </div>

                                    <p class="ist" >{"Чето там"}</p>

                                    <div class="role_cont">
                                        <p>{Object.values("props.card_data.roles").join(", ")}</p>
                                        {/* <p>{props.card_data.roles.toString()}</p> */}
                                    </div>

                                    <div class="box_for_hashtags">
                                        <div class="cont-hesh">

                                            <div class="hesh">
                                                <a href="#" alt="hashtag">#{"props.card_data.hashtags[0]"} </a>
                                            </div>
                                            <div class="hesh">
                                                <a href="#" alt="hashtag">#{"props.card_data.hashtags[1]"}</a>
                                            </div>


                                            {/* <div class="hesh heshurl">
                                            <span class="menu-item">
                                                    a ref = {divBlock} class="texturl" href="#" alt="hashtag">#{props.card_data.hashtag1}</a>
                                                                    </span>
                                                            </div>
                                                                            <div class="hesh heshurl2">
                                                <span class="menu-item">
                                             <a ref = {divBlock} class="texturl2" href="#" alt="hashtag">#{props.card_data.hashtag2}</a>
                                                </span>
                                                                </div> */}

                                        </div>
                                    </div>

                                </div>

                                <div class="right-block_container">
                                    <img class="palka" src={palka} alt="|" />

                                    <div class="info">
                                        <div class="cont-nd">
                                            <div class="upper_nabor_text">
                                                <div class="nabor">
                                                    <a>Идёт набор</a>
                                                </div>
                                                <div class="date">
                                                    <p>до {"23.06.24"}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="krinfo">
                                            <div class="fon-krinfo">
                                                <img class="img_fon-krinfo" src={bloknot} alt="" />
                                            </div>
                                            <p class="normal_p_desct" >{13} месяцев</p>
                                            <p class="mobile_p_desct" >{15} мес</p>
                                        </div>
                                        <div class="krinfo">
                                            <div class="fon-krinfo">
                                                <img src={school} alt="" />
                                            </div>
                                            <p>{"ИШИтр"}</p>
                                        </div>
                                        <div class="krinfo">
                                            <div class="fon-krinfo">
                                                <img src={fail} alt="" />
                                            </div>
                                            <p>{"БЛин"}</p>
                                        </div>
                                    </div>
                                </div>
                                

                            </div>
                            {/*    Позаимствовал для быстроты вертски  */}
                        </div>
                        <div class="role_and_opis">
                            <p>Роль</p>
                            <div class ="input_modal">
                              <p> Самый лучший рЕпер</p>                      
                            </div>
                            <p>Описание</p>
                            <div class ="textarea_modal">
                                <p>Чето поёт, чето не поет</p>
                            </div>
                            <div class ="Button_modal">
                                <button>Принять</button>
                                <button> Отклонить</button>
                            </div>
                        </div>
                    </div>
                </div>
            </Popup>

            {/* new application */}
            <div class="stick">
                <Stick />
            </div>
            {/* old application */}
            <Popup className="popup1" trigger={<div class="application_new">
                <div>
                    <div class=" appp">
                        <p>Заявка №{value}</p>
                        <p>Источник проекта</p>
                    </div>
                    <div class="appp2">
                        <School /> <p> школа </p>
                        <Mounth /> <p>тип проекта</p>
                        <Type /><p>13 месяцев</p>
                    </div>
                </div>
                <div class="appp3">
                    <div class="accepted">
                        <p>Принята </p>
                    </div>
                    <p> до ............</p>

                </div>
            </div>}
                modal nested>
                        <div class="modal_application_">
                    <div class="app_on_look2">
                        <p>Заявка #{value}</p>
                        <div class="accepted">
                            <p>Принята </p>
                        </div>
                    </div>
                    <div class="student_app">
                        <Icon />
                        <div class="student_app2">
                            <p>Костя Тихий</p>
                            <p>{"ИШИТР"}/n курс </p>
                        </div>
                    </div>
                    <div class="content_modal">
                        <div class="to_the_project">
                            <p>К Проекту</p>
                            {/* Позаимстовал для бастроты веерстки */}
                            <div class="opis">
                                <div class="left-block_container">

                                    <div class="nazv">
                                        <p>{"Какой-то там проект"}</p>
                                    </div>

                                    <p class="ist" >{"Чето там"}</p>

                                    <div class="role_cont">
                                        <p>{Object.values("props.card_data.roles").join(", ")}</p>
                                        {/* <p>{props.card_data.roles.toString()}</p> */}
                                    </div>

                                    <div class="box_for_hashtags">
                                        <div class="cont-hesh">

                                            <div class="hesh">
                                                <a href="#" alt="hashtag">#{"props.card_data.hashtags[0]"} </a>
                                            </div>
                                            <div class="hesh">
                                                <a href="#" alt="hashtag">#{"props.card_data.hashtags[1]"}</a>
                                            </div>


                                            {/* <div class="hesh heshurl">
                                            <span class="menu-item">
                                                    a ref = {divBlock} class="texturl" href="#" alt="hashtag">#{props.card_data.hashtag1}</a>
                                                                    </span>
                                                            </div>
                                                                            <div class="hesh heshurl2">
                                                <span class="menu-item">
                                             <a ref = {divBlock} class="texturl2" href="#" alt="hashtag">#{props.card_data.hashtag2}</a>
                                                </span>
                                                                </div> */}

                                        </div>
                                    </div>

                                </div>

                                <div class="right-block_container">
                                    <img class="palka" src={palka} alt="|" />

                                    <div class="info">
                                        <div class="cont-nd">
                                            <div class="upper_nabor_text">
                                                <div class="nabor">
                                                    <a>Идёт набор</a>
                                                </div>
                                                <div class="date">
                                                    <p>до {"23.06.24"}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="krinfo">
                                            <div class="fon-krinfo">
                                                <img class="img_fon-krinfo" src={bloknot} alt="" />
                                            </div>
                                            <p class="normal_p_desct" >{13} месяцев</p>
                                            <p class="mobile_p_desct" >{15} мес</p>
                                        </div>
                                        <div class="krinfo">
                                            <div class="fon-krinfo">
                                                <img src={school} alt="" />
                                            </div>
                                            <p>{"ИШИтр"}</p>
                                        </div>
                                        <div class="krinfo">
                                            <div class="fon-krinfo">
                                                <img src={fail} alt="" />
                                            </div>
                                            <p>{"БЛин"}</p>
                                        </div>
                                    </div>
                                </div>
                                

                            </div>
                            {/*    Позаимствовал для быстроты вертски  */}
                        </div>
                        <div class="role_and_opis">
                            <p>Роль</p>
                            <div class ="input_modal">
                              <p> Самый лучший рЕпер</p>                      
                            </div>
                            <p>Описание</p>
                            <div class ="textarea_modal">
                                <p>Чето поёт, чето не поет</p>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </Popup>

            {/* old application */}
        </div>
    )
}
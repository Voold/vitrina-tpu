import React from "react";
import "./Add_project.css";
import "./project_circles_stat1.css";

import {ReactComponent as Calendar_cvg }from "./calendar.svg";
import Popup from 'reactjs-popup';

import { useState } from 'react';

import Calendar from "react-calendar";
import "./Calendar.css"

import List from "./list_professions.js";
import Enter from "./list_add.js";
import { Link } from "react-router-dom";


export default function Add_project(props) {

    const [checkStatus, setCheckStatus] = useState(false)
    const [checkBorders, setCheckBorders] = useState({
        title_checkBorder: '',
        hash1_checkBorder: '',
        hash2_checkBorder: '',
        description_checkBorder: '',
        source_checkBorder: '',
        date_checkBorder: '',
        date2_checkBorder: '',
        date3_checkBorder: '',
        date4_checkBorder: '',
        roles_checkBorder: '',
        goals_checkBorder: '',
        tasks_checkBorder: '',
        result_checkBorder: '',
    })

    const [addProjectData, setAddProjectData] = useState(
        {}
    )

    const addProjectHandler = (event) => {
        event.preventDefault();

        

        const token = "3b3eda82ea25c5f27c38cc6fa0323d7b17130ecf";

        const requestOptions = {
            method: "POST",
            headers: { 
                Accept: "application/json",
                "Content-Type": "application/json",
                "Authorization": "Token 3b3eda82ea25c5f27c38cc6fa0323d7b17130ecf" 
             },
            body: JSON.stringify(addProjectData)
        };


        fetch("http://176.109.107.163:8000/create_project/", requestOptions)
            .then(() => console.log("ADDED"))
            .catch( error => <Link to="/Error" state={{ from: "occupation" }}/>);
    }

    // Проверка формы
    // Двойная проверка по сути - первый раз проверем и даем пользователю кнопку - второй раз проверяем при отправке
    // чтобы по максимуму обезопаситься

    const formChecker = event => {

        event.preventDefault();



        if(event.target.name_project.value.trim().length != 0 && event.target.teg0.value.trim().length !=0  
            && event.target.teg1.value.trim().length !=0 && event.target.description_project.value.trim().length !=0
            && ((date < date2) && (date2 < date3) && (date3 < date4)) && true && event.target.purpose.value.trim().length !=0
            && event.target.tasks.value.trim().length != 0 && event.target.result_project.value.trim().length != 0 && event.target.source_project.value.trim().length != 0)
            {
                if(!checkStatus){
                    setCheckStatus(true);
                    redAlertBody(event)}
                else
                    projectStateHandler(event);

            }
        else{
            setCheckStatus(false);
            redAlertBody(event)
            const alert_text = 'В вашей форме есть критические ошибки, которые нужно исправить для отправки проекта \n';
            alert(`${redAlertText(event, alert_text)}`)
        }
    }

    const redAlertText = (event, message) => {

        let text = message;

        if (redAlertHandler(event.target.name_project.value.trim().length == 0,'')[1])
            text = text + "* Вы не указали название\n"
        if (redAlertHandler(event.target.teg0.value.trim().length == 0,'')[1])
            text = text + "* Вы не указали хэштэг 1\n"
        if (redAlertHandler(event.target.teg1.value.trim().length == 0,'')[1])
            text = text + "* Вы не указали хэштэг 2\n"
        if (redAlertHandler(event.target.description_project.value.trim().length == 0,'')[1])
            text = text + "* Вы не указали описание проекта\n"        
        if (redAlertHandler(event.target.source_project.value.trim().length == 0,'')[1])
            text = text + "* Вы не указали источник  проекта\n"
        if (redAlertHandler(!((date < date2) && (date2 < date3) && (date3 < date4)),'WB')[1])
            text = text + "* Неверный хронологический порядок событий\n"
        if (redAlertHandler(false,'WB')[1])
            text = text + "* Вы не указали роли\n"
        if (redAlertHandler(event.target.purpose.value.trim().length == 0,'')[1])
            text = text + "* Вы не указали цели\n"
        if (redAlertHandler(event.target.tasks.value.trim().length == 0,'')[1])
            text = text + "* Вы не указали задачи\n"
        if (redAlertHandler(event.target.result_project.value.trim().length == 0,'')[1])
            text = text + "* Вы не указали ожидаемый результат\n"
        return (text)
    }

    const redAlertBody = (event) => {
        setCheckBorders( () => {
            return{
                title_checkBorder: redAlertHandler(event.target.name_project.value.trim().length == 0,'')[0],
                hash1_checkBorder: redAlertHandler(event.target.teg0.value.trim().length == 0,'')[0],
                hash2_checkBorder: redAlertHandler(event.target.teg1.value.trim().length == 0,'')[0],
                description_checkBorder: redAlertHandler(event.target.description_project.value.trim().length == 0,'')[0],
                source_checkBorder: redAlertHandler(event.target.source_project.value.trim().length == 0, '')[0],
                date_checkBorder: redAlertHandler(!((date < date2) && (date2 < date3) && (date3 < date4)),'WB')[0],
                date2_checkBorder: redAlertHandler(!((date < date2) && (date2 < date3) && (date3 < date4)),'WB')[0],
                date3_checkBorder: redAlertHandler(!((date < date2) && (date2 < date3) && (date3 < date4)),'WB')[0],
                date4_checkBorder: redAlertHandler(!((date < date2) && (date2 < date3) && (date3 < date4)),'WB')[0],
                roles_checkBorder: redAlertHandler(false,'WB')[0],
                goals_checkBorder: redAlertHandler(event.target.purpose.value.trim().length == 0,'')[0],
                tasks_checkBorder: redAlertHandler(event.target.tasks.value.trim().length == 0,'')[0],
                result_checkBorder: redAlertHandler(event.target.result_project.value.trim().length == 0,'')[0],
            }
        });
    }

    const redAlertHandler = (status, WB) => {
        if(status)
            return(["red_alert"+WB,true])
        else
            return(["",false])
    }


    const dateToDate = (date) => {
        return `${date.getFullYear()}-${String(date.getMonth()+ 1).padStart(2,'0')}-${String(date.getDate()).padStart(2,'0')}`
    }

      // Состояние даты нового проекта
    const projectStateHandler = (event) => {
        event.preventDefault();
        console.log(dateToDate(date))

        let project_status = "team_forming";
        if (current_date > date)
            project_status = "start_project"
        if (current_date > date2)
            project_status = "project_presentation"
        if (current_date > date3)
            project_status = "poster_session"
        if (current_date > date)
            project_status = "project_protection"


        setAddProjectData({
                "title": event.target.name_project.value,
                "source": "Витрина проектов",
                "hashtags": [event.target.teg0.value, event.target.teg1.value],
                "duration": Math.ceil((date2-date)/2628000000),
                "school": props.school,
                "type": "НИРС",
                "get_member_end": "2023-01-31",
                "course": ["1"],
                "start_date": dateToDate(date),
                "project_presentation_date": dateToDate(date2),
                "poster_session_date": dateToDate(date3),
                "end_date": dateToDate(date4),
                "description": event.target.description_project.value,
                "status": project_status,
                "goals": [event.target.purpose.value],
                "tasks": [event.target.tasks.value],
                "result": event.target.result_project.value,
                "roles": ["back", "front"],
                "requirements": [
                        {
                            "role": "back",
                            "description": ["БЫТЬ РЕАЛЬНА КРУ", "петь гойду по утрам", "знать текст \"Я русский\" наизусть"]
                        },
                        {
                            "role": "front",
                            "description": ["БЫТЬ ПОЧТИ КРУ", "восхвалять газманова"]
                        }
                    ]

            });

    }

    

    //list role
    const [prof, setProf] = useState([
        // {
        //     id:1,
        //     title: 'Аналитик',
        //     title1: "Какой-то хуй",
        //     status: true
        // },
        // {
        //     id:2,
        //     title: 'Backend',
        //     title1: "Какой-то не хуй",
        //     status: true
        // },
        // {
        //     id:3,
        //     title: 'ДизАВнер',
        //     title1: "Какой-то там хуй",
        //     status: true
        // }
    ])


    // date
    const current_date = new Date();
    const [date_for_recruitment, setDate_for_recruitment] = useState(new Date());
    const [date, setDate] = useState(new Date());
    const [date2, setDate2] = useState(new Date());
    const [date3, setDate3] = useState(new Date());
    const [date4, setDate4] = useState(new Date());

    //circles
    const green_circle_for_stat = <svg width="60" height="59" viewBox="0 0 60 59" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M57.1083 29.8242C57.1083 44.7886 44.9773 56.9197 30.0128 56.9197C15.0483 56.9197 2.91726 44.7886 2.91726 29.8242C2.91726 14.8597 15.0483 2.72864 30.0128 2.72864C44.9773 2.72864 57.1083 14.8597 57.1083 29.8242Z" fill="#3FE260" stroke="#229F3B" stroke-width="4" />
    </svg>;


    const void_circle_for_stat = <svg width="36.000000" height="36.000000" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path id="Ellipse 1" d="M35.68 17.99C35.68 27.93 27.62 35.99 17.68 35.99C7.74 35.99 -0.32 27.93 -0.32 17.99C-0.32 8.05 7.74 0 17.68 0C27.62 0 35.68 8.05 35.68 17.99Z" fill="#FFFFFF" fill-opacity="1.000000" fill-rule="nonzero" />
        <path id="Ellipse 1" d="M17.68 35.99C27.62 35.99 35.68 27.93 35.68 17.99C35.68 8.05 27.62 0 17.68 0C7.74 0 -0.32 8.05 -0.32 17.99C-0.32 27.93 7.74 35.99 17.68 35.99ZM23.05 30.96Q20.58 31.99 17.68 31.99Q14.78 31.99 12.31 30.96Q9.83 29.94 7.78 27.89Q5.73 25.84 4.71 23.36Q3.68 20.89 3.68 17.99Q3.68 15.09 4.71 12.62Q5.73 10.14 7.78 8.09Q9.83 6.04 12.31 5.02Q14.78 4 17.68 4Q20.58 4 23.05 5.02Q25.53 6.04 27.58 8.09Q29.63 10.14 30.65 12.62Q31.68 15.09 31.68 17.99Q31.68 20.89 30.65 23.36Q29.63 25.84 27.58 27.89Q25.53 29.94 23.05 30.96Z" fill="#000000" fill-opacity="0.400000" fill-rule="evenodd" />
    </svg>

    const tick_for_circle_for_stat = <svg width="22" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 8.77778L8.69231 15L21 1" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    </svg>;

    return (
        <form id = "add_Form" class="add_class" onSubmit={formChecker}>
            <div class="print_add">
                <p>Добавить проект</p>
            </div>
            <div class="name_project">
                <input class= {checkBorders.title_checkBorder} name="name_project" placeholder="Название вашего проекта"></input>
            </div>
            <div class="tegs">
                <input class = {"mini_tags " + checkBorders.hash1_checkBorder} name="teg0" placeholder=" # Хэштэг 1"></input>
                <input class = {"mini_tags " + checkBorders.hash2_checkBorder} name="teg1" placeholder=" # Хэштэг 2"></input>
            </div>
            <div class="description_project">
                <textarea class = {checkBorders.description_checkBorder} name="description_project" placeholder="Краткое описание вашего проекта" type="text"></textarea>
            </div>
            <div class ="source_project">  
                <input class = { checkBorders.source_checkBorder} name="source_project" placeholder="Источник проекта"/>
            </div>
            <div class ="recruitment"> 
                <p>Набор участников </p> 
                <Popup className="popup_data" trigger={<button class="for_button"> <Calendar_cvg/> <p> {current_date.toLocaleDateString()}-{date_for_recruitment.toLocaleDateString()}</p></button>}>
                    
                    <Calendar class="react-calendar"
                    onChange={setDate_for_recruitment}
                    value={date_for_recruitment}
                    minDetail="date">
                    </Calendar>

                </Popup>
            </div>

            <div class="project_circles_stat1">

                <div class="project_circles_stat_circle-block1">
                    <div class="project_circles_stat_circle1">

                        <div class="project_circles_stat_onCircle1">

                        </div>

                        {void_circle_for_stat}

                    </div>
                    <div class="project_circles_stat_labels1">
                        <Popup  trigger={<button type="button" class={"project_circles_stat_labels_main_green1 "+ checkBorders.date_checkBorder}>Старт проекта</button>} >
                            <Calendar class="react-calendar"
                                onChange={setDate}
                                value={date}
                                minDetail="date"
                                minDate={new Date()}
                                maxDate={new Date()}
                            >
                            </Calendar>
                        </Popup>
                        <label class={"project_circles_stat_labels_date_green1 "+ checkBorders.date_checkBorder}>{date.toLocaleDateString()}</label>
                    </div>
                </div>

                <div class="project_circles_stat_circle-block1">

                    <div class="project_circles_stat_circle1">

                        <div class="project_circles_stat_onCircle1">

                        </div>

                        {void_circle_for_stat}

                    </div>
                    <div class="project_circles_stat_labels1">
                        <Popup className="popup_data" trigger={<button type="button" class={"project_circles_stat_labels_main_green1 "+ checkBorders.date2_checkBorder}>Представление проекта</button>} >
                            <Calendar class="react-calendar"
                                onChange={setDate2}
                                value={date2}
                                minDetail="date">
                            </Calendar>
                        </Popup>
                        <label class={"project_circles_stat_labels_date_green1 "+ checkBorders.date2_checkBorder}>{date2.toLocaleDateString()}</label>
                    </div>
                </div>

                <div class="project_circles_stat_circle-block1">

                    <div class="project_circles_stat_circle1">

                        <div class="project_circles_stat_onCircle1">
                            {/* <label class = "project_circles_stat_numberOfCircle">3</label> */}
                        </div>

                        {void_circle_for_stat}

                    </div>
                    <div class="project_circles_stat_labels1">
                        <Popup className="popup_data" trigger={<button type="button" class={"project_circles_stat_labels_main_gray1 "+ checkBorders.date3_checkBorder}>Постерная сессия</button>} >
                            <Calendar class="react-calendar"
                                onChange={setDate3}
                                value={date3}
                                minDetail="date">
                            </Calendar>
                        </Popup>
                        <label class={"project_circles_stat_labels_date_gray1 "+ checkBorders.date3_checkBorder}>{date3.toLocaleDateString()}</label>
                    </div>
                </div>

                <div class="project_circles_stat_circle-block1">

                    <div class="project_circles_stat_circle1">


                        <div class="project_circles_stat_onCircle1">
                            {/* <label class = "project_circles_stat_numberOfCircle">4</label> */}
                        </div>

                        {void_circle_for_stat}

                    </div>
                    <div class="project_circles_stat_labels1">
                        <Popup className="popup_data" trigger={<button type="button" class={"project_circles_stat_labels_main_gray1 "+ checkBorders.date4_checkBorder}>Защита проекта</button>} >
                            <Calendar class="react-calendar"
                                onChange={setDate4}
                                value={date4}
                                minDetail="date"
                            >
                            </Calendar>
                        </Popup>
                        <label class={"project_circles_stat_labels_date_gray1 "+ checkBorders.date4_checkBorder}>{date4.toLocaleDateString()}</label>
                    </div>
                </div>

                <div className="project_circles_stat_line1">
                    {/* <svg width="1034" height="5" viewBox="0 0 1034 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.917236 2.82417L1033.81 2.82408" stroke="#229F3B" stroke-opacity="0.3" stroke-width="4"/>
                        </svg> */}
                </div>
            </div>


            <List prof={prof} setProf={setProf} />


            <div class='add_role'>
                <Popup className="popup1"
                    trigger={
                        <div class='role'>
                            <svg width="44.000000" height="44.000000" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect id="Rectangle 42" x="2.000000" y="2.000000" rx="8.000000" width="40.000000" height="40.000000" stroke="#000000" stroke-opacity="0.200000" stroke-width="4.000000" />
                                <path id="Line 22" d="M10.15 22L33.84 22" stroke="#767676" stroke-opacity="1.000000" stroke-width="4.000000" stroke-linecap="round" />
                                <path id="Line 23" d="M22 10.15L22 33.84" stroke="#767676" stroke-opacity="1.000000" stroke-width="4.000000" stroke-linecap="round" />
                            </svg>
                            <p class = {checkBorders.roles_checkBorder}>Добавить роль и описание</p>
                        </div>
                    }
                    modal
                    nested>
                    <Enter class="Mylist" prof={prof} setProf={setProf} />
                </Popup>

            </div>
            <div class="select_type_project">
                <p>Выберите тип проекта</p>
                <button><p>ВКР</p></button>
                <button><p>НИРС</p></button>
                <button><p>УИРС</p></button>
                <button><p>Творческий проект</p></button>
            </div>
            <p class="for_p_opis">Опишите свой проект</p>
            <div class="inline_for_items">
                
                <div class="purpose">
                    <textarea class={checkBorders.goals_checkBorder} name="purpose" placeholder="Какие цели у вашего проекта?" type="text"></textarea>
                </div>
                <div class="purpose">
                    <textarea class={checkBorders.tasks_checkBorder} name="tasks" placeholder="Какие задачи у вашего проекта?" type="text"></textarea>
                </div>
            </div>  
            <div class="description_project">
                <textarea class={"scroll "+checkBorders.result_checkBorder} name="result_project" placeholder="Ожидаемый результат?" type="text"></textarea>
            </div>

            {!checkStatus && <div class="gray batton_add_project" ><button type="submit" form="add_Form">Проверить</button></div>}

            {checkStatus && <Popup className="popup3" trigger={<div class="batton_add_project" ><button form = "add_Form" type="submit"> <p>Добавить проект</p> </button></div>} modal nested>
                <div class="application">
                    <div class="application_p">
                        <p>Вы уверены?</p>
                    </div>

                    <Popup
                        className="popup4" trigger={<button class="batton_on_addproj" >Да, добавить проект</button>} modal nested>
                        <div class="additioncheck">
                            <div class="application_p">
                                <p>Создать</p>
                            </div>
                            <div>
                                <ul class="something">
                                    <li> Проект в Redmine  </li> <button class="button_try"> </button>
                                    <li> Канал в Rocket.Chat  </li> <button class="button_try">  </button>
                                    <li> Репозиторий в GitLab   </li> <button class="button_try"></button>
                                </ul>
                            </div>
                            <button class="batton_on_addproj" onClick={addProjectHandler}>Добавить проект</button>
                        </div>
                    </Popup>

                    <button class="batton_on_addproj">Нет</button>
                </div>
            </Popup>}
        </form>

    );
}

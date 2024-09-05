import React, { useState, useEffect} from 'react'
import Filtr_school from './Filtr_school.js'
import Filtr_ky from './Filtr_ky.js'
import Filtr_tip from './Filtr_tip.js'
import Filtr_tg from './Filtr_tg.js'
import Filtr_Ro from './Ro.js'


import './Filtr2.css'

export default function Filtr(props) {
  const arrow_icon = ( <svg viewBox="0 0 24 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path id="icon" d="M23 1L12 12L0.999999 0.999999" stroke="#222222" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg> )

  const [data, setData] = useState({
        sch: [],
        course: [],
        type: [],
        tags: [],
        role: [],
  });

  const filterSchHandler = (event) =>{
    var arr = data.sch;
    if (event.ch == "add"){
      setData((previousState) => {
        return{
        ...previousState,
        sch: arr.concat(event.val),
        }});
    } else {
      setData((previousState) => {
        return{
        ...previousState,
        sch: arr.toSpliced(arr.indexOf(event.val.replaceAll(" ","")+""),1),
        }});
    };
  }
  
  const filterCourseHandler = (event) =>{
    var arr = data.course;
    if (event.ch == "add"){
    setData((previousState) => {
      return{
      ...previousState,
      course: arr.concat(event.val),
      }});
    } else {
      setData((previousState) => {
        return{
        ...previousState,
        course: arr.toSpliced(arr.indexOf(event.val.replaceAll(" ","")+""),1),
        }});
    };
  }

  const filteTypehHandler = (event) =>{
    var arr = data.type;
    if (event.ch == "add"){
    setData((previousState) => {
      return{
      ...previousState,
      type: arr.concat(event.val),
      }});
    } else {
      setData((previousState) => {
        return{
        ...previousState,
        type: arr.toSpliced(arr.indexOf(event.val.replaceAll(" ","")+""),1),
        }});
    };

  }

const filterTagsHandler = (event) =>{
  var arr = data.tags;
    if (event.ch == "add"){
    setData((previousState) => {
      return{
      ...previousState,
      tags: arr.concat(event.val),
      }});
    } else {
      setData((previousState) => {
        return{
        ...previousState,
        tags: arr.toSpliced(arr.indexOf(event.val.replaceAll(" ","")+""),1),
        }});
    };
}

const filterRoleHandler = (event) =>{
  var arr = data.role;
    if (event.ch == "add"){
    setData((previousState) => {
      return{
      ...previousState,
      role: arr.concat(event.val),
      }});
    } else {
      setData((previousState) => {
        return{
        ...previousState,
        role: arr.toSpliced(arr.indexOf(event.val.replaceAll(" ","")+""),1),
        }});
    };
}

  useEffect(() => {
    props.onChangeFiltr(data);
    // console.log(data.type);
  },[data])

  return (
    <div className="cont-sort">
      <div className="sort">

        <div class = "flex_fil_el">
        <p className="Fil">Фильтр</p>
        </div>

        <div class = "flex_fil_el">
        <p className="menu_item_name">Школа</p>
        <Filtr_school onFiltrSch = {filterSchHandler} arrow = {arrow_icon}/>
        </div>

        <div class = "flex_fil_el">
        <p className="menu_item_name">Курс</p>
        <Filtr_ky onFiltrCourse = {filterCourseHandler} arrow = {arrow_icon}/>
        </div>

        <div class = "flex_fil_el">
        <p className="menu_item_name">Тип проекта</p>
        <Filtr_tip onFiltrType = {filteTypehHandler} arrow = {arrow_icon}/>
        </div>

        <div class = "flex_fil_el">
        <p className="menu_item_name">Теги</p>
        <Filtr_tg onFiltrTags = {filterTagsHandler} arrow = {arrow_icon}/>
        </div>

        <div class = "flex_fil_el">
        <p className='menu_item_name'>Роль</p>
        <Filtr_Ro onFiltrRole = {filterRoleHandler} arrow = {arrow_icon}/>
        </div>
        
      </div>
    </div>

  )
}


  
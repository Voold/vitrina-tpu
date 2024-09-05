import Header from './UI/Header/Header.js';
import Filtr from "./KATALOGI/Filtr/Filtr.js";
import Search from "./UI/Search/Search.js";
import Conteiner from "./KATALOGI/Conteiner/Conteiner.js";
import { Link } from "react-router-dom";
import React, { useEffect, useMemo, useState} from 'react';
import "./KATALOGI/main_katalog.css";
import Page_Project from './Page_project.js';
import Filtr_Popup from './KATALOGI/Filtr/Filtr_popup.js';
import HelpBut from './HelpBut.js';
import CatalogProjectFooter from './KATALOGI/CatalogProjectFooter.js';
// import ProjectsList from './KATALOGI/ProjectsList.js';

const p = [<Link to="/Project"><Conteiner/></Link>] ;

function Try( props ) {


  // дефолт дата - вся инфа про все карточки проекта (сразу с апишки)
  const defaultData = props.projects;
  // изначально число проектов равно длине дефолт даты - далее меняется
  let current_countOfPrijects = defaultData.length;
  // Это количество проекутов на оной странице
  const countOfProjectsOnePage = 7;
  

  // через UseState задаем основные штуки, при обновлении которы должно будет изменяться общее состояние
  // maxCount - количесво страниц проектов в нижнем баре
  // current_position - страница на которой юер в данный момент
  // page - переменная для отрисовки страницы проекта (особенность нынешней отрисовки)
  // style_main_div - переменная, чтобы присваивать основной странице display: none (особенность нынешней отрисовки)
  // Filtr_state - нынешнее состояние фиьтра (какие параметры выбраны и т.д)
  const [KatallogData, setKatallogData] = useState({
    maxCount : (Math.ceil(current_countOfPrijects/countOfProjectsOnePage)),
    current_position : 0,
    page: <></>,
    style_main_div : "",
    Filtr_state: {
      sch: [],
      course: [],
      type: [],
      tags: [],
      role: [],}
  });

    

  // пу-пу-пу... Функция которая возвращает со страницы проекта в каталог 
  const GoToBackPageMainHandler =(event) => {
    setKatallogData((previousState) => {
      return{

      ...previousState,
      page : <></>,
      style_main_div: "",
      searchVal: "",
  
      }});

  }


  // Функция, которая переносит на страницу проекта
  const GoToProjectHandler = (event) => {
    const current_id = event.card_data.id;
    const current_api_adress = 'http://176.109.107.163:8000/catalog/project/' + current_id + '/';
    //Тут через апишку и айдишник подтягиваем основную дату


    fetch(current_api_adress)
      .then(response => response.json())
      .then(data => 

        setKatallogData((previousState) => {
      

          return{
    
          ...previousState,
          // card_data = {event.card_data}
          page : <Page_Project data = {data}  autorization = {props.autorization} GoToBackPageMain = {GoToBackPageMainHandler}/>,
          style_main_div : "style_main_div",
      
          }})
        
       )
      .catch(error => console.error(error));


    
  }

  // Состояние фильтра
  const FiltrStateHandler = (event) => {
    /* console.log(event); */
    setKatallogData((previousState) => {
      return{
        ...previousState,
        current_position : 0,
        Filtr_state: event,
      }
      });

  }


  // есть ли у общих массивов общие элементы???
  function haveCommonItems(arr1, arr2) {
    return Object.values(arr1).some(item => arr2.includes(item));
  }
   
  // Пока что в разработке (Поиск)

  // function SearchFieldSort(name, val) {
  //   console.log(name + "1");
  //   // val = Object.toString(val).toLowerCase();
  //   // return Object.toString(name).toLowerCase().startsWith(val.slice(0, Math.max(Object.toString(name).length - 1, 1)));
  // }

  // Слайсер главной даты, делаем несколько массивов исходя из параметров (количество проектов на странице и т.д)
  const slicedArrayOfProjectsFunction = (arr, maxCount, curCount) => { 
    const slicedArrayOfProjects = arr.reduce((p,c)=>{
      if(p[p.length-1].length == maxCount){
        p.push([]);
      }
      
      p[p.length-1].push(c);
      return p;
      }, [[]]);

      current_countOfPrijects = arr.length;

    return slicedArrayOfProjects[curCount];
  }

  

  // Через мемоизацию получаем отфильтрованную дату
  const filteredData = useMemo(() => {


    // Пока что в разработке (Поиск)

    // if (KatallogData.searchVal != "") {
    //   let filteredProjects = props.projects.filter((el) => (
    //     (SearchFieldSort(el.card_data.title, KatallogData.searchVal))
    //   ));
    //   return filteredProjects;
    // }

    //Если все состояния фильтра пустые - возвращаем дефолт дату
    if (KatallogData.Filtr_state.sch.length + KatallogData.Filtr_state.course.length + KatallogData.Filtr_state.type.length + KatallogData.Filtr_state.tags.length + KatallogData.Filtr_state.role.length == 0) {

      return slicedArrayOfProjectsFunction(defaultData, countOfProjectsOnePage, KatallogData.current_position);

    }


    let filteredProjects = props.projects.filter((el) => (
      (KatallogData.Filtr_state.sch.includes(el.school) || KatallogData.Filtr_state.sch.length == 0) &&
      (haveCommonItems(el.course, KatallogData.Filtr_state.course) || KatallogData.Filtr_state.course.length == 0) &&
      (KatallogData.Filtr_state.type.includes(el.type) || KatallogData.Filtr_state.type.length == 0) &&
      ((KatallogData.Filtr_state.tags.includes(el.hashtags[0]) || KatallogData.Filtr_state.tags.length == 0) ||
      (KatallogData.Filtr_state.tags.includes(el.hashtags[1]))) &&
      (haveCommonItems(el.roles, KatallogData.Filtr_state.role) || KatallogData.Filtr_state.role.length == 0)

    )); 

    return slicedArrayOfProjectsFunction(filteredProjects, countOfProjectsOnePage, KatallogData.current_position);

  },[KatallogData])


  // Пока что в разработке (Поиск)
  const updateSearchFieldHandler = (event) => {
    setKatallogData((previousState) => {
      return{
        ...previousState,
        searchVal: event,
      }
      });
  }

  const SelectNewPageHandler = (event) => {
    setKatallogData((previousState) => {
      return{
        ...previousState,
        current_position: event,
      }
      });
  }

  useEffect(() => {
    setKatallogData((previousState) => {
      return{
        ...previousState,
        maxCount:(Math.ceil(current_countOfPrijects/countOfProjectsOnePage)),
      }
      });
  },[current_countOfPrijects])


  return (
    <div>
      <a name="start"></a>
      <div>
        {KatallogData.style_main_div.length != 0 && <Header autorz = {props.autorization.status} UID = {props.autorization.UID} />}
        {KatallogData.page}
      </div>
      <div class = {KatallogData.style_main_div}>
                      <Header autorz = {props.autorization.status} UID = {props.autorization.UID} />
                      <div class="catalog_body">

                        <div class="catalog_left_part">
                          <div class="Filtr_block">  
                            <Filtr onChangeFiltr = {FiltrStateHandler}/>
                          </div>
                        </div>

                        <div class="catalog_right_part">

                            <div class="catalog_search">
                              <div class = "Search_Field"><Search updateSearchField = {updateSearchFieldHandler}/></div>
                              
                              <div class="Filtr_Button"><Filtr_Popup onChangeFiltr = {FiltrStateHandler} /></div>
                            </div>
                            
                            <div class = "Filtr_btn"></div>


                        <div class="catalog_projects_box">
                          {(filteredData.length === 0) && <div class = "sad_smile_wrapper"> 

                          <svg viewBox="0 0 81 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18 8.5C18 13.1944 14.1944 17 9.5 17C4.80558 17 1 13.1944 1 8.5C1 3.80558 4.80558 0 9.5 0C14.1944 0 18 3.80558 18 8.5Z" fill="black" fill-opacity="0.5"/>
                            <path d="M81 8.5C81 13.1944 77.1944 17 72.5 17C67.8056 17 64 13.1944 64 8.5C64 3.80558 67.8056 0 72.5 0C77.1944 0 81 3.80558 81 8.5Z" fill="black" fill-opacity="0.5"/>
                            <path d="M77.28 49.7769L73.536 54.8469C65.502 47.6709 55.908 41.9769 41.088 41.9769C26.268 41.9769 16.674 47.6709 8.64 54.8469L4.896 49.7769C11.76 42.7569 24.396 34.8789 41.088 34.8789C57.78 34.8789 70.416 42.7569 77.28 49.7769Z" fill="black" fill-opacity="0.5"/>
                          </svg>

                          {/* <label class = "sad_smile_label">Извините, проект по вашему запросу не найден</label>   */}
                          <label class = "sad_smile_label">Шо ты, лысый? Плаки-плаки, или нормалдаки????</label>  
                            
                          </div>}
                          <a class="link" href="#top">
                                                        {filteredData.map(data => (
                                        <Conteiner
                                            card_data={data} 
                                            //data={data.data} 
                                            GoToProject = {GoToProjectHandler} />
                                            ))}</a>

                            <CatalogProjectFooter onSelectNewPage={SelectNewPageHandler} lengthThis={KatallogData.maxCount} CurrentPage={KatallogData.current_position}/>

                          </div>
                          </div>
                        </div>
                      </div>
    </div>
  );

}

export default Try;
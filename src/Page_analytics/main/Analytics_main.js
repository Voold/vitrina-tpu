import React, { useEffect, useMemo, useState} from 'react';
import "./Analytics_main.css"
import Conteiner_Analytics from "../Conteiner_Analytics/Conteiner_Analytics";
import Loading from '../../UI/Loading/Loading';
import CatalogProjectFooter from '../../KATALOGI/CatalogProjectFooter';
import Page_Project from '../../Page_project';
import Search from '../../UI/Search/Search';
import User_card from '../User_card/User_card';

export default function Analytics_main(props){


  
  // дефолт дата - вся инфа про все карточки проекта (сразу с апишки)
  const [projects, setProjects] = useState([]);
  const [projectsPending, setProjectsPending] = useState([]);
  const [projectsEnded, setProjectsEnded] = useState([]);
  
  useEffect(() => {
    fetch('http://176.109.107.163:8000/catalog/')
    .then(response => response.json())
    .then(data => setProjects(data))
    .catch(error => console.error(error), setProjects([]));
  }, []);

  useEffect(() => {
    fetch('http://176.109.107.163:8000/catalog/pending')
    .then(response => response.json())
    .then(data => setProjectsPending(data))
    .catch(error => console.error(error), setProjectsPending([]));
  }, []);
  
  useEffect(() => {
    fetch('http://176.109.107.163:8000/catalog/completed')
    .then(response => response.json())
    .then(data => setProjectsEnded(data))
    .catch(error => console.error(error), setProjectsEnded([]));
  }, []);

  // Это количество проекутов на оной странице
  const countOfProjectsOnePage = 3;
  const current_countOfPrijects = projects.length;
  
  const [Analytics_Data, setAnalytics_Data] = useState({
        maxCount : (Math.floor(projects.length/countOfProjectsOnePage)+1),
        current_position : 0,
        page: <></>,
        style_main_div: "",
        current_countOfPrijects: projects.length,
        typeOf: "active",
        opacity: {
          active: "opacity1",
          ended: "",
          pending: "",
        }
      });

      const SelectActive = () => {
        setAnalytics_Data((previousState) => {
          return{
            ...previousState,
            maxCount : (Math.floor(projects.length/countOfProjectsOnePage)+1),
            current_countOfPrijects: projects.length,
            typeOf: "active",
            opacity: {
              active: "opacity1",
              ended: "",
              pending: "",
            }
          }
          });
      }
      const SelectEnded = () => {
        setAnalytics_Data((previousState) => {
          return{
            ...previousState,
            maxCount : (Math.floor(projectsEnded.length/countOfProjectsOnePage)+1),
            current_countOfPrijects: projectsEnded.length,
            typeOf: "ended",
            opacity: {
              active: "",
              ended: "opacity1",
              pending: "",
            }
          }
          });
      }
      const SelectPending = () => {
        setAnalytics_Data((previousState) => {
          return{
            ...previousState,
            maxCount : (Math.floor(projectsPending.length/countOfProjectsOnePage)+1),
            current_countOfPrijects: projectsPending.length,
            typeOf: "pending",
            opacity: {
              active: "",
              ended: "",
              pending: "opacity1",
            }
          }
          });
      }

     // Функция, которая переносит на страницу проекта
    const GoToProjectHandler = (event) => {
    const current_id = event.card_data.id;
    const current_api_adress = 'http://176.109.107.163:8000/catalog/project/' + current_id + '/';
    //Тут через апишку и айдишник подтягиваем основную дату


    fetch(current_api_adress)
      .then(response => response.json())
      .then(data => 

        setAnalytics_Data((previousState) => {
      

          return{
    
          ...previousState,
          // card_data = {event.card_data}
          page : <Page_Project data = {data}  autorization = {props.autorization} GoToBackPageMain = {GoToBackPageMainHandler}/>,
          style_main_div : "style_main_div",
      
          }})
        
       )
      .catch(error => console.error(error));


    
  }

    const SelectNewPageHandler = (event) => {
        setAnalytics_Data((previousState) => {
          return{
            ...previousState,
            current_position: event,
          }
          });
      }

      // пу-пу-пу... Функция которая возвращает со страницы проекта назад 
    const GoToBackPageMainHandler =(event) => {
        setAnalytics_Data((previousState) => {
        return{

        ...previousState,
        page : <></>,
        style_main_div: "",
        searchVal: "",
    
        }});

  }

/*   useEffect(() => {
    setAnalytics_Data((previousState) => {
      return{
        ...previousState,
        maxCount:(Math.ceil(current_countOfPrijects/countOfProjectsOnePage)),
      }
      });
  },[current_countOfPrijects]) */

   // Слайсер главной даты, делаем несколько массивов исходя из параметров (количество проектов на странице и т.д)
   const slicedArrayOfProjectsFunction = (arr, maxCount, curCount) => { 
    const slicedArrayOfProjects = arr.reduce((p,c)=>{
      if(p[p.length-1].length == maxCount){
        p.push([]);
      }
      
      p[p.length-1].push(c);
      return p;
      }, [[]]);

      Analytics_Data.current_countOfPrijects = arr.length;

    return slicedArrayOfProjects[curCount];
  }

   // есть ли у общих массивов общие элементы???
   function haveCommonItems(arr1, arr2) {
    return Object.values(arr1).some(item => arr2.includes(item));
  }

  useEffect(() => {
    setAnalytics_Data((previousState) => {
      return{
        ...previousState,
        maxCount:(Math.ceil(Analytics_Data.current_countOfPrijects/countOfProjectsOnePage)),
      }
      });
  },[Analytics_Data.current_countOfPrijects])

  // Пока что в разработке (Поиск)
  const updateSearchFieldHandler = (event) => {
    setAnalytics_Data((previousState) => {
      return{
        ...previousState,
        searchVal: event,
      }
      });
  }

  // Через мемоизацию получаем отфильтрованную дату
  const filteredData = useMemo(() => {


    // Пока что в разработке (Поиск)

    // if (Analytics_Data.searchVal != "") {
    //   let filteredProjects = props.projects.filter((el) => (
    //     (SearchFieldSort(el.card_data.title, Analytics_Data.searchVal))
    //   ));
    //   return filteredProjects;
    // }

    //Если все состояния фильтра пустые - возвращаем дефолт дату
    if (Analytics_Data.typeOf === "active") {

      return slicedArrayOfProjectsFunction(projects, countOfProjectsOnePage, Analytics_Data.current_position);

    }

    if (Analytics_Data.typeOf === "ended") {

      return slicedArrayOfProjectsFunction(projectsEnded, countOfProjectsOnePage, Analytics_Data.current_position);

    }

    if (Analytics_Data.typeOf === "pending") {

      return slicedArrayOfProjectsFunction(projectsPending, countOfProjectsOnePage, Analytics_Data.current_position);

    }


    let filteredProjects = props.projects.filter((el) => (
      (Analytics_Data.Filtr_state.sch.includes(el.school) || Analytics_Data.Filtr_state.sch.length == 0) &&
      (haveCommonItems(el.course, Analytics_Data.Filtr_state.course) || Analytics_Data.Filtr_state.course.length == 0) &&
      (Analytics_Data.Filtr_state.type.includes(el.type) || Analytics_Data.Filtr_state.type.length == 0) &&
      ((Analytics_Data.Filtr_state.tags.includes(el.hashtags[0]) || Analytics_Data.Filtr_state.tags.length == 0) ||
      (Analytics_Data.Filtr_state.tags.includes(el.hashtags[1]))) &&
      (haveCommonItems(el.roles, Analytics_Data.Filtr_state.role) || Analytics_Data.Filtr_state.role.length == 0)

    )); 

    return slicedArrayOfProjectsFunction(filteredProjects, countOfProjectsOnePage, Analytics_Data.current_position);

  },[Analytics_Data])

  useEffect(() => {
    setAnalytics_Data((previousState) => {
      return{
        ...previousState,
        maxCount:(Math.ceil(Analytics_Data.current_countOfPrijects/countOfProjectsOnePage)),
      }
      });
  },[current_countOfPrijects])


    return(

        <div class = "Analytics_box">
            {Analytics_Data.page}
        
            <div class = {"Analytics_box " + Analytics_Data.style_main_div}>
                <div class ="main_Analytics">
                    <div><p class='main_title_analytics'>Аналитика</p></div>
                    <div><p class='sub_title_analytics'>Количесво проектов</p></div>
                    <div id = "analytic_projects">
                        <div id="all_projects">
                          <div>
                            <svg width="74" height="70" viewBox="0 0 74 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M21 5C21 4.05719 21 3.58579 21.2929 3.29289C21.5858 3 22.0572 3 23 3H40.529C41.1619 3 41.4783 3 41.7273 3.16237C41.9763 3.32473 42.1039 3.61432 42.3591 4.19348L48.0832 17.1826H68.9997C69.9425 17.1826 70.4139 17.1826 70.7068 17.4755C70.9997 17.7683 70.9997 18.2397 70.9997 19.1826V48.2752C70.9997 49.218 70.9997 49.6894 70.7068 49.9823C70.4139 50.2752 69.9425 50.2752 68.9997 50.2752H23C22.0572 50.2752 21.5858 50.2752 21.2929 49.9823C21 49.6894 21 49.218 21 48.2752V5Z" stroke="#707070" stroke-width="6" stroke-linejoin="round"/>
                            <path d="M52.9997 49.4328V65.2882C52.9997 65.8483 52.9997 66.1283 52.8907 66.3422C52.7948 66.5304 52.6418 66.6834 52.4537 66.7793C52.2398 66.8882 51.9597 66.8882 51.3997 66.8882H4.6C4.03995 66.8882 3.75992 66.8882 3.54601 66.7793C3.35785 66.6834 3.20487 66.5304 3.10899 66.3422C3 66.1283 3 65.8483 3 65.2882V20.4857C3 19.9257 3 19.6457 3.10899 19.4318C3.20487 19.2436 3.35785 19.0906 3.54601 18.9947C3.75992 18.8857 4.03995 18.8857 4.6 18.8857H18.3845" stroke="#707070" stroke-width="6" stroke-linejoin="round"/>
                            </svg>
                          </div>
                          <div>Всего
                          <br/><c>{projects.length + projectsEnded.length + projectsPending.length}</c></div></div>
                        <div id="active_projects" class = {Analytics_Data.opacity.active} onClick={SelectActive}>
                        <b>Активные</b>
                          <br/><c>{projects.length}</c></div>
                        <div id="ended_projects" class = {Analytics_Data.opacity.ended} onClick={SelectEnded}>
                          <b>Завершены</b>
                          <br/><c>{projectsEnded.length}</c></div>
                        <div id="arhived_projects" class = {Analytics_Data.opacity.pending} onClick={SelectPending}>
                          <b>Архив</b>
                          <br/><c>{projectsPending.length}</c></div>
                    </div>
                    <div id = "analytic_search"> 
                    <Search updateSearchField = {updateSearchFieldHandler}/> </div>

                    <div class="catalog_projects_box">
                                {(projectsPending.length === 0) && <div class = "sad_smile_wrapper"> 

                                <svg viewBox="0 0 81 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18 8.5C18 13.1944 14.1944 17 9.5 17C4.80558 17 1 13.1944 1 8.5C1 3.80558 4.80558 0 9.5 0C14.1944 0 18 3.80558 18 8.5Z" fill="black" fill-opacity="0.5"/>
                                    <path d="M81 8.5C81 13.1944 77.1944 17 72.5 17C67.8056 17 64 13.1944 64 8.5C64 3.80558 67.8056 0 72.5 0C77.1944 0 81 3.80558 81 8.5Z" fill="black" fill-opacity="0.5"/>
                                    <path d="M77.28 49.7769L73.536 54.8469C65.502 47.6709 55.908 41.9769 41.088 41.9769C26.268 41.9769 16.674 47.6709 8.64 54.8469L4.896 49.7769C11.76 42.7569 24.396 34.8789 41.088 34.8789C57.78 34.8789 70.416 42.7569 77.28 49.7769Z" fill="black" fill-opacity="0.5"/>
                                </svg>

                                {/* <label class = "sad_smile_label">Шо ты, лысый? Плаки-плаки, или нормалдаки????</label> */}
                                <label class = "sad_smile_label">Тут пусто!</label>  
                                    
                                </div>}
                                <a class="link" href="#top">
                                                                {filteredData.map(data => (
                                                <Conteiner_Analytics
                                                    card_data={data} 
                                                    //data={data.data} 
                                                    GoToProject = {GoToProjectHandler} />
                                                    ))}</a>

                                    <CatalogProjectFooter onSelectNewPage={SelectNewPageHandler} lengthThis={Analytics_Data.maxCount} CurrentPage={Analytics_Data.current_position}/>

                                </div>
                    
                  <div><p class='sub_title_analytics'>Активные пользователи</p></div>
                  <div class = 'active_users'>
                    <div class = "users_count">
                      <svg width="74" height="74" viewBox="0 0 74 74" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="37.0003" cy="24.6663" r="9.83333" stroke="#33363F" stroke-width="5" stroke-linecap="round"/>
                        <path d="M49.4043 24.875C50.2994 23.3246 51.7738 22.1933 53.503 21.73C55.2322 21.2667 57.0746 21.5092 58.625 22.4043C60.1754 23.2994 61.3067 24.7738 61.77 26.503C62.2333 28.2322 61.9908 30.0746 61.0957 31.625C60.2006 33.1754 58.7262 34.3067 56.997 34.77C55.2678 35.2333 53.4254 34.9908 51.875 34.0957C50.3246 33.2006 49.1933 31.7262 48.73 29.997C48.2667 28.2678 48.5092 26.4254 49.4043 24.875L49.4043 24.875Z" stroke="#33363F" stroke-width="5"/>
                        <path d="M13.4043 24.875C14.2994 23.3246 15.7738 22.1933 17.503 21.73C19.2322 21.2667 21.0746 21.5092 22.625 22.4043C24.1754 23.2994 25.3067 24.7738 25.77 26.503C26.2333 28.2322 25.9908 30.0746 25.0957 31.625C24.2006 33.1754 22.7262 34.3067 20.997 34.77C19.2678 35.2333 17.4254 34.9908 15.875 34.0957C14.3246 33.2006 13.1933 31.7262 12.73 29.997C12.2667 28.2678 12.5092 26.4254 13.4043 24.875L13.4043 24.875Z" stroke="#33363F" stroke-width="5"/>
                        <path d="M52.0517 55.5003L49.6009 55.9939L50.005 58.0003H52.0517V55.5003ZM64.5426 54.3888L66.9819 53.8414L64.5426 54.3888ZM45.5742 45.3578L44.0621 43.367L41.1707 45.5631L44.2539 47.4807L45.5742 45.3578ZM63.6172 53.0003H52.0517V58.0003H63.6172V53.0003ZM62.1033 54.9361C61.8543 53.8267 62.7571 53.0003 63.6172 53.0003V58.0003C65.6803 58.0003 67.4943 56.1246 66.9819 53.8414L62.1033 54.9361ZM52.4167 45.667C55.8941 45.667 58.0676 47.2302 59.533 49.1551C61.0672 51.1704 61.7981 53.576 62.1033 54.9361L66.9819 53.8414C66.6067 52.1693 65.6716 48.964 63.5114 46.1265C61.2824 43.1986 57.7332 40.667 52.4167 40.667V45.667ZM47.0864 47.3486C48.3717 46.3724 50.0733 45.667 52.4167 45.667V40.667C48.9637 40.667 46.2032 41.7407 44.0621 43.367L47.0864 47.3486ZM44.2539 47.4807C47.659 49.5985 49.051 53.2634 49.6009 55.9939L54.5025 55.0067C53.8432 51.7333 52.0229 46.4244 46.8945 43.2349L44.2539 47.4807Z" fill="#33363F"/>
                        <path d="M28.4258 45.3578L29.7461 47.4807L32.8293 45.5631L29.9379 43.3669L28.4258 45.3578ZM9.45739 54.3888L7.01805 53.8414L9.45739 54.3888ZM21.9482 55.5003V58.0003H23.9949L24.399 55.9939L21.9482 55.5003ZM21.5833 45.667C23.9267 45.667 25.6284 46.3724 26.9136 47.3486L29.9379 43.3669C27.7968 41.7406 25.0364 40.667 21.5833 40.667V45.667ZM11.8967 54.9361C12.2019 53.576 12.9328 51.1704 14.467 49.1551C15.9324 47.2302 18.106 45.667 21.5833 45.667V40.667C16.2669 40.667 12.7176 43.1986 10.4887 46.1265C8.32846 48.964 7.39326 52.1693 7.01805 53.8414L11.8967 54.9361ZM10.3828 53.0003C11.2429 53.0003 12.1457 53.8267 11.8967 54.9361L7.01805 53.8414C6.50571 56.1246 8.31964 58.0003 10.3828 58.0003V53.0003ZM21.9482 53.0003H10.3828V58.0003H21.9482V53.0003ZM24.399 55.9939C24.9489 53.2634 26.341 49.5984 29.7461 47.4807L27.1055 43.2348C21.977 46.4244 20.1567 51.7332 19.4974 55.0067L24.399 55.9939Z" fill="#33363F"/>
                        <path d="M36.9997 43.167C50.026 43.167 52.0457 54.1736 52.3589 57.5868C52.4093 58.1367 51.9686 58.5837 51.4163 58.5837H22.583C22.0307 58.5837 21.59 58.1367 21.6405 57.5868C21.9536 54.1736 23.9733 43.167 36.9997 43.167Z" stroke="#33363F" stroke-width="5" stroke-linecap="round"/>
                      </svg>
                      <div>
                        <p>Общее количество пользователей: {}</p>
                        <p>Активные пользователи: {}</p>
                      </div>
                    </div>
                    <div id = "analytic_search"> 
                    <p>Поиск среди пользователей</p>
                    <Search updateSearchField = {updateSearchFieldHandler}/> </div>
                    <div class="lect_and_stud">
                      <div>
                        <p>Преподаватели</p>
                        <div class = "user_box">
                            <ul>

                              <li><User_card/></li>
                              <li><User_card/></li>
                              <li><User_card/></li>

                            </ul>
                            <button type='button'>полностью</button>
                        </div>
                      </div>
                      <div>
                        <p>Студенты</p>
                        <div class = "user_box">
                            <ul>

                              <li><User_card/></li>
                              <li><User_card/></li>
                              <li><User_card/></li>

                            </ul>
                            <button type='button'>полностью</button>
                        </div>  
                      </div>                                            
                    </div>
                  </div>
                </div>
            </div>
        </div>
    )
}
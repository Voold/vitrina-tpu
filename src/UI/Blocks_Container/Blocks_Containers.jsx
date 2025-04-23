
import CatalogProjectFooter from "../projectFooter/CatalogProjectFooter";
import Conteiner_Analytics from "../../Page_analytics/Conteiner_Analytics/Conteiner_Analytics";
import Popup_Content_Application from "../../Page_my_applications/components/Popup_Content_Application";
import Page_Project from "../../Page_project";
import style from "./Blocks_Container.module.css";
import React, { useEffect, useMemo, useState} from 'react';

export default function Block_Container(props) {

    // дефолт дата - вся инфа про все карточки проекта (сразу с апишки)
    const [projects, setProjects] = useState([]);

    // Подключу, когда бэк будет

    // useEffect(() => {
    //   fetch( props.apiAdress + '/catalog/completed')
    //   .then(response => response.json())
    //   .then(data => setProjectsEnded(data))
    //   .catch(error => console.error(error), setProjectsEnded([]));
    // }, []);

    useEffect(() => {
      setProjects([
        {
          "id": 0,
          "title": "Название проекта",
          "source": "Какой-то источник проекта",
          "hashtags": [ "Хэштег1", "Хэштег2" ],
          "type": "Тип проекта",
          "school": "Школа",
          "roles": [ "Роль", "Роль 1", "Роль 2" ],
          "date_end": "2005-04-17",
          "get_member_end":"2005-04-17",
          "duration": 0,
          "course": ["1","2"],
        },
        {
          "id": 0,
          "title": "Название проекта",
          "source": "Какой-то источник проекта",
          "hashtags": [ "Хэштег1", "Хэштег2" ],
          "type": "Тип проекта",
          "school": "Школа",
          "roles": [ "Роль", "Роль 1", "Роль 2" ],
          "date_end": "2005-04-17",
          "get_member_end":"2005-04-17",
          "duration": 0,
          "course": ["1","2"],
        },
        {
          "id": 0,
          "title": "Название проекта",
          "source": "Какой-то источник проекта",
          "hashtags": [ "Хэштег1", "Хэштег2" ],
          "type": "Тип проекта",
          "school": "Школа",
          "roles": [ "Роль", "Роль 1", "Роль 2" ],
          "date_end": "2005-04-17",
          "get_member_end":"2005-04-17",
          "duration": 0,
          "course": ["1","2"],
        },
        {
          "id": 0,
          "title": "Название проекта",
          "source": "Какой-то источник проекта",
          "hashtags": [ "Хэштег1", "Хэштег2" ],
          "type": "Тип проекта",
          "school": "Школа",
          "roles": [ "Роль", "Роль 1", "Роль 2" ],
          "date_end": "2005-04-17",
          "get_member_end":"2005-04-17",
          "duration": 0,
          "course": ["1","2"],
        },
        {
          "id": 0,
          "title": "Название проекта",
          "source": "Какой-то источник проекта",
          "hashtags": [ "Хэштег1", "Хэштег2" ],
          "type": "Тип проекта",
          "school": "Школа",
          "roles": [ "Роль", "Роль 1", "Роль 2" ],
          "date_end": "2005-04-17",
          "get_member_end":"2005-04-17",
          "duration": 0,
          "course": ["1","2"],
        },
        {
          "id": 0,
          "title": "Название проекта",
          "source": "Какой-то источник проекта",
          "hashtags": [ "Хэштег1", "Хэштег2" ],
          "type": "Тип проекта",
          "school": "Школа",
          "roles": [ "Роль", "Роль 1", "Роль 2" ],
          "date_end": "2005-04-17",
          "get_member_end":"2005-04-17",
          "duration": 0,
          "course": ["1","2"],
        },
        {
          "id": 0,
          "title": "Название проекта",
          "source": "Какой-то источник проекта",
          "hashtags": [ "Хэштег1", "Хэштег2" ],
          "type": "Тип проекта",
          "school": "Школа",
          "roles": [ "Роль", "Роль 1", "Роль 2" ],
          "date_end": "2005-04-17",
          "get_member_end":"2005-04-17",
          "duration": 0,
          "course": ["1","2"],
        },
        {
          "id": 0,
          "title": "Название проекта",
          "source": "Какой-то источник проекта",
          "hashtags": [ "Хэштег1", "Хэштег2" ],
          "type": "Тип проекта",
          "school": "Школа",
          "roles": [ "Роль", "Роль 1", "Роль 2" ],
          "date_end": "2005-04-17",
          "get_member_end":"2005-04-17",
          "duration": 0,
          "course": ["1","2"],
        },
        {
          "id": 0,
          "title": "Название проекта",
          "source": "Какой-то источник проекта",
          "hashtags": [ "Хэштег1", "Хэштег2" ],
          "type": "Тип проекта",
          "school": "Школа",
          "roles": [ "Роль", "Роль 1", "Роль 2" ],
          "date_end": "2005-04-17",
          "get_member_end":"2005-04-17",
          "duration": 0,
          "course": ["1","2"],
        },
        {
          "id": 0,
          "title": "Название проекта",
          "source": "Какой-то источник проекта",
          "hashtags": [ "Хэштег1", "Хэштег2" ],
          "type": "Тип проекта",
          "school": "Школа",
          "roles": [ "Роль", "Роль 1", "Роль 2" ],
          "date_end": "2005-04-17",
          "get_member_end":"2005-04-17",
          "duration": 0,
          "course": ["1","2"],
        },
        {
          "id": 0,
          "title": "Название проекта",
          "source": "Какой-то источник проекта",
          "hashtags": [ "Хэштег1", "Хэштег2" ],
          "type": "Тип проекта",
          "school": "Школа",
          "roles": [ "Роль", "Роль 1", "Роль 2" ],
          "date_end": "2005-04-17",
          "get_member_end":"2005-04-17",
          "duration": 0,
          "course": ["1","2"],
        },
        {
          "id": 0,
          "title": "Название проекта",
          "source": "Какой-то источник проекта",
          "hashtags": [ "Хэштег1", "Хэштег2" ],
          "type": "Тип проекта",
          "school": "Школа",
          "roles": [ "Роль", "Роль 1", "Роль 2" ],
          "date_end": "2005-04-17",
          "get_member_end":"2005-04-17",
          "duration": 0,
          "course": ["1","2"],
        },
        {
          "id": 0,
          "title": "Название проекта",
          "source": "Какой-то источник проекта",
          "hashtags": [ "Хэштег1", "Хэштег2" ],
          "type": "Тип проекта",
          "school": "Школа",
          "roles": [ "Роль", "Роль 1", "Роль 2" ],
          "date_end": "2005-04-17",
          "get_member_end":"2005-04-17",
          "duration": 0,
          "course": ["1","2"],
        },
        {
          "id": 0,
          "title": "Название проекта",
          "source": "Какой-то источник проекта",
          "hashtags": [ "Хэштег1", "Хэштег2" ],
          "type": "Тип проекта",
          "school": "Школа",
          "roles": [ "Роль", "Роль 1", "Роль 2" ],
          "date_end": "2005-04-17",
          "get_member_end":"2005-04-17",
          "duration": 0,
          "course": ["1","2"],
        },
        {
          "id": 0,
          "title": "Название проекта",
          "source": "Какой-то источник проекта",
          "hashtags": [ "Хэштег1", "Хэштег2" ],
          "type": "Тип проекта",
          "school": "Школа",
          "roles": [ "Роль", "Роль 1", "Роль 2" ],
          "date_end": "2005-04-17",
          "get_member_end":"2005-04-17",
          "duration": 0,
          "course": ["1","2"],
        },
        {
          "id": 0,
          "title": "Название проекта",
          "source": "Какой-то источник проекта",
          "hashtags": [ "Хэштег1", "Хэштег2" ],
          "type": "Тип проекта",
          "school": "Школа",
          "roles": [ "Роль", "Роль 1", "Роль 2" ],
          "date_end": "2005-04-17",
          "get_member_end":"2005-04-17",
          "duration": 0,
          "course": ["1","2"],
        },
        {
          "id": 0,
          "title": "Название проекта",
          "source": "Какой-то источник проекта",
          "hashtags": [ "Хэштег1", "Хэштег2" ],
          "type": "Тип проекта",
          "school": "Школа",
          "roles": [ "Роль", "Роль 1", "Роль 2" ],
          "date_end": "2005-04-17",
          "get_member_end":"2005-04-17",
          "duration": 0,
          "course": ["1","2"],
        },
        {
          "id": 0,
          "title": "Название проекта",
          "source": "Какой-то источник проекта",
          "hashtags": [ "Хэштег1", "Хэштег2" ],
          "type": "Тип проекта",
          "school": "Школа",
          "roles": [ "Роль", "Роль 1", "Роль 2" ],
          "date_end": "2005-04-17",
          "get_member_end":"2005-04-17",
          "duration": 0,
          "course": ["1","2"],
        },
        {
          "id": 0,
          "title": "Название проекта",
          "source": "Какой-то источник проекта",
          "hashtags": [ "Хэштег1", "Хэштег2" ],
          "type": "Тип проекта",
          "school": "Школа",
          "roles": [ "Роль", "Роль 1", "Роль 2" ],
          "date_end": "2005-04-17",
          "get_member_end":"2005-04-17",
          "duration": 0,
          "course": ["1","2"],
        },
        {
          "id": 0,
          "title": "Название проекта",
          "source": "Какой-то источник проекта",
          "hashtags": [ "Хэштег1", "Хэштег2" ],
          "type": "Тип проекта",
          "school": "Школа",
          "roles": [ "Роль", "Роль 1", "Роль 2" ],
          "date_end": "2005-04-17",
          "get_member_end":"2005-04-17",
          "duration": 0,
          "course": ["1","2"],
        },
        {
          "id": 0,
          "title": "Название проекта",
          "source": "Какой-то источник проекта",
          "hashtags": [ "Хэштег1", "Хэштег2" ],
          "type": "Тип проекта",
          "school": "Школа",
          "roles": [ "Роль", "Роль 1", "Роль 2" ],
          "date_end": "2005-04-17",
          "get_member_end":"2005-04-17",
          "duration": 0,
          "course": ["1","2"],
        },
        {
          "id": 0,
          "title": "Название проекта",
          "source": "Какой-то источник проекта",
          "hashtags": [ "Хэштег1", "Хэштег2" ],
          "type": "Тип проекта",
          "school": "Школа",
          "roles": [ "Роль", "Роль 1", "Роль 2" ],
          "date_end": "2005-04-17",
          "get_member_end":"2005-04-17",
          "duration": 0,
          "course": ["1","2"],
        },
      ])
    },[])

    // Это количество проектов на оной странице
      const countOfProjectsOnePage = 2;
      const current_countOfPrijects = projects.length;
      
      const [Analytics_Data, setAnalytics_Data] = useState({
            maxCount : (Math.floor(projects.length/countOfProjectsOnePage)+1),
            current_position : 0,
            page: <></>,
            style_main_div: "",
            current_countOfPrijects: projects.length,
          });

    
         // Функция, которая переносит на страницу проекта
        const GoToProjectHandler = (event) => {

        //------------------------ВЕРНУТЬ--------------------------------------------

        //const current_id = event.card_data.id;
        //const current_api_adress = props.apiAdress + '/catalog/project/' + current_id + '/';

        //------------------------ВЕРНУТЬ--------------------------------------------

        //Тут через апишку и айдишник подтягиваем основную дату

        // fetch(current_api_adress)
        // .then(response => response.json())
        // .then(data => 
  
        //   setAnalytics_Data((previousState) => {
        
  
        //     return{
      
        //     ...previousState,
        //     // card_data = {event.card_data}
        //     page : <Page_Project data = {data}  autorization = {props.autorization} GoToBackPageMain = {GoToBackPageMainHandler}/>,
        //     style_main_div : "style_main_div",
        
        //     }})
          
        //  )
        // .catch(error => console.error(error));
  
  
      
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
  
  
      let filteredProjects = projects;
  
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

    let sad_smile = <svg viewBox="0 0 81 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M18 8.5C18 13.1944 14.1944 17 9.5 17C4.80558 17 1 13.1944 1 8.5C1 3.80558 4.80558 0 9.5 0C14.1944 0 18 3.80558 18 8.5Z" fill="black" fill-opacity="0.5"/>
                      <path d="M81 8.5C81 13.1944 77.1944 17 72.5 17C67.8056 17 64 13.1944 64 8.5C64 3.80558 67.8056 0 72.5 0C77.1944 0 81 3.80558 81 8.5Z" fill="black" fill-opacity="0.5"/>
                      <path d="M77.28 49.7769L73.536 54.8469C65.502 47.6709 55.908 41.9769 41.088 41.9769C26.268 41.9769 16.674 47.6709 8.64 54.8469L4.896 49.7769C11.76 42.7569 24.396 34.8789 41.088 34.8789C57.78 34.8789 70.416 42.7569 77.28 49.7769Z" fill="black" fill-opacity="0.5"/>
                  </svg>

    return(
      <div class="catalog_projects_box">
        {(projects.length === 0) && <div class = "sad_smile_wrapper"> 

        {sad_smile}

        {/* <label class = "sad_smile_label">Шо ты, лысый? Плаки-плаки, или нормалдаки????</label> */}
        <label class = "sad_smile_label">Тут пусто!</label>  
            
        </div>}
        
          
        <a class="link" href="#top">
                                        {filteredData.map(data => (
                        props.container({
                            //card_data={data}, 
                            //data={data.data}, 
                            //GoToProject = {GoToProjectHandler},
                            title : "Название проекта",
                            source : "Источник проекта",
                            },
                          {
                            content_into: <Popup_Content_Application/>
                          })
                            ))}</a>

            <CatalogProjectFooter onSelectNewPage={SelectNewPageHandler} lengthThis={Analytics_Data.maxCount} CurrentPage={Analytics_Data.current_position}/>

        </div>
    )

};
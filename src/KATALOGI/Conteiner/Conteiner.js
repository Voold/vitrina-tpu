import React from 'react'
import palka from './image/palka_project.png'
import bloknot from './image/bloknot.png'
import school from './image/school.png'
import fail from './image/fail.png'
import "./Conteiner.css"





export default function Conteiner(props) {

  const func1 = (event) => {
    props.GoToProject(props);};

  const dateToDate = (date) => {
    return date.split("-").reverse().join(".");
  }

  return (

    <div class="cont-project" onClick={func1}>

      

      <div class="opis">
        <div class = "left-block_container"> 

          <div class="nazv">
            <p>{props.card_data.title}</p>
          </div>

          <p class="ist" >{props.card_data.source}</p>

          <div class="role_cont">
            <p>{Object.values(props.card_data.roles).join(", ")}</p>
            {/* <p>{props.card_data.roles.toString()}</p> */}
          </div>

          <div class="box_for_hashtags">
            <div class="cont-hesh">

              <div class="hesh">
                <a href="#" alt="hashtag">#{props.card_data.hashtags[0]} </a>
              </div>
              <div class="hesh">
                <a href="#" alt="hashtag">#{props.card_data.hashtags[1]}</a>
              </div>


            </div>
          </div>

        </div>

        <div class="right-block_container">
          <img class="palka" src={palka} alt="|" />

          <div class="info">
            <div class="cont-nd">
            <div class = "upper_nabor_text">
              <div class="nabor">
                <a>Идёт набор</a>
              </div>
              <div class="date">
                <p>до {dateToDate(props.card_data.get_member_end)}</p>
              </div>
            </div>
            </div>
            <div class="krinfo">
              <div class="fon-krinfo">
                <img class = "img_fon-krinfo" src={bloknot} alt="" />
              </div>
              <p class = "normal_p_desct" >{props.card_data.duration} месяцев</p>
              <p class = "mobile_p_desct" >{props.card_data.duration} мес</p>
            </div>
            <div class="krinfo">
              <div class="fon-krinfo">
                <img src={school} alt="" />
              </div>
              <p>{props.card_data.school}</p>
            </div>
            <div class="krinfo">
              <div class="fon-krinfo">
                <img src={fail} alt="" />
              </div>
              <p>{props.card_data.type}</p>
            </div>
          </div>
        </div>


      </div>
    </div>
    )
}

Conteiner.defaultProps = {
  card_data:{
    "id": 0,
    "title": "Название проекта",
    "source": "Какой-то источник проекта",
    "hashtags": [ "Хэштег1", "Хэштег2" ],
    "type": "Тип проекта",
    "school": "Школа",
    "roles": [ "Роль", "Роль 1", "Роль 2" ],
    "date_end": "2005-04-17",
    "duration": 0,
    "course": ["1","2"],
  },

  /*
  data: {
    get_member_end: "дата окончания",
    full_duration:"дата старта - конца",
    description:"Здесь вы можете разместить описание своего проекта для изложения главной мысли или задачи проекта, чтобы привлечь внимание потенциального участника проекта.",
    status:"now only for test",
    Roles:{
      Frontend:{
        item1:"техническое задания",
        item2:"требуемые навыки",
        item3:"информация",
      },
      Backend:{
        item1:"техническое задания",
        item2:"требуемые навыки",
        item3:"информация",
      },
      sys_anal:{
        item1:"техническое задания",
        item2:"требуемые навыки",
        item3:"информация",
      },
      tester:{
        item1:"техническое задания",
        item2:"требуемые навыки",
        item3:"информация",
      },
    },
    goals:{
      item0:"Цель 0",
      item1:"Цель 1",
      item2:"Цель 2",
      item3:"Цель 3",
    },
    tasks:{
      item0:"Задача 0",
      item1:"Задача 1",
      item2:"Задача 2",
      item3:"Задача 3",
    },
    res:"Ожидаемый результат проекта.",
  }, */

};
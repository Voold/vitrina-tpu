
import Conteiner from "../../KATALOGI/Conteiner/Conteiner";
import Conteiner_Analytics from "../../Page_analytics/Conteiner_Analytics/Conteiner_Analytics";
import Are_You_Sure from "../../UI/Popup_Vitrina/Are_You_Sure";
import Popup_Vitrina from "../../UI/Popup_Vitrina/Popup_Vitrina";
import Block_application from "./Block_application";
import style from "./styles/Popup_Content_Application.module.css";

export default function Popup_Content_Application(props) {

    return(
      <div className={style.mainContainer}>
        <div>

          <div className={style.titleBlock}>
            <label className={style.applicationTitle}>Заявка #{'1'}</label><label className={style.applicationStatus}>{'отклонена'}</label>
          </div>

          <div className={style.userData}>
            <svg className={style.userSVG} viewBox="0 0 109 109" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="109" height="109" rx="54.5" fill="black" fill-opacity="0.12"/>
              <path d="M70.0071 87.5302H38.9938C35.6156 87.4058 32.4688 85.7596 30.4128 83.0414C28.3568 80.3232 27.6063 76.8168 28.3664 73.48L29.1684 69.6204C30.0909 64.3956 34.5243 60.5561 39.7624 60.4454H69.2384C74.4765 60.5561 78.9099 64.3956 79.8324 69.6204L80.6345 73.48C81.3945 76.8168 80.6441 80.3232 78.588 83.0414C76.532 85.7596 73.3852 87.4058 70.0071 87.5302Z" fill="black" fill-opacity="0.56"/>
              <path d="M56.1714 53.6742H52.8294C45.4466 53.6742 39.4616 47.6111 39.4616 40.1318V31.1938C39.4527 28.174 40.6329 25.2753 42.7407 23.14C44.8485 21.0047 47.7098 19.8091 50.6906 19.8182H58.3102C61.2911 19.8091 64.1524 21.0047 66.2601 23.14C68.3679 25.2753 69.5481 28.174 69.5392 31.1938V40.1318C69.5392 43.7235 68.1308 47.168 65.6238 49.7077C63.1169 52.2474 59.7167 53.6742 56.1714 53.6742Z" fill="black" fill-opacity="0.56"/>
            </svg>

            <div className={style.userDescript}>
              <div className={style.userName}>{'Костик Добрый'}</div>
              <div className={style.userSch}>{`${"ИШИТР"} | ${"3 курс"}`}</div>
            </div>
          </div>

          <div>
            <label className={style.applicationSubTitle}>К проекту</label>
            <div>
              <Block_application/>
            </div>
          </div>

          <div>
            <label className={style.applicationSubTitle}>Роль</label>
            <div className={style.roleDescript}>
              {'Дизайнер'}
            </div>
          </div>

          <div>
            <br />
            <label className={style.applicationSubTitle}>Описание</label>
            <div className={style.description}>
              {'В рамках данного веб-проекта я возьму на себя разработку и реализацию дизайна интерфейса, опираясь на более чем 5 лет опыта работы в UX/UI-дизайне. Мой опыт включает успешные проекты для различных секторов, от электронной коммерции до образовательных платформ. Я сосредоточусь на создании визуально привлекательного и функционального интерфейса, который улучшит пользовательский опыт и повысит вовлеченность. Мой подход к проекту основан на глубоком понимании потребностей пользователей и современных дизайнерских трендов.'}
            </div>
          </div>

          <div className={style.buttonsBlock}>
            <Popup_Vitrina target={<div className={style.buttonAccept}>Принять</div>} 
                content_into = {<Are_You_Sure text={`Вы уверены, что хотите принять "${'Zayavka #1'}" ?`}/>}/>
            <Popup_Vitrina target={<div className={style.buttonReject}>Отклонить</div>} 
                content_into = {<Are_You_Sure text={`Вы уверены, что хотите отклонить "${'Zayavka #1'}" ?`}/>}/>
          </div>

        </div>
      </div>
    )

};
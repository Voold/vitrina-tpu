import Circle_Stat from '../../UI/Circle_Stat/Circle_Stat.js';
import './Main.css'
import Role from './Role/Role.js'


function Main(props) {

    const GoBackPageHandler = () => {
        props.GoToBackPageSub();
        console.log(props.data)
    }

    const dateToDate = (date) => {
        return date.split("-").reverse().join(".");
    }
        



  return (

          
    <div class="ContentMaker_2">
        <a class="link" href="#start"><div onClick={GoBackPageHandler}>
            <div class="Arrow_2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 70 70" fill="none">
                <path d="M41.3874 18.8417H28.5249L28.7582 18.5792C29.5847 17.7627 30.0499 16.6493 30.0499 15.4875C30.0499 14.3257 29.5847 13.2123 28.7582 12.3958C27.0436 10.7057 24.2896 10.7057 22.5749 12.3958L14.8457 20.125C14.4367 20.5297 14.1186 21.0169 13.9124 21.5542C13.4862 22.571 13.4862 23.7165 13.9124 24.7333C14.1233 25.2941 14.4402 25.809 14.8457 26.25L22.5749 33.95C24.283 35.656 27.0501 35.656 28.7582 33.95C29.5847 33.1335 30.0499 32.0201 30.0499 30.8583C30.0499 29.6965 29.5847 28.5831 28.7582 27.7667L28.5249 27.5333H41.3874C43.3571 27.5331 45.2445 28.3234 46.6263 29.7272C48.0081 31.1309 48.7687 33.0305 48.7374 35V54.6C48.7374 57.0162 50.6962 58.975 53.1124 58.975C55.5286 58.975 57.4874 57.0162 57.4874 54.6V35C57.5029 30.7199 55.8135 26.6098 52.7925 23.5778C49.7715 20.5459 45.6675 18.8416 41.3874 18.8417Z" fill="black"/>
                </svg>
            </div>
        </div></a>
        <div class ="box_for_main_right">
            <div class="box_for_first-top">

                <div class='top_info_2'>
                    <label class="nazv_text_2as">{props.data.title}</label>
                    <label class="ist1_2">{props.data.source}</label>
                    <div class="base_cont_hesh_2">
                        <div class="cont_hesh_2">
                            <a href="#" alt="hashtag">
                                #{props.data.hashtags[0]}
                            </a>
                        </div>
                        <div class="cont_hesh_2">
                            <a href="#" alt="hashtag">
                                #{props.data.hashtags[1]}
                            </a>
                        </div>
                    </div>
                </div>

                <div class="infoproject_2">
                    <div class="info_2">
                        <div class="nabor_2">
                            <a>Идёт набор</a>
                        </div>
                        <div class="textproject_2">
                            <div class="PZ_2">
                                <p>
                                    прием заявок до: <font color="#1D1919">{dateToDate(props.data.get_member_end)}</font>
                                </p>
                            </div>
                            <div class="SP_2">
                                <p>
                                    сроки проекта: <font color="#1D1919">{dateToDate(props.data.start_date)} - {dateToDate(props.data.end_date)}</font>
                                </p>
                            </div>
                            <div class="TP_2">
                                <p>
                                    тип проекта: <font color="#1D1919">{props.data.type}</font>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="infoproject_2_mobile_a">
                    <div class="info_2">
                        <div class="textproject_2">


                            <div class = "back_for_info">
                                <div class="PZ_2">
                                    <p>
                                        прием заявок до: <font color="#1D1919">{dateToDate(props.data.get_member_end)}</font>
                                    </p>
                                </div>
                                <div class="SP_2">
                                    <p>
                                        сроки проекта: <font color="#1D1919">{dateToDate(props.data.start_date)} - {dateToDate(props.data.end_date)}</font>
                                    </p>
                                </div>
                                <div class="TP_2">
                                    <p>
                                        тип проекта: <font color="#1D1919">{props.data.type}</font>
                                    </p>
                                </div>
                            </div>

                            <div class="PZ_2 visnone">
                                <p>
                                    прием заявок до: <font color="#1D1919">{props.data.get_member_end}</font>
                                </p>
                            </div>
                            <div class="SP_2 visnone">
                                <p>
                                    сроки проекта: <font color="#1D1919">{props.data.full_duration}</font>
                                </p>
                            </div>
                            <div class="TP_2 visnone">
                                <p>
                                    тип проекта: <font color="#1D1919">{props.data.type}</font>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div class="Opis_2">
                <div class="cont_opis_2">
                    <p class="text_opis_2">{props.data.description}</p>
                </div>
            </div>

            <Circle_Stat status = {props.data.status} data = {props.data}/>

            <p class='Role_text_2'>Роли</p>
            <div class='Cont_Role_2'>
                <div class='Cont_role_osnova_2'>
                    <div class = "Sub_Cont_Role_2">

                        {
                            props.data.requirements.map(el => (
                                <Role
                                    name={el.role} 
                                    //items={props.data.Roles[props.data.roles.indexOf(el)]}
                                    items={el.description}
                                    />
                                    ))
                        }


                    </div>

                </div>
            </div>
            <div class="Cont_CZ_2">
                
                <div class = "Cont_CZ_name_labels">   
                    <div class = "Cont_CZ_name_blocks"> 
                        <p class="Cel_text_2">Цели проекта</p>
                        <div class="Cel_2">
                            <div class="Your_approw1_2">
                                <ul>
                                    {props.data.goals.map(data => (<p><li>{data}</li></p>))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class = "Cont_CZ_name_blocks"> 
                        <p class="Zadacha_text_2">Задачи проекта</p>
                        <div class="Zadacha_2">
                                <div class="Your_approw2_2">
                                    <ul>
                                        {props.data.tasks.map(data => (<p><li>{data}</li></p>))}
                                    </ul>
                                </div>
                        </div>
                    </div>

                </div>
            </div>
            <div class="cont_Rez_2">
                <p class="Rez_pois_2">Результат проекта</p>
                <div class="Fon_Rez_2">
                    <p class="text_Rez_2">
                        {props.data.result}
                    </p>
                </div>
            </div>
        </div>
    </div>

  );
}

export default Main;
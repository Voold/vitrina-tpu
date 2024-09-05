import "./project_circles_stat.css"

const Circle_Stat = (props) => {

    const green_circle_for_stat  = <svg class="green_circle_background" width="60" height="59" viewBox="0 0 60 59" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M57.1083 29.8242C57.1083 44.7886 44.9773 56.9197 30.0128 56.9197C15.0483 56.9197 2.91726 44.7886 2.91726 29.8242C2.91726 14.8597 15.0483 2.72864 30.0128 2.72864C44.9773 2.72864 57.1083 14.8597 57.1083 29.8242Z" fill="#3FE260" stroke="#229F3B" stroke-width="4"/>
                                    </svg>;


    const void_circle_for_stat  =  <svg class = "white_circle_background" svg width="59" height="59" viewBox="0 0 59 59" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M58.9389 29.8242C58.9389 45.8932 45.9124 58.9197 29.8434 58.9197C13.7743 58.9197 0.747827 45.8932 0.747827 29.8242C0.747827 13.7552 13.7743 0.728638 29.8434 0.728638C45.9124 0.728638 58.9389 13.7552 58.9389 29.8242Z" fill="white"/>
                                        <path d="M56.9389 29.8242C56.9389 44.7886 44.8078 56.9197 29.8434 56.9197C14.8789 56.9197 2.74783 44.7886 2.74783 29.8242C2.74783 14.8597 14.8789 2.72864 29.8434 2.72864C44.8078 2.72864 56.9389 14.8597 56.9389 29.8242Z" stroke="black" stroke-opacity="0.4" stroke-width="4"/>
                                    </svg>;

    const tick_for_circle_for_stat =    <svg class = "circle_tick" width="22" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 8.77778L8.69231 15L21 1" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>;

    var circles = [<></>, <></>, <></>, <></>];

    const dateToDate = (date) => {
        return date.split("-").reverse().join(".");
    }


    let status = -1
    switch (props.status) {
        case "start_project":
            status = 0
        break;
        case "project_presentation":
            status = 1
        break;
        case "poster_session":
            status = 2
        break;
        case "project_protection":
            status = 3
        break;
        default:
            status = -1
        }

    for (var i = 0; i < 4; i++){
        if (status > i){
            switch (i) {
                case 0:
                circles[i] =    <div class = "project_circles_stat_circle-block">
                                    <div class = "project_circles_stat_circle">
                                        
                                        <div class = "project_circles_stat_onCircle-tick">
                                            {tick_for_circle_for_stat}
                                        </div>

                                        {green_circle_for_stat}

                                    </div>
                                    <div class = "project_circles_stat_labels"> 
                                        <label class = "project_circles_stat_labels_main_green desc_a">Старт проекта</label>
                                        <label class = "project_circles_stat_labels_main_green mob_a">Старт <br></br>проекта</label>
                                        <label class = "project_circles_stat_labels_date_green desc_a">{dateToDate(props.data.start_date)}</label>
                                        <label class = "project_circles_stat_labels_date_green mob_a"><br></br>{dateToDate(props.data.start_date)}</label>
                                    </div>
                                </div>
                break;
                case 1:
                circles[i] =    <div class = "project_circles_stat_circle-block">

                                    <div class = "project_circles_stat_circle">
                                        
                                        <div class = "project_circles_stat_onCircle-tick">
                                            {tick_for_circle_for_stat}
                                        </div>

                                        {green_circle_for_stat}

                                    </div>
                                    <div class = "project_circles_stat_labels"> 
                                        <label class = "project_circles_stat_labels_main_green desc_a">Представление проекта</label>
                                        <label class = "project_circles_stat_labels_main_green mob_a">Представление <br></br> проекта</label>
                                        <label class = "project_circles_stat_labels_date_green desc_a">{dateToDate(props.data.project_presentation_date)}</label>
                                        <label class = "project_circles_stat_labels_date_green mob_a"><br></br>{dateToDate(props.data.project_presentation_date)}</label>
                                    </div>
                                    
                                </div>
                break;
                case 2:
                    circles[i] =    <div class = "project_circles_stat_circle-block">

                                        <div class = "project_circles_stat_circle">
                                            
                                            <div class = "project_circles_stat_onCircle-tick">
                                                {tick_for_circle_for_stat}
                                            </div>

                                            {green_circle_for_stat}

                                        </div>
                                        <div class = "project_circles_stat_labels"> 
                                            <label class = "project_circles_stat_labels_main_green desc_a">Постерная сессия</label>
                                            <label class = "project_circles_stat_labels_main_green mob_a">Постерная <br></br>сессия</label>
                                            <label class = "project_circles_stat_labels_date_green desc_a">{dateToDate(props.data.poster_session_date)}</label>
                                            <label class = "project_circles_stat_labels_date_green mob_a"><br></br>{dateToDate(props.data.poster_session_date)}</label>
                                        </div>

                                    </div>
                break;
                default:
                    circles[i] =    <div class = "project_circles_stat_circle-block">

                                        <div class = "project_circles_stat_circle">
                                            
                                            
                                            <div class = "project_circles_stat_onCircle-tick">
                                                {tick_for_circle_for_stat}
                                            </div>

                                            {green_circle_for_stat}

                                        </div>
                                        <div class = "project_circles_stat_labels"> 
                                            <label class = "project_circles_stat_labels_main_green desc_a">Защита проекта</label>
                                            <label class = "project_circles_stat_labels_main_green mob_a">Защита <br></br> проекта</label>
                                            <label class = "project_circles_stat_labels_date_green desc_a">{dateToDate(props.data.end_date)}</label>
                                            <label class = "project_circles_stat_labels_date_green mob_a"><br></br>{dateToDate(props.data.end_date)}</label>
                                        </div>
                                        
                                    </div>
                }

        } else{
            switch (i) {
                case 0:
                circles[i] =    <div class = "project_circles_stat_circle-block">
                                    <div class = "project_circles_stat_circle">
                                        
                                        <div class = "project_circles_stat_onCircle">
                                            <label class = "project_circles_stat_numberOfCircle">1</label>
                                        </div>

                                        {void_circle_for_stat}

                                    </div>
                                    <div class = "project_circles_stat_labels"> 
                                        <label class = "project_circles_stat_labels_main_gray desc_a">Старт проекта</label>
                                        <label class = "project_circles_stat_labels_main_gray mob_a">Старт <br></br>проекта</label>
                                        <label class = "project_circles_stat_labels_date_gray desc_a">{dateToDate(props.data.start_date)}</label>
                                        <label class = "project_circles_stat_labels_date_gray mob_a"><br></br>{dateToDate(props.data.start_date)}</label>
                                    </div>
                                </div>
                break;
                case 1:
                circles[i] =    <div class = "project_circles_stat_circle-block">

                                    <div class = "project_circles_stat_circle">
                                        
                                        <div class = "project_circles_stat_onCircle">
                                            <label class = "project_circles_stat_numberOfCircle">2</label>
                                        </div>

                                        {void_circle_for_stat}

                                    </div>
                                    <div class = "project_circles_stat_labels"> 
                                        <label class = "project_circles_stat_labels_main_gray desc_a">Представление проекта</label>
                                        <label class = "project_circles_stat_labels_main_gray mob_a">Представление <br></br> проекта</label>
                                        <label class = "project_circles_stat_labels_date_gray desc_a">{dateToDate(props.data.project_presentation_date)}</label>
                                        <label class = "project_circles_stat_labels_date_gray mob_a"><br></br>{dateToDate(props.data.project_presentation_date)}</label>
                                    </div>
                                    
                                </div>
                break;
                case 2:
                    circles[i] =    <div class = "project_circles_stat_circle-block">

                                        <div class = "project_circles_stat_circle">
                                            
                                            <div class = "project_circles_stat_onCircle">
                                                <label class = "project_circles_stat_numberOfCircle">3</label>
                                            </div>

                                            {void_circle_for_stat}

                                        </div>
                                        <div class = "project_circles_stat_labels"> 
                                            <label class = "project_circles_stat_labels_main_gray desc_a">Постерная сессия</label>
                                            <label class = "project_circles_stat_labels_main_gray mob_a">Постерная <br></br>сессия</label>
                                            <label class = "project_circles_stat_labels_date_gray desc_a">{dateToDate(props.data.poster_session_date)}</label>
                                            <label class = "project_circles_stat_labels_date_gray mob_a"><br></br>{dateToDate(props.data.poster_session_date)}</label>
                                        </div>

                                    </div>
                break;
                default:
                    circles[i] =    <div class = "project_circles_stat_circle-block">

                                        <div class = "project_circles_stat_circle">
                                            
                                            
                                            <div class = "project_circles_stat_onCircle">
                                                <label class = "project_circles_stat_numberOfCircle">4</label>
                                            </div>

                                            {void_circle_for_stat}

                                        </div>
                                        <div class = "project_circles_stat_labels"> 
                                            <label class = "project_circles_stat_labels_main_gray desc_a">Защита проекта</label>
                                            <label class = "project_circles_stat_labels_main_gray mob_a">Защита <br></br> проекта</label>
                                            <label class = "project_circles_stat_labels_date_gray desc_a">{dateToDate(props.data.end_date)}</label>
                                            <label class = "project_circles_stat_labels_date_gray mob_a"><br></br>{dateToDate(props.data.end_date)}</label>
                                        </div>
                                        
                                    </div>
                }
        }
    }

    

    return(
        <div class="project_circles_stat">

                {circles.map(el => el)}


                <div className="project_circles_stat_line"></div>

            </div>
    )
}

export default Circle_Stat;
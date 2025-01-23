import "./Sprints_UI.css"

function SprintTask(props) {

    const dateToDate = (date) => {
        return date.split("-").reverse().join(".");
    }


    return (
      <>
        <div class="main_SprintTask">
            <div class = "sprint_task_body">
                <div class = "sprint_task_body_img">
                    <svg viewBox="0 0 35 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M3.86719 0C2.21033 0 0.867188 1.34314 0.867188 3V34.3333C0.867188 35.9902 2.21033 37.3333 3.86719 37.3333H19.6774V28.0001L19.6774 27.9098C19.6774 26.6671 19.6773 25.6001 19.7814 24.7462C19.8916 23.8424 20.14 22.9514 20.8098 22.2126C21.4987 21.4529 22.3631 21.1502 23.2493 21.0188C24.0515 20.8999 25.0439 20.9 26.1529 20.9001L26.2551 20.9001H34.7182V3C34.7182 1.34315 33.3751 0 31.7182 0H3.86719ZM34.6121 23.9001H26.2551C25.0117 23.9001 24.2452 23.9039 23.6893 23.9864C23.1928 24.06 23.087 24.1674 23.0323 24.2278C22.9585 24.3091 22.8351 24.488 22.7594 25.1092C22.6801 25.7597 22.6774 26.6416 22.6774 28.0001V37.1097C23.0873 36.9419 23.4594 36.6837 23.7634 36.3485L33.9407 25.1242C34.2601 24.7719 34.4886 24.3517 34.6121 23.9001Z" fill="#898989"/>
                    </svg>
                </div>  
                <div class = "sprint_task_label">{props.label}</div>
            </div>

            <div class = "sprint_task_icon">
                <svg viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="70" height="70" rx="35" fill="black" fill-opacity="0.12"/>
                    <path d="M44.9593 56.2124H25.0425C22.8731 56.1325 20.8522 55.0753 19.5318 53.3297C18.2114 51.584 17.7295 49.3322 18.2176 47.1893L18.7327 44.7107C19.3251 41.3553 22.1723 38.8895 25.5362 38.8185H44.4657C47.8296 38.8895 50.6768 41.3553 51.2692 44.7107L51.7843 47.1893C52.2724 49.3322 51.7905 51.584 50.4701 53.3297C49.1497 55.0753 47.1288 56.1325 44.9593 56.2124Z" fill="black" fill-opacity="0.56"/>
                    <path d="M36.074 34.47H33.9278C29.1866 34.47 25.343 30.5762 25.343 25.773V20.033C25.3373 18.0937 26.0952 16.2322 27.4488 14.8609C28.8024 13.4896 30.64 12.7218 32.5543 12.7276H37.4476C39.3619 12.7218 41.1995 13.4896 42.5531 14.8609C43.9067 16.2322 44.6646 18.0937 44.6589 20.033V25.773C44.6589 28.0796 43.7544 30.2917 42.1444 31.9227C40.5345 33.5537 38.3509 34.47 36.074 34.47Z" fill="black" fill-opacity="0.56"/>
                </svg>
            </div>

            <div class = "sprint_task_rightBlock">
                {props.status === "1" && <div class = "sprint_task_status_gray">
                    Не начато
                </div>}

                {props.status === "2" && <div class = "sprint_task_status_orange">
                    В процессе
                </div>}

                {props.status === "3" && <div class = "sprint_task_status_green">
                    Готово
                </div>}

                <div class = "sprint_task_date">
                    {dateToDate(props.date)}
                </div>
            </div>
        </div>
      </>
    );
  };
  
  export default SprintTask;
import { useState } from "react";
import SprintTask from "./SprintTask";


function SprintContainer(props) {

  const [showState, setShowState] = useState({
    status:false,
    main_container:"sprint_container_main_slim",
    arrow_rotate: "rotated_arrow sprint_container_arrow",
  })

  function add_task(){
    alert("new task");
  }

  function arrowClicked(){
    if(showState.status){
      setShowState({
        status:!showState.status,
        main_container:"sprint_container_main_slim",
        arrow_rotate: "rotated_arrow sprint_container_arrow",
      })} else{
        setShowState({
          status:!showState.status,
          main_container:"sprint_container_main",
          arrow_rotate: "sprint_container_arrow",
        })
      }
  }

    return (
      <div class = "sprint_container_wrap">
        <div class = "sprint_container_front">
          <div class = "sprint_container_sprint_info">
            <svg viewBox="0 0 29 39" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="16.8337" cy="4.86108" r="4.86108" fill="#636363"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M11.1515 17.0789C10.769 17.1927 10.3614 17.3432 9.94785 17.5307C8.35925 18.2511 7.13565 19.3022 6.67104 20.3535C6.16872 21.4901 4.84012 22.0043 3.70354 21.5019C2.56695 20.9996 2.05278 19.671 2.5551 18.5344C3.6528 16.0507 6.01185 14.3745 8.08935 13.4324C9.16562 12.9443 10.2825 12.5983 11.3156 12.4295C11.535 12.3936 11.7659 12.3632 12.0039 12.3423C12.0962 12.2257 12.2388 12.1523 12.3962 12.1523H18.9204C19.1274 12.1523 19.3123 12.2786 19.382 12.4735C19.4223 12.5862 19.4711 12.7252 19.5254 12.8852C19.5644 12.9192 19.6026 12.9548 19.6397 12.9919C20.4125 13.7647 21.9433 14.8657 23.55 15.7949C24.3352 16.249 25.0789 16.6272 25.6893 16.8842C26.1805 17.091 26.4494 17.16 26.5384 17.1828C26.5773 17.1928 26.5818 17.194 26.5555 17.194C27.7981 17.194 28.8055 18.2013 28.8055 19.444C28.8055 20.6866 27.7981 21.694 26.5555 21.694C25.6588 21.694 24.6802 21.3419 23.943 21.0315C23.1103 20.6809 22.1931 20.2084 21.2972 19.6903C20.966 19.4988 20.6292 19.2961 20.2929 19.0853C20.066 20.1865 19.6641 21.3153 19.2125 22.3561C20.8591 22.7661 22.6446 23.6372 24.0868 25.2201C26.3595 27.7145 27.401 31.55 26.3313 36.8987C26.0876 38.1172 24.9022 38.9075 23.6837 38.6638C22.4652 38.4201 21.675 37.2347 21.9187 36.0162C22.7933 31.6429 21.8094 29.4021 20.7604 28.2508C19.6649 27.0484 18.0965 26.5855 16.9489 26.5564C16.857 26.6709 16.7181 26.7353 16.5688 26.7353H14.2803C13.2212 30.3123 9.92463 35.136 3.25672 38.4699C2.14527 39.0256 0.793757 38.5751 0.238032 37.4637C-0.317694 36.3522 0.132811 35.0007 1.24426 34.445C6.35204 31.8911 8.70606 28.5572 9.64302 26.3392C9.63044 26.2799 9.6285 26.2171 9.63917 26.1531L11.1515 17.0789Z" fill="#636363"/>
            </svg> 
            {props.sprintNum + " спринт"}
          </div>
          <div class={showState.arrow_rotate} onClick={arrowClicked}>
            <svg viewBox="0 0 45 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path opacity="0.4" d="M43 20L22.5 2L2 20" stroke="#222222" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
        </div>
        <div class = {showState.main_container}>
          <div class = "sprint_container_task_header">
            <div class="sprint_container_task">
              <div class="sprint_container_task_title">Задача</div>
              <div class="sprint_container_add_task" onClick={add_task}>+ добавить задачу</div>
            </div>
            <div class="sprint_container_take_user">
              Назначить
            </div>
            <div class="sprint_container_right_block">
              <div class="sprint_container_status">
                Статус
              </div>
              <div class="sprint_container_date">
                Срок
              </div>
            </div>
          </div>
          <SprintTask label={"Разработка главной страницы"} status={"1"} date={"30-12-2002"}/>
          <SprintTask label={"Разработка каталога"} status={"2"} date={"22-01-2005"}/>
          <SprintTask label={"Разработка навбара"} status={"3"} date={"12-12-2001"}/>
        </div>
      </div>
    );
  };
  
  export default SprintContainer;
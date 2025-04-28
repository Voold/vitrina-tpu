
import { useState } from "react";
import style from "./styles/dropdownSort.module.css";
import { use } from "react";

export default function DropDownSort(props) {

  const [dropState, setDropState] = useState(style.hidden);

  const [selectedSort, setSelectedSort] = useState(null);

  function selectSort(e){
    console.log(e.target.id);
    if (e.target.id == selectedSort){
      setSelectedSort(null);
      return;
    }
    
    setSelectedSort(e.target.id)

  }

  function changeDropState(){
    if (dropState === style.hidden) {
      setDropState(style.shown)
    } else {
      setDropState(style.hidden)
    }
  }

  let voidCircle =  <svg className={style.circleSVG} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="10" cy="10" r="8.5"  stroke-width="3"/>
                    </svg>

  let filledCircle =  <svg className={style.circleSVG} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="10" cy="10" r="8.5" fill="#28be46" stroke-width="3"/>
                      </svg>
  

    return(
      <div className={`${style.sortBox} ${dropState === style.shown ? style.titleActiveBorder : ''}`}>

        <label className={style.sortTitle} onClick={changeDropState}>Сортировка
          <svg className={`${style.sortTitleSVG} ${dropState === style.shown ? style.rotatedArrow : ''}`} viewBox="0 0 24 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 2L12 12" stroke="#898989" stroke-width="3" stroke-linecap="round"/>
            <path d="M22 2L12 12" stroke="#898989" stroke-width="3" stroke-linecap="round"/>
          </svg>
        </label>

        <ul className={`${dropState} ${style.dropdown}`}>
          <sep className={style.sepLine}></sep>
          <li id="approved" onClick={selectSort}>Принятые 
            {selectedSort == "approved" ? filledCircle : voidCircle}</li>
          <li id="rejected" onClick={selectSort}>Отклонённые 
            {selectedSort == "rejected" ? filledCircle : voidCircle}
          </li>
          <li id="new" onClick={selectSort}>Новые 
            {selectedSort == "new" ? filledCircle : voidCircle}
          </li>
        </ul>
      </div>
    )

};
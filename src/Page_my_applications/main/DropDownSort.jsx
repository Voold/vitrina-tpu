
import { useState } from "react";
import style from "./styles/dropdownSort.module.css";

export default function DropDownSort(props) {

  const [dropState, setDropState] = useState(style.hidden);

  function changeDropState(){
    if (dropState === style.hidden) {
      setDropState(style.shown)
    } else {
      setDropState(style.hidden)
    }
  }

    return(
      <div className={style.sortBox}>

        <label className={style.sortTitle} onClick={changeDropState}>Сортировка
          <svg className={style.sortTitleSVG} viewBox="0 0 24 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 2L12 12" stroke="#898989" stroke-width="3" stroke-linecap="round"/>
            <path d="M22 2L12 12" stroke="#898989" stroke-width="3" stroke-linecap="round"/>
          </svg>
        </label>

        <ul className={`${dropState} ${style.dropdown}`}>
          <li>sos</li>
          <li>po</li>
          <li>at</li>
        </ul>
      </div>
    )

};
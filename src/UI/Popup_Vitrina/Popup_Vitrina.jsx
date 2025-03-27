
import { useState } from "react";
import style from "./Popup_Vitrina.module.css";

// {
//   <Popup_Vitrina target = {"completed element"}>
//     <Content_into/>
//   </Popup_Vitrina>
// }

export default function Popup_Vitrina(props) {

  const [popupStatus, setPopupStatus] = useState(false);

  function changePopupStatus () {
      setPopupStatus(!popupStatus);
  }

    return(
      <div>
        <div onClick={changePopupStatus} className={style.mainBody}>
          {props.target}
        </div>
        
        <div onClick={changePopupStatus} className={`${popupStatus && style.popupBack} ${!popupStatus && style.dspNone}`}>
        </div>

        <div className={`${popupStatus && style.popupBody} ${!popupStatus && style.dspNone}`}>
          {props.content_into}
        </div>

      </div>
    )

};
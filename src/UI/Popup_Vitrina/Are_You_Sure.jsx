
import style from "./Are_You_Sure.module.css";

{/* <Are_You_Sure text={'are you sure?'}/> */}

export default function Are_You_Sure(props) {

    return(
      <div>

        <div className={style.mainTitle}>
          {props.text}
        </div>

        <div className={style.buttonsBlock}>
          <div className={style.buttonYes}>Да</div>
          <div className={style.buttonNo}>Нет</div>
        </div>

      </div>
    )

};
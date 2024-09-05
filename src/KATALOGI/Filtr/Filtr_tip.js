import React, { useState } from "react";
import './Filtr2.css'
import Java_hover_tip from './Java_hover_tip'


const Huk = (props) =>{
    const [back, setBack] = useState(true);
    const changeBg = () =>{
        setBack(!back)
    }
    const newBackground = back ? '' : 'new_background';

    const NewFiltrDataHandler = (event) => {
      props.onFiltrType(event);
    }

    return (

      <div className={`Fil_inside ${newBackground}`}>
        <button onClick={(event) => changeBg (event)} className="Arrow_fil">
        {props.arrow}
        </button>
        <Java_hover_tip onChange = {NewFiltrDataHandler}/>
      </div>
    );
};

export default Huk;
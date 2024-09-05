import React, { useState } from "react";
import './Filtr2.css'
import Java_hover_ky from './Java_hover_ky'


const Huk = (props) =>{
    const [back, setBack] = useState(true);
    const changeBg = () =>{
        setBack(!back)
    }
    const newBackground = back ? '' : 'new_background';

    const NewFiltrDataHandler = (event) => {
      props.onFiltrCourse(event);
    }

    return (

      <div className={`Fil_inside ${newBackground}`}>

        <button onClick={(event) => changeBg (event)} className="Arrow_fil">
        {props.arrow}
        </button>
        <Java_hover_ky onChange = {NewFiltrDataHandler}/>
      </div>
    );
};

export default Huk;
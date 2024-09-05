import React, { useState } from "react";
import Java_hover_Ro from './Java_hover_Ro'

const Huk = (props) =>{
    const [back, setBack] = useState(true);
    const changeBg = () =>{
        setBack(!back)
    }
    const newBackground = back ? '' : 'new_background';

    const NewFiltrDataHandler = (event) => {
      props.onFiltrRole(event);
    }

    return (

      <div className={`Fil_inside ${newBackground}`}>

        <button onClick={(event) => changeBg (event)} className="Arrow_fil">
        {props.arrow}
        </button>
        <Java_hover_Ro onChange = {NewFiltrDataHandler}/>
      </div>
    );
};

export default Huk;
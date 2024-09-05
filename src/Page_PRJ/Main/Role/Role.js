import React, { useState } from "react";
import './Role.css/Front.css'
import Role_popup from './Role_popup'
// @flow strict

const Huk = (props) =>{
    const [back, setBack] = useState(true);
    const changeBg = () =>{
        setBack(!back)
    }
    const newBackground = back ? '' : 'new_background_Front_2';
    return (

    
            <div className={`Cont_Front_2 ${newBackground}`}>
                <div class = "flex_Role_Cont">
                    <p>{props.name}</p>
                    <button onClick={changeBg} className="Arrow_Front_2">
                        <svg viewBox="0 0 43 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M41 2L21.5 18L2 2" stroke="black" stroke-opacity="0.4" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </button>
                </div>
                {newBackground && <div className="Front_skr_2">
                    <ul>
                        {props.items.map(el => <li className='Front_v_2'><p>{el}</p></li>)}
                    </ul>
                    <Role_popup/>
                </div>}
            </div>
            
        
    );
};
export default Huk;

import style from "./CatalogProjectFooter.module.css"
import {React, useState} from "react";



const CatalogProjectFooter = (props) => {
    const maxCount = props.lengthThis;
    const [currentCount, SetCurrentCount] = useState(0);
    const numbers0 = [];
    const numbers1 = [];

    let pagesBeforeCurrent = 2;
    let pagesAfterCurrent = 2;

    if (currentCount < 3){
        for (let i = 0; i <currentCount ; i++)
            numbers0.push(i);
    } else {
        for (let i = currentCount-pagesBeforeCurrent; i <currentCount ; i++)
            numbers0.push(i);
    }

    if ((maxCount-1 - currentCount) <= 4){
        for (let i = currentCount+1; i <maxCount-1 ; i++)
            numbers1.push(i);
    } else {
        for (let i = currentCount+1; i <currentCount+pagesAfterCurrent+1 ; i++)
            numbers1.push(i);
    }


    const FOOTERbutClckHandler = (event) => {
        SetCurrentCount(event.target.innerHTML-1)
        props.onSelectNewPage(event.target.innerHTML-1);
    }
    
    return (
        <div className = {style.box}>
            {/* <HelpBut info={maxCount}/> */}
            {!(maxCount === 1) && !(maxCount === 0) && 
            <div className = {style.catalog_page_counter}>
                {numbers0.map(data => <a class="link" href="#start"><button onClick={FOOTERbutClckHandler} className={style.button_footer}>{data+1}</button></a>)}
                {<a class="link" href="#start"><button onClick={FOOTERbutClckHandler} className={`${style.button_footer} ${style.SELECTED_BUT_FOOTER}`}>{currentCount+1}</button></a>}
                {numbers1.map(data => <a class="link" href="#start"><button onClick={FOOTERbutClckHandler} className={style.button_footer}>{data+1}</button></a>)}
                {((maxCount) - currentCount+1 > 6) && <div className={`${style.button_footer} ${style.points_but}`}>...</div>}
                {((maxCount) != currentCount+1) && <a class="link" href="#start"><button onClick={FOOTERbutClckHandler} className={style.button_footer}>{maxCount}</button></a>}
            </div>}
        </div>
    )
}

export default CatalogProjectFooter;
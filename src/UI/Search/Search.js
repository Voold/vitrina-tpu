import React from 'react'
import "./SearchField.css"

export default function Search(props) {

  const updateSearchFieldHandler = (event) => {
    props.updateSearchField(event.target.value);
  }

  return (
    <div className="cont-search">
      <div className="insearch">
        
        <div className="search-btn">
          <svg viewBox="0 0 18 17" fill = "none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.4027 8C15.4027 11.8427 12.2022 15 8.20137 15C4.20058 15 1 11.8427 1 8C1 4.1573 4.20058 1 8.20137 1C12.2022 1 15.4027 4.1573 15.4027 8Z" stroke-width="2"/>
            <path d="M13.2744 12.9481L16.4031 16"  stroke-width="2" stroke-linecap="round"/>
          </svg>
        </div>
        
        <input onInput={updateSearchFieldHandler} type="text" className="input-search" placeholder=" Поиск" />

      </div>
    </div>
  )
}

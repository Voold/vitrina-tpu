import React, { useState } from "react";
import Filtr from "./Filtr";
import "./Filtr2.css"
import "./Filtr_popup.css"

const Filtr_Popup = (props) => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  const FiltrDataHandler = (event) => {
    props.onChangeFiltr(event);
  }

  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }
  return (
    <>
      {/* попап */}
      <button onClick={toggleModal} class="btn-modal_Filtr">
            
      </button>
      {modal && (
        <div class="popUP_filter_body">

            <div class="popUP_filter">
              <Filtr onChangeFiltr = {FiltrDataHandler}/>
            </div>
            
            <div onClick={toggleModal} class="popUP_filter_back">

            </div>
            {/* <div onClick={toggleModal} className="overlay_Front_2">
            </div> */}
            {/* <div className="Front_fon_2"></div> */}
        </div>
        
      )}
  </>
  
  );
}

export default Filtr_Popup;
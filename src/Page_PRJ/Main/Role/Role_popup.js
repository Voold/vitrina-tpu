import React, { useState } from "react";
import './Role.css/Front.css'
export default function Modal() {
  const [modal_Front_2, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal_Front_2);
  };

  if(modal_Front_2) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }
  return (
    <>
      {/* попап кнопочка войти */}
      <button onClick={toggleModal} className="btn-modal_Front_2">
            Откликнуться
      </button>
      {modal_Front_2 && (
        <div className="modal_Front_2">
            <div onClick={toggleModal} className="overlay_Front_2">

            </div>
            <div className="Front_fon_2">
              </div>
        </div>
        
      )}
  </>
  
  );
}
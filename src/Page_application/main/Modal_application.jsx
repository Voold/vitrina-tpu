import React from "react";
import "./Application_main.css"
import "./Modal_application.css"

export default function Modal(active, setActive) {
    if(!active) return null
    return (
        <div class="modal_app">
            <div class="modal_content_app">
                <button> <p>Принятые</p> <svg width="20.000000" height="20.000000" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" >
                    <circle id="Ellipse 226" cx="10.000000" cy="10.000000" r="8.500000" stroke="#898989" stroke-opacity="1.000000" stroke-width="3.000000" />
                </svg>
                </button>
                <button><p>Отклонённые</p> <svg width="20.000000" height="20.000000" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" >
                    <circle id="Ellipse 226" cx="10.000000" cy="10.000000" r="8.500000" stroke="#898989" stroke-opacity="1.000000" stroke-width="3.000000" />
                </svg></button>
                <button onClick={() => setActive(false)}><p>Новые</p> <svg width="20.000000" height="20.000000" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" >
                    <circle id="Ellipse 226" cx="10.000000" cy="10.000000" r="8.500000" stroke="#898989" stroke-opacity="1.000000" stroke-width="3.000000" />
                </svg></button>
            </div>
        </div>
        
    )
}
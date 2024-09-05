import React, { useState } from "react";
import { v4 as uuidv4} from "uuid";


export default function AddT({ prof, setProf }) {
    const [value, setValue] = useState("")
    const [value1,setValue1] = useState("")

    function saveProf() {
        if (value.trim().length != 0 && value1.trim().length != 0){
            setProf(
                [...prof, {
                    id: uuidv4(),
                    title: value,
                    title1: value1,
                    status: true
                }]
            )
            setValue('')
            setValue1('')
        } else {
            alert("Некорректное заполнение формы!\nIncorrect form filling!\n")
        }
    }
   
    return (
            <div className="modal">
                        <div className="header"> Добавить роль и описание </div>
                        <div className="content">
                            <p>Роль</p>
                        </div>
                        <div class="inter_role">
                            <input placeholder="Введите роль" value={value} onChange={(e) => setValue(e.target.value)} />
                        </div>
                        <div className="content">
                            <p>Описание</p>
                        </div>
                        <div class="inter_opis">
                            <textarea placeholder="Описание" value={value1} onChange={(t) => setValue1(t.target.value)}></textarea>
                        </div>
                        <div className="actions">
                            <div class="batton_add_project"><button onClick={saveProf}>Добавить роль</button></div>
                        </div>
                    </div>

    )
}
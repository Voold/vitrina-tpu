import { useState } from "react";
import "./Add_project.css";
import "./list_professions.css";
import React from "react";
import Popup from "reactjs-popup";
export default function Button({ prof, setProf }) {

    const [edit, setEdit] = useState(null)
    const [value, setValue] = useState('')
    const [value1, setValue1] = useState('')


    function Delete(id) {
        let newProf = [...prof].filter(item => item.id != id)
        setProf(newProf)
    }

    function Edit(id, title, title1) {
        setEdit(id)
        setValue(title)
        setValue1(title1)
    }

    function Save(id) {
        if (value.trim().length != 0 && value1.trim().length != 0){
            let newProf = [...prof].map(item => {
                if (item.id == id) {
                    item.title = value
                    item.title1 = value1
                }
                return item
            })
            setProf(newProf)
            setEdit(null)
            console.log("Save")
        } else {
            alert("Некорректное заполнение формы!\nIncorrect form filling!\n")
        }
    }
    return (
        <div className="Mylist">
            {
                prof.map(item => (
                    <div key={item.id} className="role_list" >
                         
                                { 
                                    edit==item.id ?
                                            
                                                <div class="castom_modal" onClick={()=>setEdit(null)}>
                                                    <div className="modal_" onClick={(e)=>e.stopPropagation()}>
                                                        <div class = "move_modal">
                                                            <div className="header"> Добавить роль и описание </div>
                                                            <div className="content">
                                                                <p>Роль</p>
                                                            </div>
                                                            <div class="inter_role_edit">
                                                                <input value={value} onChange={(e) => setValue(e.target.value)} />
                                                            </div>
                                                            <div className="content">
                                                                <p>Описание</p>
                                                            </div>
                                                            <div class="inter_opis">
                                                                <textarea value={value1} onChange={(e) => setValue1(e.target.value)} />
                                                            </div>
                                                            <div className="actions1">
                                                                <div class="batton_add_project"><button type="button" onClick={() => Save(item.id)}>Сохранить изменения</button></div>
                                                                <div class="batton_add_project_delete"><button type="button" onClick={() => Delete(item.id)}> Удалить роль </button></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            
                                            
                                            :

                                    <button className="edit" onClick={() => Edit(item.id, item.title, item.title1)} >  {item.title} </button>   
                                }
                        
                    </div>
                ))
            }

        </div>
    )
}
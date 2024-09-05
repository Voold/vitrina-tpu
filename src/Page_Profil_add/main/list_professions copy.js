import { useState } from "react";
import "./Add_project.css";
import "./list_professions.css";

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
        let newProf = [...prof].map(item => {
            if (item.id == id) {
                item.title = value
                item.title1 = value1
            }
            return item
        })
        setProf(newProf)
        setEdit(null)
    }
    return (
        <div>
            {
                prof.map(item => (
                    <div key={item.id} className="role_list" >
                        {
                            edit == item.id ?
                                <div className="modal_two">
                                    <div className="modal_wrapper">
                                        <div className="modal-content">
                                            {/* <input value={value} onChange={(e) => setValue(e.target.value)}/>
                                    <textarea value={value1} onChange={(e) => setValue1(e.target.value)}/>
                                    <button onClick={() => Save(item.id)}>Сохранить</button>
                                    <button onClick={() => Delete(item.id)}> удалить </button> */}

                                            <div className="modal">
                                                <div className="header"> Добавить роль и описание </div>
                                                <div className="content">
                                                    <p>Роль</p>
                                                </div>
                                                <div class="inter_role">
                                                    <input value={value} onChange={(e) => setValue(e.target.value)} />
                                                </div>
                                                <div className="content">
                                                    <p>Описание</p>
                                                </div>
                                                <div class="inter_opis">
                                                    <textarea value={value1} onChange={(e) => setValue1(e.target.value)} />
                                                </div>
                                                <div className="actions">
                                                    <div class="batton_add_project"><button onClick={() => Save(item.id)}>Сохранить изменения</button></div>
                                                    <div class="batton_add_project"><button onClick={() => Delete(item.id)}> удалить </button></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                :

                                <button className="edit" onClick={() => Edit(item.id, item.title, item.title1)}>  {item.title} </button>

                        }
                        {
                            edit == item.id ?
                                <div >
                                    <button onClick={() => Save(item.id)}>Сохранить</button>
                                </div> :
                                <div >

                                </div>
                        }
                    </div>
                ))
            }

        </div>
    )
}
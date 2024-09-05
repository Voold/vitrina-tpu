import React from "react";
import "./Profil_2.css"
import { ReactComponent as Icon } from "./svg/icon_man.svg"
import { ReactComponent as Chat } from "./svg/for_chat.svg"
import { ReactComponent as ZaLuPa } from "./svg/le_zalupa.svg"
export default function Profil_2() {
    return (
        <div class="chief_div">
            
            <div class="student_app_2">
                <Icon />
                <div class="student_app2_2">
                    <p>Костя Тихий</p>
                    <p>{"ИШИТР"}/n курс </p>
                    <p>В сети был ...</p>
                </div>
                <div class="student_bottom_2">
                    <div class="post">
                        <p>Должность</p>
                    </div>

                    <div class="post_bottom">
                        <button ><p>Написать</p> <div class="chat"><Chat /></div> </button>
                    </div>
                </div>
            </div>

            <div class="about_me">
                <p>Обо мне</p>
                <div class="about_me_content"><p>Красноухие асноухие черепахи – довольно распррасноухие черепахи – довольно распррасноухие черепахи – довольно распрчерепахи – довольно распространенные питомцы, которые могут прожить в домашних условиях долгую и счастливую жизнь. Главное – создать правильные условия для содержания, ознакомиться с особенностями ухода и подобрать сбалансированное питание, необходимое для поддержания хорошего самочувствия и здоровья домашней рептилии.</p>
                </div>
            </div>
            <div class="experience">
                <p>Опыт</p>
                <div class="experience_content">
                    <p> Опыт не нужен, я ебейший </p>
                </div>
            </div>
            
                <div class="skills_myprofil_2">
                    <p>Навыки</p>
                    <div class="skills_myprofil_2_content">
                        <p>
                            С++ Ёбана
                        </p>
                    </div>
                    <div class="skills_myprofil_2_content">
                        <p>
                            html_eбанный
                        </p>
                    </div>
                    <div class="skills_myprofil_2_content">
                        <p>
                            хочу пиццы
                        </p>
                    </div>

                </div>
            
            <div class="personal_statistics">
                <p>Le ZaLuPa:</p>
                <div class="Le_ZaLuPa">
                    <ZaLuPa/>
                </div>
            </div>
            <div class="users_projects">
                <p>Проекты юзера</p>
                <div>
                </div>
            </div>
        </div>
    )
}
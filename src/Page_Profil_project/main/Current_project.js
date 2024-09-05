import React from 'react'
import "./Current_project.css"

const CurrentProject = () => {
    return (
        <div class='profil_myproject_curproject_conteiner'>
            <div class='profil_myproject_curproject'>

                <div class='profil_myproject_curproject_leftPart' >
                    <p class='profil_myproject_curproject_info'>Текущий проект</p>
                    <p class='profil_myproject_curproject_ist'>Источник прoекта</p>
                    <div class='profil_myproject_curproject_conthesh'>
                        <p class='profil_myproject_curproject_hesh'>#хештег</p>
                        <p class='profil_myproject_curproject_hesh'>#хештег</p>
                    </div>
                </div>

                <div class='profil_myproject_curproject_right'>
                    <p class='profil_myproject_curproject_righ_date'>до дд.мм.гггг</p>
                    <div class='profil_myproject_curproject_righ_cont'>
                        <div class='profil_myproject_curproject_righ_img'>
                            <svg viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g id="calendar">
                                    <g id="calendar">
                                        <path id="Vector" d="M9.33301 6.70833C8.85467 6.70833 8.45801 6.31167 8.45801 5.83333V2.33333C8.45801 1.855 8.85467 1.45833 9.33301 1.45833C9.81134 1.45833 10.208 1.855 10.208 2.33333V5.83333C10.208 6.31167 9.81134 6.70833 9.33301 6.70833Z" fill="white" />
                                        <path id="Vector_2" d="M18.667 6.70833C18.1887 6.70833 17.792 6.31167 17.792 5.83333V2.33333C17.792 1.855 18.1887 1.45833 18.667 1.45833C19.1453 1.45833 19.542 1.855 19.542 2.33333V5.83333C19.542 6.31167 19.1453 6.70833 18.667 6.70833Z" fill="white" />
                                        <path id="Vector_3" d="M9.91667 16.9167C9.765 16.9167 9.61333 16.8817 9.47333 16.8234C9.32167 16.765 9.205 16.6833 9.08833 16.5783C8.87833 16.3567 8.75 16.065 8.75 15.75C8.75 15.5983 8.785 15.4467 8.84334 15.3067C8.90167 15.1667 8.98333 15.0384 9.08833 14.9217C9.205 14.8167 9.32167 14.735 9.47333 14.6767C9.89333 14.5017 10.4183 14.595 10.745 14.9217C10.955 15.1434 11.0833 15.4467 11.0833 15.75C11.0833 15.82 11.0717 15.9017 11.06 15.9834C11.0483 16.0534 11.025 16.1233 10.99 16.1933C10.9667 16.2633 10.9317 16.3333 10.885 16.4033C10.85 16.4617 10.7917 16.52 10.745 16.5783C10.5233 16.7883 10.22 16.9167 9.91667 16.9167Z" fill="white" />
                                        <path id="Vector_4" d="M13.9997 16.9167C13.848 16.9167 13.6963 16.8817 13.5563 16.8233C13.4047 16.765 13.288 16.6833 13.1713 16.5783C12.9613 16.3567 12.833 16.065 12.833 15.75C12.833 15.5983 12.868 15.4467 12.9263 15.3067C12.9847 15.1667 13.0663 15.0383 13.1713 14.9217C13.288 14.8167 13.4047 14.735 13.5563 14.6766C13.9763 14.49 14.5013 14.595 14.828 14.9217C15.038 15.1433 15.1663 15.4467 15.1663 15.75C15.1663 15.82 15.1547 15.9017 15.143 15.9833C15.1313 16.0533 15.108 16.1233 15.073 16.1933C15.0497 16.2633 15.0147 16.3333 14.968 16.4033C14.933 16.4617 14.8747 16.52 14.828 16.5783C14.6063 16.7883 14.303 16.9167 13.9997 16.9167Z" fill="white" />
                                        <path id="Vector_5" d="M18.0837 16.9167C17.932 16.9167 17.7803 16.8817 17.6403 16.8233C17.4887 16.765 17.372 16.6833 17.2553 16.5783C17.2087 16.52 17.162 16.4617 17.1153 16.4033C17.0687 16.3333 17.0337 16.2633 17.0103 16.1933C16.9753 16.1233 16.952 16.0533 16.9403 15.9833C16.9287 15.9017 16.917 15.82 16.917 15.75C16.917 15.4467 17.0453 15.1433 17.2553 14.9217C17.372 14.8167 17.4887 14.735 17.6403 14.6766C18.072 14.49 18.5853 14.595 18.912 14.9217C19.122 15.1433 19.2503 15.4467 19.2503 15.75C19.2503 15.82 19.2387 15.9017 19.227 15.9833C19.2153 16.0533 19.192 16.1233 19.157 16.1933C19.1337 16.2633 19.0987 16.3333 19.052 16.4033C19.017 16.4617 18.9587 16.52 18.912 16.5783C18.6903 16.7883 18.387 16.9167 18.0837 16.9167Z" fill="white" />
                                        <path id="Vector_6" d="M9.91667 21C9.765 21 9.61333 20.965 9.47333 20.9067C9.33333 20.8484 9.205 20.7667 9.08833 20.6617C8.87833 20.44 8.75 20.1367 8.75 19.8333C8.75 19.6817 8.785 19.53 8.84334 19.39C8.90167 19.2383 8.98333 19.11 9.08833 19.005C9.52 18.5733 10.3133 18.5733 10.745 19.005C10.955 19.2267 11.0833 19.53 11.0833 19.8333C11.0833 20.1367 10.955 20.44 10.745 20.6617C10.5233 20.8717 10.22 21 9.91667 21Z" fill="white" />
                                        <path id="Vector_7" d="M13.9997 21C13.6963 21 13.393 20.8717 13.1713 20.6617C12.9613 20.44 12.833 20.1367 12.833 19.8333C12.833 19.6817 12.868 19.53 12.9263 19.39C12.9847 19.2383 13.0663 19.11 13.1713 19.005C13.603 18.5733 14.3963 18.5733 14.828 19.005C14.933 19.11 15.0147 19.2383 15.073 19.39C15.1313 19.53 15.1663 19.6817 15.1663 19.8333C15.1663 20.1367 15.038 20.44 14.828 20.6617C14.6063 20.8717 14.303 21 13.9997 21Z" fill="white" />
                                        <path id="Vector_8" d="M18.0837 21C17.7803 21 17.477 20.8717 17.2553 20.6617C17.1503 20.5567 17.0687 20.4284 17.0103 20.2767C16.952 20.1367 16.917 19.985 16.917 19.8334C16.917 19.6817 16.952 19.53 17.0103 19.39C17.0687 19.2384 17.1503 19.11 17.2553 19.005C17.5237 18.7367 17.932 18.6084 18.3053 18.69C18.387 18.7017 18.457 18.725 18.527 18.76C18.597 18.7834 18.667 18.8184 18.737 18.8651C18.7953 18.9001 18.8537 18.9584 18.912 19.005C19.122 19.2267 19.2503 19.53 19.2503 19.8334C19.2503 20.1367 19.122 20.44 18.912 20.6617C18.6903 20.8717 18.387 21 18.0837 21Z" fill="white" />
                                        <path id="Vector_9" d="M23.9163 11.48H4.08301C3.60467 11.48 3.20801 11.0833 3.20801 10.605C3.20801 10.1266 3.60467 9.72996 4.08301 9.72996H23.9163C24.3947 9.72996 24.7913 10.1266 24.7913 10.605C24.7913 11.0833 24.3947 11.48 23.9163 11.48Z" fill="white" />
                                        <path id="Vector_10" d="M18.6667 26.5417H9.33333C5.075 26.5417 2.625 24.0917 2.625 19.8333V9.91667C2.625 5.65833 5.075 3.20833 9.33333 3.20833H18.6667C22.925 3.20833 25.375 5.65833 25.375 9.91667V19.8333C25.375 24.0917 22.925 26.5417 18.6667 26.5417ZM9.33333 4.95833C5.99667 4.95833 4.375 6.58 4.375 9.91667V19.8333C4.375 23.17 5.99667 24.7917 9.33333 24.7917H18.6667C22.0033 24.7917 23.625 23.17 23.625 19.8333V9.91667C23.625 6.58 22.0033 4.95833 18.6667 4.95833H9.33333Z" fill="white" />
                                    </g>
                                </g>
                            </svg>
                        </div>
                        <p class='profil_myproject_curproject_righ_boxText desktop_ver_cp'>n месяцев</p>
                        <p class='profil_myproject_curproject_righ_boxText mobile_ver_cp'>n мес</p>
                    </div>
                    <div class='profil_myproject_curproject_righ_cont'>
                        <div class='profil_myproject_curproject_righ_img'>
                            <svg viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g id="vuesax/outline/document">
                                    <g id="document">
                                        <path id="Vector" d="M17.4997 26.5417H10.4997C4.16467 26.5417 1.45801 23.835 1.45801 17.5V10.5C1.45801 4.165 4.16467 1.45834 10.4997 1.45834H16.333C16.8113 1.45834 17.208 1.855 17.208 2.33334C17.208 2.81167 16.8113 3.20834 16.333 3.20834H10.4997C5.12134 3.20834 3.20801 5.12167 3.20801 10.5V17.5C3.20801 22.8783 5.12134 24.7917 10.4997 24.7917H17.4997C22.878 24.7917 24.7913 22.8783 24.7913 17.5V11.6667C24.7913 11.1883 25.188 10.7917 25.6663 10.7917C26.1447 10.7917 26.5413 11.1883 26.5413 11.6667V17.5C26.5413 23.835 23.8347 26.5417 17.4997 26.5417Z" fill="white" />
                                        <path id="Vector_2" d="M25.6663 12.5417H20.9997C17.0097 12.5417 15.458 10.99 15.458 7V2.33333C15.458 1.98333 15.668 1.65666 15.9947 1.52833C16.3213 1.38833 16.6947 1.47 16.9513 1.715L26.2847 11.0483C26.5297 11.2933 26.6113 11.6783 26.4713 12.005C26.3313 12.3317 26.0163 12.5417 25.6663 12.5417ZM17.208 4.445V7C17.208 10.01 17.9897 10.7917 20.9997 10.7917H23.5547L17.208 4.445Z" fill="white" />
                                    </g>
                                </g>
                            </svg>

                        </div>
                        <p class='profil_myproject_curproject_righ_boxText'>НИРС</p>
                    </div>
                </div>

                <div class='profil_myproject_curproject_right'>

                    <div class='profil_myproject_curproject_righ_cont'>
                        <div>
                        <svg width="30" height="29" viewBox="0 0 30 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M29.5004 11.4203L29.46 11.3126L25.3768 0.675832C25.2942 0.466976 25.1471 0.289802 24.957 0.169959C24.8151 0.0792422 24.6539 0.0229866 24.4863 0.00569992C24.3187 -0.0115868 24.1494 0.0105771 23.9919 0.0704147C23.8344 0.130252 23.6932 0.2261 23.5795 0.350274C23.4658 0.474448 23.3828 0.623496 23.3372 0.78547L20.5811 9.21218H9.41991L6.6638 0.78547C6.61783 0.623738 6.53465 0.474971 6.4209 0.351034C6.30715 0.227097 6.16597 0.13142 6.00863 0.0716313C5.85129 0.0118425 5.68214 -0.0104033 5.51467 0.00666846C5.3472 0.0237402 5.18603 0.0796565 5.04403 0.169959C4.85386 0.289802 4.70681 0.466976 4.62416 0.675832L0.542965 11.3145L0.500592 11.4203C-0.0869805 12.9539 -0.159367 14.6367 0.294344 16.215C0.748056 17.7933 1.70327 19.1814 3.01595 20.1702L3.03136 20.1817L3.06603 20.2086L9.27739 24.8577L12.359 27.1831L14.2311 28.5969C14.4507 28.7626 14.7185 28.8522 14.9938 28.8522C15.269 28.8522 15.5368 28.7626 15.7565 28.5969L17.6285 27.1831L20.7101 24.8577L26.9658 20.1817L26.9831 20.1683C28.2957 19.1799 29.2511 17.7921 29.7051 16.2143C30.1592 14.6364 30.0873 12.9539 29.5004 11.4203Z" fill="black" fill-opacity="0.5"/>
                        </svg>

                        </div>
                        <p class='profil_myproject_curproject_righ_boxText'>GitLab</p>
                    </div>

                    <div class='profil_myproject_curproject_righ_cont'>
                        <div>
                        <svg width="30" height="26" viewBox="0 0 30 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_5262_7143)">
                            <path opacity="0.5" d="M29.9945 12.6093C29.9945 11.1269 29.544 9.70589 28.655 8.38445C27.857 7.19841 26.7389 6.14859 25.3322 5.26371C22.6158 3.556 19.0454 2.61518 15.2796 2.61518C14.0217 2.61518 12.7818 2.71979 11.5792 2.92717C10.8332 2.23975 9.95965 1.6213 9.03539 1.13249C4.09769 -1.22296 0.00292969 1.07713 0.00292969 1.07713C0.00292969 1.07713 3.81 4.1553 3.1909 6.85332C1.48781 8.51639 0.564492 10.5217 0.564492 12.6093C0.564492 12.6158 0.564844 12.6226 0.564844 12.6293C0.564844 12.6358 0.564492 12.6423 0.564492 12.6493C0.564492 14.737 1.48746 16.7423 3.1909 18.405C3.81 21.1032 0.00292969 24.1815 0.00292969 24.1815C0.00292969 24.1815 4.09769 26.4813 9.03539 24.1262C9.95953 23.6374 10.8328 23.0186 11.5792 22.3315C12.782 22.5386 14.0217 22.6431 15.2796 22.6431C19.0457 22.6431 22.6157 21.703 25.3322 19.9952C26.7389 19.1104 27.857 18.0609 28.6552 16.8743C29.544 15.5531 29.9946 14.1315 29.9946 12.6497C29.9946 12.6428 29.9943 12.6364 29.9943 12.6296L29.9945 12.6093Z" fill="black" fill-opacity="0.5"/>
                            <path d="M15.1791 4.42105C22.1523 4.42105 27.8056 7.97511 27.8056 12.3592C27.8056 16.7429 22.1523 20.2971 15.1791 20.2971C13.6264 20.2971 12.1393 20.1204 10.7656 19.7983C9.3693 21.4513 6.29781 23.7498 3.31398 23.007C4.28453 21.9811 5.72242 20.2474 5.41469 17.3916C3.62617 16.0222 2.55273 14.2694 2.55273 12.3592C2.55238 7.97477 8.20562 4.42105 15.1791 4.42105Z" fill="white" fill-opacity="0.7"/>
                            <path d="M15.2795 14.5554C16.206 14.5554 16.957 13.8164 16.957 12.9045C16.957 11.9927 16.206 11.2536 15.2795 11.2536C14.3532 11.2536 13.6022 11.9927 13.6022 12.9045C13.6022 13.8164 14.3532 14.5554 15.2795 14.5554ZM21.1112 14.5554C22.0376 14.5554 22.7887 13.8164 22.7887 12.9045C22.7887 11.9927 22.0376 11.2536 21.1112 11.2536C20.1849 11.2536 19.4339 11.9927 19.4339 12.9045C19.4339 13.8164 20.1849 14.5554 21.1112 14.5554ZM9.44758 14.5551C10.3738 14.5551 11.1246 13.8161 11.1246 12.9046C11.1246 11.993 10.3738 11.2539 9.44769 11.2539C8.52133 11.2539 7.77051 11.993 7.77051 12.9045C7.77051 13.8161 8.52133 14.5551 9.44758 14.5551Z" fill="black" fill-opacity="0.5"/>
                            <path d="M15.0565 19.4207C13.5038 19.4207 12.0167 19.2673 10.643 18.9882C9.4102 20.2533 6.87098 21.954 4.23953 21.8915C3.89277 22.4087 3.5159 22.8315 3.19141 23.1747C6.17523 23.9175 9.24672 21.6193 10.643 19.966C12.0168 20.2884 13.504 20.4649 15.0565 20.4649C21.9738 20.4649 27.5911 16.9671 27.6807 12.6316C27.5911 16.3896 21.9738 19.4207 15.0565 19.4207Z" fill="#CCCCCC"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_5262_7143">
                            <rect width="30" height="25.2632" fill="white"/>
                            </clipPath>
                            </defs>
                        </svg>


                        </div>
                        <p class='profil_myproject_curproject_righ_boxText desktop_ver_cp'>Rocket.Chat</p>
                        <p class='profil_myproject_curproject_righ_boxText mobile_ver_cp'>R.Chat</p>
                    </div>

                    <div class='profil_myproject_curproject_righ_cont'>
                        <div>
                        <svg width="30" height="21" viewBox="0 0 30 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 20.7692H6.46154L6.92308 14.8611L0.922693 13.3846L0 20.7692Z" fill="black" fill-opacity="0.4"/>
                            <path d="M1.38477 12.548L6.59568 13.8461L7.8463 9.30264L3.46913 6.92307L1.38477 12.548Z" fill="black" fill-opacity="0.3"/>
                            <path d="M3.69238 6.04946L8.56395 8.76924L12.4616 6.04946L8.80794 1.84616L3.69238 6.04946Z" fill="black" fill-opacity="0.2"/>
                            <path d="M30.0002 20.7692H23.5391L23.0771 14.8611L29.0775 13.3846L30.0002 20.7692Z" fill="black" fill-opacity="0.4"/>
                            <path d="M28.6155 12.548L23.032 13.8461L21.6924 9.30264L26.3821 6.92307L28.6155 12.548Z" fill="black" fill-opacity="0.3"/>
                            <path d="M26.3073 6.04946L21.4353 8.76924L17.5381 6.04946L21.1921 1.84616L26.3073 6.04946Z" fill="black" fill-opacity="0.2"/>
                            <path d="M10.1543 1.00699L13.451 5.53846H16.5276L19.3851 1.00699L16.5276 0H13.3737L10.1543 1.00699Z" fill="black" fill-opacity="0.1"/>
                        </svg>


                        </div>
                        <p class='profil_myproject_curproject_righ_boxText'>Redmine</p>
                    </div>
                    
                </div>

            </div>

        </div>
    )
}

export default CurrentProject;

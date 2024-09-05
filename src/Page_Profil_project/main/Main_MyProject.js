import React from 'react'
import './main.css'
import CurrentProject from './Current_project'
import Comproject from './comlited_project'

const MyProjectBody = () => {
    return (
        <div class='page_myproject_class'>
                
                <label class='profil_myproject_My'>Мои проекты</label>

                <div class = "profil_myproject_top_container">
                    <div class='profil_myproject_tasks'>

                        <div class = "profil_myproject_decorate_line"></div>

                        <div className='profil_myproject_task'>
                            
                            <div className='profil_myproject_task_img'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M36 20C36 28.8366 28.8366 36 20 36C11.1634 36 4 28.8366 4 20C4 11.1634 11.1634 4 20 4C28.8366 4 36 11.1634 36 20ZM40 20C40 31.0457 31.0457 40 20 40C8.9543 40 0 31.0457 0 20C0 8.9543 8.9543 0 20 0C31.0457 0 40 8.9543 40 20ZM22 11.1111C22 10.0065 21.1046 9.11111 20 9.11111C18.8954 9.11111 18 10.0065 18 11.1111V20C18 21.1046 18.8954 22 20 22C21.1046 22 22 21.1046 22 20V11.1111ZM22 26.6667C22 25.5621 21.1046 24.6667 20 24.6667C18.8954 24.6667 18 25.5621 18 26.6667V27.7778C18 28.8823 18.8954 29.7778 20 29.7778C21.1046 29.7778 22 28.8823 22 27.7778V26.6667Z" fill="#222222" />
                                </svg>
                            </div>
                            <p>Сделать</p>

                        </div>

                        <div className='profil_myproject_task fat_boy'>
                            <div className='profil_myproject_task_img'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M36 20C36 28.8366 28.8366 36 20 36C11.1634 36 4 28.8366 4 20C4 11.1634 11.1634 4 20 4C28.8366 4 36 11.1634 36 20ZM40 20C40 31.0457 31.0457 40 20 40C8.9543 40 0 31.0457 0 20C0 8.9543 8.9543 0 20 0C31.0457 0 40 8.9543 40 20ZM22 8.88889C22 7.78432 21.1046 6.88889 20 6.88889C18.8954 6.88889 18 7.78432 18 8.88889V22.2222C18 23.3268 18.8954 24.2222 20 24.2222H26.6667C27.7712 24.2222 28.6667 23.3268 28.6667 22.2222C28.6667 21.1176 27.7712 20.2222 26.6667 20.2222H22V8.88889Z" fill="#222222" />
                                </svg>
                            </div>
                            <p>В процессе</p>
                        </div>

                        <div className='profil_myproject_task'>
                            <div className='profil_myproject_task_img'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M36 20C36 28.8366 28.8366 36 20 36C11.1634 36 4 28.8366 4 20C4 11.1634 11.1634 4 20 4C28.8366 4 36 11.1634 36 20ZM40 20C40 31.0457 31.0457 40 20 40C8.9543 40 0 31.0457 0 20C0 8.9543 8.9543 0 20 0C31.0457 0 40 8.9543 40 20ZM29.2723 15.7732C30.0061 14.9476 29.9317 13.6835 29.1062 12.9496C28.2806 12.2158 27.0165 12.2902 26.2826 13.1157L18.6552 21.6965L14.5824 18.4383C13.7199 17.7482 12.4613 17.8881 11.7713 18.7506C11.0813 19.6131 11.2211 20.8717 12.0836 21.5617L17.6392 26.0062C18.4702 26.671 19.6763 26.5686 20.3834 25.7732L29.2723 15.7732Z" fill="#222222" />
                                </svg>
                            </div>
                            <p>Готово</p>
                        </div>

                    

                    </div>



                    <div className='profil_myproject_tasks2'>
                        <div className='profil_myproject_task2'>
                            <p>Задача 1</p>
                        </div>
                        <div className='profil_myproject_task2 fat_boy'>
                            <p>Задача 2</p>
                        </div>
                        <div className='profil_myproject_task2'>
                            <p>Задача 3</p>
                        </div>
                    </div>

                </div>


                   <div class="profil_myproject_bottom_container">
                        <CurrentProject />
                        <div class="profil_myproject_SUB_bottom_container">
                            <Comproject />
                            <Comproject />
                        </div>
                    </div> 
        </div>
    )
}

export default MyProjectBody;
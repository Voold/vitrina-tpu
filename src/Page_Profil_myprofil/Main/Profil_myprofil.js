import React, {useEffect, useState} from "react"
import './Profil_myprofil.css'
import { logRoles } from "@testing-library/react";

export default function Page1(props) {


  const requestOptions = {
    headers: { 
        Token: "b8e052294e47031efa9e5eb26d476d7a6e363664"
     },
  };

  const headers = new Headers({
    "Authorization": "Token b8e052294e47031efa9e5eb26d476d7a6e363664" 
  });
  const options = {
      headers,
      credentials:"include" // Вот, что нужно задать
  };

  useEffect(() => {
    fetch('http://176.109.107.163:8000/users/2/', options)
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error(error));
  }, []);

  const [userInput, setUserInput]= useState({
    last_name: '',
    name: '',
    group: '',
    sch: '',
    about: '',
    exp: '',
    skills: '',
    // autz: '1',
  })

  const [textAreaInfo, setTextAreaInfo] = useState({
    ta0:"0",
    ta1:"0",
    ta2:"0",
  })

  let length = 0;
  const textarea0 = <textarea onInput={onInput0} maxlength="500" class='profil_myprofil_about_area profil_myprofil_area_scrollbar' placeholder='Обо мне' type="text" name = 'about'></textarea>
  const textarea1 = <textarea onInput={onInput1} maxlength="250" class='profil_myprofil_exp_area profil_myprofil_area_scrollbar' placeholder='Опыт' type="text" name = 'exp'></textarea>
  const textarea2 = <textarea onInput={onInput2} maxlength="250" class='profil_myprofil_skill_area profil_myprofil_area_scrollbar' placeholder='Мои навыки' type="text" name = 'skills'></textarea>

  function onInput0(event) {
    length = event.target.value.length;
    setTextAreaInfo (previousState => {
        return{
        ...previousState,
        ta0: String(length),
        }});
  }
  function onInput1(event) {
    length = event.target.value.length;
    setTextAreaInfo (previousState => {
        return{
        ...previousState,
        ta1: String(length),
        }});
  }
  function onInput2(event) {
    length = event.target.value.length;
    setTextAreaInfo (previousState => {
        return{
        ...previousState,
        ta2: String(length),
        }});
  }

  const setDataHandler = (event, field) => {
    event.preventDefault();
    setUserInput(prevState => {
      return{
        last_name: event.target[1].value,
        name: event.target[2].value,
        group: event.target[3].value,
        sch: event.target[4].value,
        about: event.target[5].value,
        exp: event.target[6].value,
        skills: event.target[7].value,
        // autz: "1",
      }});
    props.onUserInputProfile(userInput);
  }

  return (
    <div class = 'page_myprofil_class'>

      <div><p class='profile_myprofile_My'>Мой профиль</p></div>

      <form class = "profil_myprofil_form" onSubmit={setDataHandler}>

        <div class = "profile_myprofile_top_container">

          <div class = "profile_myprofile_left">
            <div class='profil_myprofil_img_photo'>
              <div class='avatar_circle'>
                <svg viewBox="0 0 186 187" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect rx="93" fill="black" fill-opacity="0.12" />
                </svg>
                <p class='change_avatar_text'>Изменить аватар</p>
                <div class='avatar_stub'>

                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-25 -1 113 114" fill="none">
                    <path d="M49.9853 81H13.0147C8.9877 80.8511 5.23644 78.882 2.78546 75.6303C0.334481 72.3786 -0.56014 68.1842 0.345932 64.1925L1.30207 59.5755C2.40176 53.3255 7.68675 48.7324 13.931 48.6H49.069C55.3133 48.7324 60.5982 53.3255 61.6979 59.5755L62.6541 64.1925C63.5601 68.1842 62.6655 72.3786 60.2145 75.6303C57.7636 78.882 54.0123 80.8511 49.9853 81Z" fill="rgba(0, 0, 0, 0.56)" />
                    <path d="M33.4919 40.5H29.508C20.7071 40.5 13.5725 33.247 13.5725 24.3V13.608C13.5618 9.99569 14.9687 6.52816 17.4814 3.97383C19.994 1.41949 23.405 -0.0107386 26.9584 6.07163e-05H36.0416C39.595 -0.0107386 43.006 1.41949 45.5186 3.97383C48.0313 6.52816 49.4382 9.99569 49.4275 13.608V24.3C49.4275 28.5965 47.7486 32.7171 44.7601 35.7552C41.7716 38.7933 37.7183 40.5 33.4919 40.5Z" fill="rgba(0, 0, 0, 0.56)" />
                  </svg>
                  
                </div>
              </div>
              <div class='mobile_avatar_circle'>
{/* 
                <svg width="98" height="98" viewBox="0 0 92 92" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="92" height="92" rx="46" fill="black" fill-opacity="0.12"/>
                  <path d="M57.1641 72.4848H33.4418C30.8578 72.39 28.4508 71.1362 26.8781 69.0657C25.3054 66.9952 24.7314 64.3245 25.3128 61.7829L25.9263 58.843C26.6319 54.8634 30.0231 51.9388 34.0297 51.8545H56.5762C60.5828 51.9388 63.974 54.8634 64.6796 58.843L65.2931 61.7829C65.8745 64.3245 65.3004 66.9952 63.7278 69.0657C62.1551 71.1362 59.7481 72.39 57.1641 72.4848Z" fill="black" fill-opacity="0.56"/>
                  <path d="M46.5811 46.697H44.0248C38.3776 46.697 33.7997 42.0787 33.7997 36.3818V29.5738C33.7928 27.2737 34.6956 25.0658 36.3078 23.4393C37.9201 21.8129 40.1087 20.9022 42.3888 20.9091H48.2171C50.4972 20.9022 52.6858 21.8129 54.2981 23.4393C55.9103 25.0658 56.813 27.2737 56.8062 29.5738V36.3818C56.8062 39.1176 55.7289 41.7413 53.8114 43.6757C51.8938 45.6102 49.293 46.697 46.5811 46.697Z" fill="black" fill-opacity="0.56"/>
                </svg>
         */}
              </div>
            </div>

            <div className='profil_myprofil_edit'>
              <button>
                <div className='myprofil_edit_img'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <g opacity="0.56">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M6.49173 12.725L7.10006 9.88333C7.18863 9.48844 7.38811 9.12705 7.67506 8.84167L13.2334 3.33333C13.797 2.75915 14.5623 2.42732 15.3667 2.40833C15.9734 2.39964 16.5584 2.63364 16.9917 3.05833C17.9386 4.17705 17.8163 5.84768 16.7167 6.81667L11.1584 12.375C10.873 12.6619 10.5116 12.8614 10.1167 12.95L7.27506 13.5583H7.11673C6.90899 13.5663 6.71057 13.4718 6.58583 13.3055C6.4611 13.1391 6.42593 12.9222 6.49173 12.725ZM8.5584 9.73333C8.44164 9.84648 8.36053 9.99132 8.32506 10.15L7.91673 12.0917L9.8584 11.675C10.0171 11.6395 10.1619 11.5584 10.2751 11.4417L15.8334 5.88333C16.4423 5.39585 16.5631 4.51706 16.1084 3.88333C15.9093 3.69309 15.642 3.59098 15.3667 3.6C14.8922 3.61905 14.4438 3.82233 14.1167 4.16667L8.5584 9.73333Z" fill="black" />
                      <path d="M16.5917 9.10833C16.2484 9.11282 15.9712 9.39003 15.9667 9.73333V14.475C15.9779 15.1452 15.7195 15.7919 15.2494 16.2698C14.7793 16.7477 14.1371 17.0168 13.4667 17.0167H5.52507C4.13954 16.9895 3.02933 15.8608 3.02507 14.475V6.56667C3.04781 5.17924 4.17912 4.06648 5.56673 4.06667H10.3084C10.6536 4.06667 10.9334 3.78684 10.9334 3.44167C10.9334 3.09649 10.6536 2.81667 10.3084 2.81667H5.52507C3.44715 2.81654 1.75623 4.48888 1.7334 6.56667V14.475C1.7334 16.5691 3.43099 18.2667 5.52507 18.2667H13.4334C15.5242 18.2621 17.2167 16.5658 17.2167 14.475V9.73333C17.2122 9.39003 16.935 9.11282 16.5917 9.10833Z" fill="black" />
                    </g>
                  </svg>
                </div>
                <div className='myprofil_edit_text'>
                  <p class = "myprofil_edit_text_desc" >Редактировать профиль</p>
                  <p  class = "myprofil_edit_text_mob">Редактировать</p>
                </div>
              </button>
            </div>
          </div>

          <div class = "profile_myprofile_right">
            <div class='profil_myprofil_lastName profil_myprofil_top_right_form_block'>
              <input maxlength="25" name = "last_name" placeholder='Фамилия'></input>
            </div>
            <div class='profil_myprofil_name profil_myprofil_top_right_form_block'>
              <input maxlength="25" name="name" placeholder='Имя'></input>
            </div>
            <div class='profil_myprofil_group profil_myprofil_top_right_form_block'>
              <input maxlength="10" name = 'group' placeholder='Группа'></input>
            </div>
            <div class='profil_myprofil_school profil_myprofil_top_right_form_block'>
              <input maxlength="10" name = 'school' placeholder='Инженерная школа'></input>
            </div>
          </div>

        </div>

        <div >

          <div class='profil_myprofil_about'>
              {textarea0}
              <div class="counter">
                <span class="current">{textAreaInfo.ta0}</span>&nbsp;/
                <span class="total">500</span>
              </div>
          </div>

          <div class='profil_myprofil_exp'>
              {textarea1}
              <div class="counter">
                <span class="current">{textAreaInfo.ta1}</span>&nbsp;/
                <span class="total">250</span>
              </div>
          </div>

          <div class='profil_myprofil_skill'>
              {textarea2}
              <div class="counter">
                <span class="current">{textAreaInfo.ta2}</span>&nbsp;/
                <span class="total">250</span>
              </div>
          </div>

          <button class='profil_myprofil_save' type='submit'>Сохранить изменение</button>

        </div>

      </form>
    </div>
  )
}
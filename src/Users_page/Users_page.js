import "../UI/commonUI/flex_type_page.css"
import Navbar from "../UI/Navbar/Navbar.js";
import Header from "../UI/Header/Header.js";
import Users_main from "./main/Users_main.js";

export default function Users_page(props) {

    function scrollToTop () {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }

    return(
        <div class="main_flexBox">
            {scrollToTop()}
            <div class="top_cont_forUIpage">
                <Header autorz = {props.autorization.status} UID = {props.autorization.UID} path="/MyApplications" />
            </div>
            <div class="body_cont_forUIpage">
                <Navbar user_status={props.autorization.userStatus} />
                <Users_main autorization = { props.autorization } apiAdress = {props.apiAdress}/>
            </div>  
        </div>
    )

};
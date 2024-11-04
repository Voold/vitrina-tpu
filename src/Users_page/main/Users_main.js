import React, { useEffect, useMemo, useState} from 'react';
import User_card from "../../Page_analytics/User_card/User_card";
import Search from "../../UI/Search/Search";
import "./Users_page.css"

export default function Users_main(props) {


    const [users_Data, setUsers_Data] = useState({

      });

      // Пока что в разработке (Поиск)
    const updateSearchFieldHandler = (event) => {
        setUsers_Data((previousState) => {
        return{
            ...previousState,
            searchVal: event,
        }
        });
    }

    return(
        <div class="main_users">

            <Search updateSearchField = {updateSearchFieldHandler}/>
            
            <User_card userName={"Шахзод Фахриддинович"} isOnline={true} lastOnline = {"-"}/>
            <User_card userName={"Шахзод Фахриддинович"} isOnline={true} lastOnline = {"-"}/>
            <User_card userName={"Шахзод Фахриддинович"} isOnline={true} lastOnline = {"-"}/>
            <User_card userName={"Шахзод Фахриддинович"} isOnline={true} lastOnline = {"-"}/>           <User_card userName={"Шахзод Фахриддинович"} isOnline={true} lastOnline = {"-"}/>
            <User_card userName={"Шахзод Фахриддинович"} isOnline={true} lastOnline = {"-"}/>
            <User_card userName={"Шахзод Фахриддинович"} isOnline={true} lastOnline = {"-"}/>
            <User_card userName={"Шахзод Фахриддинович"} isOnline={true} lastOnline = {"-"}/>           <User_card userName={"Шахзод Фахриддинович"} isOnline={true} lastOnline = {"-"}/>
            <User_card userName={"Шахзод Фахриддинович"} isOnline={true} lastOnline = {"-"}/>
            <User_card userName={"Шахзод Фахриддинович"} isOnline={true} lastOnline = {"-"}/>
            <User_card userName={"Шахзод Фахриддинович"} isOnline={true} lastOnline = {"-"}/>           <User_card userName={"Шахзод Фахриддинович"} isOnline={true} lastOnline = {"-"}/>
            <User_card userName={"Шахзод Фахриддинович"} isOnline={true} lastOnline = {"-"}/>
            <User_card userName={"Шахзод Фахриддинович"} isOnline={true} lastOnline = {"-"}/>
            <User_card userName={"Шахзод Фахриддинович"} isOnline={true} lastOnline = {"-"}/>           <User_card userName={"Шахзод Фахриддинович"} isOnline={true} lastOnline = {"-"}/>
            <User_card userName={"Шахзод Фахриддинович"} isOnline={true} lastOnline = {"-"}/>
            <User_card userName={"Шахзод Фахриддинович"} isOnline={true} lastOnline = {"-"}/>
            <User_card userName={"Шахзод Фахриддинович"} isOnline={true} lastOnline = {"-"}/>           <User_card userName={"Шахзод Фахриддинович"} isOnline={true} lastOnline = {"-"}/>
            <User_card userName={"Шахзод Фахриддинович"} isOnline={true} lastOnline = {"-"}/>
            <User_card userName={"Шахзод Фахриддинович"} isOnline={true} lastOnline = {"-"}/>
            <User_card userName={"Шахзод Фахриддинович"} isOnline={true} lastOnline = {"-"}/>

        </div>
    )

};
import React, {useEffect} from "react";
import LeftNavigation from "../Menu/LeftNavigation";
import "../../Styles/Style.css"
import {HandleAccessToken} from "../../Services/Users/HandleAccessToken";


export function Header({path, setPath, menu , setMenu, loggedInUser, setLoggedInUser}) {
    useEffect(async ()=>{
        if (!loggedInUser) {
            const user = await HandleAccessToken();
            console.log(user);
            setLoggedInUser(user);
        }
    },[])

    return (
        <>
            <div style={{backgroundColor:'rgba(33,52,50,0.28)'}}>
            <LeftNavigation path={path} setPath={setPath} menu={menu} setMenu={setMenu} loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser}></LeftNavigation>
            </div>
        </>
    )
}

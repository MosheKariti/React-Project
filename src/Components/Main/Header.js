import React, {useEffect} from "react";
import LeftNavigation from "../Menu/LeftNavigation";
import {HandleAccessToken} from "../../Services/Users/HandleAccessToken";


export function Header({path, setPath, menu , setMenu, loggedInUser, setLoggedInUser}) {
    useEffect(async ()=>{
        if (!loggedInUser) {
            const user = await HandleAccessToken();
            setLoggedInUser(user);
        }
    },[])

    return (
        <>
            <div id={'header'}>
            <LeftNavigation path={path} setPath={setPath} menu={menu} setMenu={setMenu} loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser}></LeftNavigation>
            </div>
        </>
    )
}

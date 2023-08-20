import React from "react";
import LeftNavigation from "../Menu/LeftNavigation";
import "../../Styles/Style.css"


export function Header({path, setPath, menu , setMenu, loggedInUser, setLoggedInUser}) {

    return (
        <>
            <div style={{backgroundColor:'rgba(33,52,50,0.28)'}}>
            <LeftNavigation path={path} setPath={setPath} menu={menu} setMenu={setMenu} loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser}></LeftNavigation>
            </div>
        </>
    )
}

import React from "react";
import "../../Styles/Style.css"


export function LoggedInUser({loggedInUser}) {
    return (
        <>
            <div className={'logged-in-user'}>
                User:
                {' ' + loggedInUser.name}

            </div>
        </>
    )
}

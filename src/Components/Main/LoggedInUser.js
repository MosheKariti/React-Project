import "../../Styles/Style.css"
import { HandleAccessToken } from "../../Services/Users/HandleAccessToken";
import Button from "@mui/material/Button";
import { BsPersonSquare } from "react-icons/bs"
import {useState} from "react";
import {RenderUserDetails} from "./RenderUserDetails";

export function LoggedInUser({loggedInUser}) {
    const [isEditUser,setIsEditUser] = useState(false);
    function handelEditUser() {
        setIsEditUser(!isEditUser);
        console.log(loggedInUser);
    }
    return (
        <>
            {isEditUser &&
            <>
            <div className={"modal"} id={'myModal'}>
                <div className={"modal-dialog-centered"}>
                    <div className={"modal-content"}>
                        <div>
                            <RenderUserDetails loggedInUser={loggedInUser}></RenderUserDetails>
                        </div>
                        <Button onClick={()=>setIsEditUser(false)}>Close</Button>
                    </div>
                </div>
            </div>
            </>
            }
            {loggedInUser &&
                <>
                    <div style={{cursor:'pointer'}} className={'p-2 logged-in-user'}>
                        <BsPersonSquare onClick={handelEditUser} size={30}/>
                    </div>
                    <div className={'logged-in-user'}>
                            {loggedInUser.name.first}
                    </div>
                </>
            }
        </>
    )
}

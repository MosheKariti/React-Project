import "../../Styles/Style.css"
import { HandleAccessToken } from "../../Services/Users/HandleAccessToken";


export function LoggedInUser({loggedInUser}) {
    return (
        <>
            {loggedInUser &&
            <div className={'logged-in-user'}>
                    {'User: ' + loggedInUser.name.first}
            </div>
            }
        </>
    )
}

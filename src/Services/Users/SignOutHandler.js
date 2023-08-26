import { guestMenu } from "../Menu/MenusHandler";

export function SignOutHandler(setMenu,setLoggedInUser) {
        setLoggedInUser(null);
        setMenu(guestMenu);
        localStorage.removeItem('accessToken');
}

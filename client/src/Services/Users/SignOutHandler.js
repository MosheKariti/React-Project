import { guestMenu } from "../Menu/MenusHandler";

export function SignOutHandler(setMenu, setLoggedInUser) {
        setMenu(guestMenu);
        localStorage.removeItem('loggedInUser');
        setLoggedInUser(null);
}

import { businessMenu, guestMenu, simpleMenu } from "../Services/Menu/MenusHandler";
export function Deprecated_MenuToDisplay(loggedInUser) {
    if (loggedInUser) {
        if (!loggedInUser.isBusiness) {
            return simpleMenu;
        } else if (loggedInUser.isBusiness) {
            return businessMenu;
        }
    }  else {
        return guestMenu;
    }
}

import { businessMenu, guestMenu, simpleMenu } from "./MenusHandler";
export function MenuToDisplay(loggedInUser) {
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

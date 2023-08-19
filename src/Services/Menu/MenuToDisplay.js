import { businessMenu, guestMenu, simpleMenu } from "./MenusHandler";
export function MenuToDisplay(loggedInUser) {
    if (loggedInUser) {
        if (loggedInUser.type === 'simple') {
            return simpleMenu;
        } else if (loggedInUser.type === 'business') {
            return businessMenu;
        }
    }  else {
        return guestMenu;
    }
}

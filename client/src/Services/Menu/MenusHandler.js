import React from "react";
import ROUTES from "../../RouterModel";
import { FcAbout } from "react-icons/fc";
import { BiRegistered, BiSolidRegistered } from "react-icons/bi";
import { PiSignInFill } from "react-icons/pi";
import { AiFillHome } from "react-icons/ai";
import { PiCardsBold } from "react-icons/pi"

const home = {
    to: ROUTES.HOME,
    label: "Home",
    icon: <AiFillHome size={20} color={"black"} title={"Home"}/>,
}
const about = {
    to: ROUTES.ABOUT,
    label: "About",
    icon: <FcAbout size={25} title={"About"}/>
}
const registrationSimple = {
    to: ROUTES.REGISTRATIONSIMPLE,
    label: "Registration Simple",
    icon: <BiRegistered size={25} color={"black"} title={"Registration Simple"}/>
}
const registrationBusiness = {
    to: ROUTES.REGISTRATIONBUSINESS,
    label: "Registration Business",
    icon: <BiSolidRegistered size={25} color={"black"} title={"Registration Business"}/>
}
const signIn = {
    to: ROUTES.SIGNIN,
    label: "Sign In",
    icon: <PiSignInFill size={25} color={"black"} title={"Sign In"}/>
}
const signOut = {
    to: ROUTES.HOME,
    label: "Sign Out",
    icon: <PiSignInFill size={25} color={"black"} title={"Sign Out"}/>
}
const myCards = {
    to: ROUTES.MYCARDS,
    label: "My Cards",
    icon: <PiCardsBold size={25} color={"black"} title={"My Cards"}/>
}

export const guestMenu = [home,about,registrationSimple,registrationBusiness,signIn];
export const simpleMenu = [home,about,signOut];
export const businessMenu = [home,about,myCards,signOut];

import React from "react";
import ROUTES from "../../RouterModel";
import { FcAbout } from "react-icons/fc";
import { BiRegistered, BiSolidRegistered } from "react-icons/bi";
import { PiSignInFill } from "react-icons/pi";
import { AiFillHome } from "react-icons/ai";
import { PiCardsBold } from "react-icons/pi"
import { MdOutlineFavorite } from "react-icons/md"


const home = {
    to: ROUTES.HOME,
    label: "Home",
    icon: <AiFillHome size={20} color={"black"} title={"Home"}/>
}
const cards = {
    to: ROUTES.CARDS,
    label: "Cards",
    icon: <PiCardsBold size={25} color={"black"} title={"Cards"}/>
}
const about = {
    to: ROUTES.ABOUT,
    label: "About",
    icon: <FcAbout size={25} title={"About"}/>
}
const registration = {
    to: ROUTES.REGISTRATION,
    label: "Registration",
    icon: <BiSolidRegistered size={25} color={"black"} title={"Registration"}/>
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
const favCards = {
    to: ROUTES.FAVCARDS,
    label: "Favorite Cards",
    icon: <MdOutlineFavorite size={25} color={"black"} title={"Favorite Cards"}/>
}

export const guestMenu = [home,cards,about,registration,signIn];
export const simpleMenu = [home,favCards,cards,about,signOut];
export const businessMenu = [home,myCards,favCards,about,signOut];

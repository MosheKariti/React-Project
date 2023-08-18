import React from "react";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "../Pages/HomePage";
import { AboutPage } from "../Pages/AboutPage";
import { SignInPage } from "../Pages/SignInPage";
import { RegistrationSimplePage } from "../Pages/RegistrationSimplePage";
import { RegistrationBusinessPage } from "../Pages/RegistrationBusinessPage";
import ROUTES from "../../RouterModel";
import {MyCardsPage} from "../Pages/MyCardsPage";

function Router({setMenu,setLoggedInUser, loggedInUser}) {
    return (
        <Routes>
            <Route path={ROUTES.HOME} element={<HomePage/>}/>
            <Route path={ROUTES.ABOUT} element={<AboutPage/>}/>
            <Route path={ROUTES.SIGNIN} element={<SignInPage setMenu={setMenu} setLoggedInUser={setLoggedInUser}/>}/>
            <Route path={ROUTES.REGISTRATIONSIMPLE} element={<RegistrationSimplePage/>}/>
            <Route path={ROUTES.REGISTRATIONBUSINESS} element={<RegistrationBusinessPage/>}/>
            <Route path={ROUTES.MYCARDS} element={<MyCardsPage loggedInUser={loggedInUser}/>}/>


            <Route path="*" element={<HomePage/>}/>

        </Routes>
        );
};

export default Router;
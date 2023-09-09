import React from "react";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "../Pages/HomePage";
import { AboutPage } from "../Pages/AboutPage";
import { SignInPage } from "../Pages/SignInPage";
import { RegistrationPage } from "../Pages/RegistrationPage";
import ROUTES from "./RouterModel";
import {MyCardsPage} from "../Pages/MyCardsPage";
import {CardsPage} from "../Pages/CardsPage";
import {FavCardsPage} from "../Pages/FavCardsPage";
import {CRMAdminPage} from "../Pages/CRMAdminPage";


function Router({setMenu,setLoggedInUser, loggedInUser, setPath}) {
    return (
        <Routes>
            <Route path={ROUTES.HOME} element={<HomePage/>}/>
            <Route path={ROUTES.CARDS} element={<CardsPage loggedInUser={loggedInUser}/>}/>
            <Route path={ROUTES.ABOUT} element={<AboutPage/>}/>
            <Route path={ROUTES.SIGNIN} element={<SignInPage setPath={setPath} setMenu={setMenu} setLoggedInUser={setLoggedInUser}/>}/>
            <Route path={ROUTES.REGISTRATION} element={<RegistrationPage/>}/>
            <Route path={ROUTES.MYCARDS} element={<MyCardsPage loggedInUser={loggedInUser}/>}/>
            <Route path={ROUTES.FAVCARDS} element={<FavCardsPage loggedInUser={loggedInUser}/>}/>
            <Route path={ROUTES.CRM} element={<CRMAdminPage/>}/>

            <Route path="*" element={<HomePage/>}/>

        </Routes>
        );
};

export default Router;
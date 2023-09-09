import React from "react";
import Box from '@mui/material/Box';
import NavItem from "./NavItem";
import {LoggedInUser} from "../Main/LoggedInUser";
import {adminMenu, businessMenu, guestMenu} from "../../Services/Menu/MenusHandler";

function LeftNavigation({path, setPath, menu, setMenu, loggedInUser, setLoggedInUser}) {
    if (loggedInUser) {
        if (loggedInUser.isAdmin) {
            setMenu(adminMenu);
        } else if (loggedInUser.isBusiness) {
            setMenu(businessMenu);
        }
    } else {
        setMenu(guestMenu)
    }
    return (
        <>
            <div className={'d-inline-flex'} style={{width:'100%'}}>
                <div className={'col-8'} style={{paddingLeft:'55px'}}>
                <Box>
                    <Box sx={{display: {xs: "none", md: "inline-flex"}}}>
                        {menu.map((x,index) => (
                                <>
                                <NavItem key={index} path={path} setPath={setPath} label={x.label} to={x.to} icon={x.icon} setMenu={setMenu} setLoggedInUser={setLoggedInUser}/>
                                </>
                            )
                        )}
                    </Box>
                </Box>
                </div>
                <div className={'d-flex col-4 justify-content-end'} style={{paddingRight:'300px'}}>
                    {loggedInUser && <LoggedInUser loggedInUser={loggedInUser}></LoggedInUser>}
                </div>
            </div>
        </>
    );
};
export default LeftNavigation;


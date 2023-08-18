import React from "react";
import Typography from "@mui/material/Typography";
import NavBarLink from "../Components/Menu/NavBarLink";
import ROUTES from "../RouterModel";

const Logo = () => {
    return (
        <NavBarLink to={ROUTES.HOME}>
            <Typography
            variant="h4"
            sx={{
                display: { xs: "none", md: "inline-flex"},
                marginRight: 2,
                fontFamily: "fantasy"
            }}>
                BCCard
            </Typography>
        </NavBarLink>
    );
};

export default Logo;



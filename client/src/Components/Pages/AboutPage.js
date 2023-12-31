import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import {AboutPageHeader} from "../Main/AboutPageHeader";
import {CardsRender} from "../Cards/CardsRender";
import Typography from "@mui/material/Typography";

export function AboutPage() {
     const exampleCard = [
        {
            businessName: "Business Name",
            businessDescription: "Description",
            businessAddress: "My Business address",
            businessPhone: "My Business phone",
            businessImage: "https://thumbs.dreamstime.com/b/small-business-wood-type-text-vintage-letterpress-ceramic-tile-background-32608566.jpg"
        }]
            return (
        <>
            <Container maxWidth="lg">
                <AboutPageHeader/>
                <Grid container spacing={4}>
                    <Grid item xs={12} md={8} alignSelf="center">
                        <Typography variant="body" component="p" fontSize="28px">
                        On this site you can register as a business user and create business
                        cards for your business. Website users will have the option to add your
                        business to their favorites and contact you.
                        </Typography>
                    </Grid>
                    <Grid
                        item
                        xs={4}
                        sx={{
                            display: { md: "flex", xs: "none" },
                            justifyContent: "center",
                        }}>
                        <CardsRender cardsArray={exampleCard} isEditMode={true}></CardsRender>
                    </Grid>
                </Grid>
            </Container>
            </>
    );
};
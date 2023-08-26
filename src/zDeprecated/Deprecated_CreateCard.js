import Typography from "@mui/material/Typography";
import React from "react";
import {createTheme, ThemeProvider} from "@mui/material/styles";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { PiCardsBold } from "react-icons/pi"
import { Deprecated_CreateCardHandler } from "./Deprecated_CreateCardHandler";

const defaultTheme = createTheme();
export function Deprecated_CreateCard() {
    return (
        <>
            <>
                <ThemeProvider theme={defaultTheme}>
                    <Container component="main" maxWidth="xs">
                        <Box
                            sx={{
                                marginTop: 8,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                            }}
                        >
                            <PiCardsBold size={60} color={"black"}/>
                            <Typography component="h1" variant="h5" mt={1}>
                                New Business Card
                            </Typography>
                            <Box component="form" onSubmit={Deprecated_CreateCardHandler} noValidate sx={{ mt: 1 }}>
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="title"
                                    label="Business Name"
                                    name="title"
                                />
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    name="businessDescription"
                                    label="Description"
                                    type="text"
                                    id="businessDescription"
                                />
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    name="businessAddress"
                                    label="Address"
                                    type="text"
                                    id="businessAddress"
                                />
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    name="businessPhone"
                                    label="Phone"
                                    type="number"
                                    id="businessPhone"
                                />
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    name="businessImage"
                                    label="Image URL"
                                    type="url"
                                    id="businessImage"
                                />
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    sx={{ mt: 3, mb: 2}}
                                >
                                    <Typography style={{textTransform: 'none'}}>Create Card</Typography>
                                </Button>
                            </Box>
                        </Box>
                    </Container>
                </ThemeProvider>
            </>
        </>
    )
}
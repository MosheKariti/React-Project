import React from "react";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { BiSolidRegistered } from "react-icons/bi"
import { Deprecated_RegistrationHandler } from "./Deprecated_RegistrationHandler";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";

const defaultTheme = createTheme();
export function Deprecated_RegistrationBusinessPage() {
    const navigate = useNavigate();
    function handleRegister(event) {
        const validation = Deprecated_RegistrationHandler(event, 'business');
        if (validation) {
            toast.success('RegistrationPage Success');
            setTimeout(()=>navigate('/sign-in', { replace: true }),2000)
        } else {
            toast.error('RegistrationPage Failed');
        }
    }
    return (
        <>
        <ToastContainer
            position="top-center"
            text-center
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
        />
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
                    <BiSolidRegistered size={50} style={{ margin:"2", marginTop:"5" }} />
                    <Typography component="h1" variant="h5" mt={1}>
                        Registration Business
                    </Typography>
                    <Box component={"form"} onSubmit={handleRegister} noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="name"
                            label="Full Name"
                            type="text"
                            id="name"
                            autoFocus
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="password"
                            label="Password"
                            name="password"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt:3 , mb:2 }}
                        >
                            <Typography style={{textTransform: 'none'}}>Register</Typography>
                        </Button>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
        </>
    )
}
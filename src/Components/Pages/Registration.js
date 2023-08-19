import React, {useEffect, useState} from "react";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { BiSolidRegistered } from "react-icons/bi"
import { NewUserValidator } from "../../Services/Users/NewUserValidator";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import {validPassword} from "./Regex";
import axios from "axios";
import {createUser} from "../../Services/Axios/axios";


const defaultTheme = createTheme();
export function Registration({setPath}) {
    const navigate = useNavigate();
    const [isBusiness,setBusiness] = useState(false);
    const [isNameError,setIsNameError] = useState(false);
    const [isEmailError,setIsEmailError] = useState(false);
    const [isPhoneError,setIsPhoneError] = useState(false);
    const [isPasswordError,setIsPasswordError] = useState(false);

    async function handleRegister(event) {
        const validatorResponse = NewUserValidator(event,isBusiness,setIsNameError,setIsEmailError,setIsPhoneError,setIsPasswordError);
        const user = validatorResponse.user;
        const isValid = validatorResponse.valid;
        if (isValid) {
            await createUser(user);
            toast.success('Registration Success');
            setTimeout(()=>navigate('/sign-in', { replace: true }),2000)
        } else {
            toast.error('Registration Failed');
        }

        // function saveToServer(user) {
        //     useEffect(() => {
        //         axios.post('http://localhost:8181/users', {
        //             name: {
        //                 first: user.name.first,
        //                 middle: user.name.middle,
        //                 last: user.name.last
        //             },
        //             phone: user.phone,
        //             email: user.email,
        //             password: user.password,
        //             image: {
        //                 url: user.image,
        //                 alt: 'business image'
        //             },
        //             address: {
        //                 state: user.address.state,
        //                 country: user.address.country,
        //                 city: user.address.city,
        //                 street: user.address.street,
        //                 houseNumber: user.address.houseNumber,
        //                 zip: user.address.zip
        //             },
        //             isBusiness: false
        //         })
        //             .then(function (response) {
        //                 console.log(response);
        //             })
        //             .catch(function (error) {
        //                 console.log(error);
        //             })},[]);
        // }
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
                        Registration
                    </Typography>
                    <Box component={"form"} onSubmit={handleRegister} noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="firstName"
                            label="First Name"
                            type="text"
                            id="firstName"
                            style={{marginBottom:'0'}}
                            error={isNameError}
                        />
                        {isNameError && <span className={"text-danger m-lg-3"}>'first' length must be at least 2 characters long</span>}
                        <TextField
                            margin="normal"
                            fullWidth
                            name="middleName"
                            label="Middle Name"
                            type="text"
                            id="middleName"
                            autoFocus
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="lastName"
                            label="Last Name"
                            type="text"
                            id="lastName"
                            autoFocus
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="phone"
                            label="Phone"
                            type="number"
                            id="phone"
                            style={{marginBottom:'0'}}
                            error={isPhoneError}
                        />
                        {isPhoneError && <span className={"text-danger m-lg-3"}>user 'phone' must be a valid phone number</span>}
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="email"
                            label="Email"
                            type="email"
                            id="email"
                            style={{marginBottom:'0'}}
                            error={isEmailError}
                        />
                        {isEmailError && <span className={"text-danger m-lg-3"}>user 'mail must be a valid mail</span>}
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="text"
                            id="password"
                            style={{marginBottom:'0'}}
                            error={isPasswordError}
                        />
                        {isPasswordError && <span className={"text-danger m-lg-3"}>user 'password' must be at least nine characters long and contain an uppercase letter,a lowercase letter, a number and one of the following characters !@#$%^&*-</span>}
                        <TextField
                            margin="normal"
                            fullWidth
                            name="image"
                            label="Image"
                            type="text"
                            id="image"
                            autoFocus
                        />
                        <TextField
                            margin="normal"
                            fullWidth
                            name="state"
                            label="State"
                            type="text"
                            id="state"
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="country"
                            label="Country"
                            type="text"
                            id="country"
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="city"
                            label="City"
                            type="text"
                            id="city"
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="street"
                            label="Street"
                            type="text"
                            id="street"
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="houseNumber"
                            label="House Number"
                            type="number"
                            id="houseNumber"
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="zip"
                            label="Zip"
                            type="number"
                            id="zip"
                        />
                        <Checkbox
                            color="primary"
                            inputProps={{ 'aria-label': 'primary checkbox' }}
                            onChange={()=>setBusiness(!isBusiness)}
                        />
                        <span>Register as business</span>

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
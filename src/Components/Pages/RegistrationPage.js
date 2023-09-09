import React, {useState} from "react";
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
import {createUser} from "../../Services/Axios/axios";
import 'react-toastify/dist/ReactToastify.css';

const defaultTheme = createTheme();
export function RegistrationPage() {
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
            try {
                await createUser(user);
                toast.success('RegistrationPage Success');
                setTimeout(()=>navigate('/sign-in', { replace: true }),2000)
            } catch (error) {
                toast.error('RegistrationPage Failed');
            }
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
        <ThemeProvider theme={defaultTheme} style={{}}>
            <Container component="main" maxWidth="xl">
                <Box
                    sx={{
                        marginTop: 3,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <BiSolidRegistered size={50}/>
                    <Typography component="h1" variant="h5" mt={1}>
                        Registration
                    </Typography>
                    <Box
                        component={"form"}
                        noValidate
                        sx={{ mt: 2 ,'& .MuiTextField-root': { mt: 2, mb:0, width: '50ch' }}}
                        onSubmit={handleRegister}
                    >
                        <div style={{display:'flex'}}>
                        <div className={'form-columns'}>
                            <TextField
                                autoFocus
                                margin="normal"
                                required
                                fullWidth
                                name="firstName"
                                label="First Name"
                                type="text"
                                id="firstName"
                                error={isNameError}
                            />
                            {isNameError && <label className={"text-danger mt-0"}>first length must be at least 2 characters long</label>}
                            <TextField
                                margin="normal"
                                fullWidth
                                name="middleName"
                                label="Middle Name"
                                type="text"
                                id="middleName"
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="lastName"
                                label="Last Name"
                                type="text"
                                id="lastName"
                            />

                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="phone"
                            label="Phone"
                            type="number"
                            id="phone"
                            error={isPhoneError}
                        />
                        {isPhoneError && <label className={"text-danger mt-0"}>user 'phone' must be a valid phone number</label>}
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="email"
                            label="Email"
                            type="email"
                            id="email"
                            error={isEmailError}
                        />
                        {isEmailError && <label className={"text-danger mt-0"}>user 'mail must be a valid mail</label>}
                            <TextField
                                margin="normal"
                                fullWidth
                                name="image"
                                label="Image"
                                type="text"
                                id="image"
                            />
                        </div>
                        <div className={'form-columns'}>
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
                        </div>
                            <div className={'form-columns'}>
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="text"
                                    id="password"
                                    error={isPasswordError}
                                />
                                {isPasswordError && <label className={"text-danger mt-0"}>user 'password' must be at least nine characters long and contain an uppercase letter,a lowercase letter, a number and one of the following characters !@#$%^&*-</label>}
                            </div >
                        </div>
                        <div>
                            <div className={"mt-3"}>
                                <Checkbox
                                    color="primary"
                                    inputProps={{ 'aria-label': 'primary checkbox' }}
                                    onChange={()=>setBusiness(!isBusiness)}
                                    size='large'
                                />
                                <label className={"fs-5"}>Register as business</label>
                            </div>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt:3 , mb:2 }}
                            >
                                <Typography style={{textTransform: 'none'}}>Register</Typography>
                            </Button>
                        </div>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
        </>
    )
}
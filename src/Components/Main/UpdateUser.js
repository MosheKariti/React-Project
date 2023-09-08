import React, {useState} from "react";
import {toast, ToastContainer} from "react-toastify";
import {createTheme, ThemeProvider} from "@mui/material/styles";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { BsPersonSquare } from "react-icons/bs"
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import {NewUserValidator} from "../../Services/Users/NewUserValidator";
import {createUser, updateUser} from "../../Services/Axios/axios";
import {UpdateUserValidator} from "../../Services/Users/UpdateUserValidator";
const defaultTheme = createTheme();

export function UpdateUser({loggedInUser,setIsEditUser}) {
    const [isEmailError,setIsEmailError] = useState(false);
    const [isNameError,setIsNameError] = useState(false);
    const [isPhoneError,setIsPhoneError] = useState(false);
    const [isCountryError,setIsCountryError] = useState(false);
    const [isCityError,setIsCityError] = useState(false);
    const [isStreetError,setIsStreetError] = useState(false);
    const [isHouseNumberError,setIsHouseNumberError] = useState(false);
    const [isZipError,setIsZipError] = useState(false);
    async function handleUseUpdate(event) {
        const validatorResponse = UpdateUserValidator(loggedInUser,event,setIsNameError,setIsEmailError,setIsPhoneError,setIsCountryError,setIsCityError,setIsStreetError,setIsHouseNumberError,setIsZipError);
        const user = validatorResponse.user;
        const isValid = validatorResponse.valid;
        if (isValid) {
            try {
                await updateUser(user);
                toast.success('User has been updated');
                setIsEditUser(false);
            } catch (error) {
                toast.error('Update Failed');
            }
        } else {
            toast.error('Update Failed');
        }
    }
    const initialFieldValues = {
       firstName: loggedInUser.name.first,
       middleName: loggedInUser.name.middle,
       lastName: loggedInUser.name.last,
       phone: loggedInUser.phone,
       email: loggedInUser.email,
       image: loggedInUser.image.url,
       state: loggedInUser.address.state,
       country: loggedInUser.address.country,
       city: loggedInUser.address.city,
       street: loggedInUser.address.street,
       houseNumber: loggedInUser.address.houseNumber,
       zip: loggedInUser.address.zip
   }
    const formColumnsStyle = {
        display: 'flex',
        flexDirection: 'column',
        marginRight: '20px', // Adjust spacing between columns
        maxWidth:'450px',
        flex: 1,
    }
    const [fieldValues, setFieldValues] = useState(initialFieldValues);
    function handleInputChange(fieldName, value) {
        setFieldValues(prevValues => ({
            ...prevValues,
            [fieldName]: value,
        }));
    }
    const fields = [
        {required: true, name:'firstName',label:'First Name',type:'text',id:'firstName',error:isNameError,validationError:'Name is Required',value:fieldValues.firstName},
        {required: false, name:'middleName',label:'Middle Name',type:'text',id:'middleName',value:fieldValues.middleName},
        {required: true, name:'lastName',label:'Last Name',type:'text',id:'lastName',error:isNameError,validationError:'Name is Required',value:fieldValues.lastName},
        {required: true, name:'phone',label:'Phone',type:'number',id:'phone',error:isPhoneError,validationError:'Phone not valid',value:fieldValues.phone},
        {required: true, name:'email',label:'Email',type:'email',id:'email',error:isEmailError,validationError:'Email not valid',value:fieldValues.email},
        {required: false, name:'image',label:'Image',type:'text',id:'image',value:fieldValues.image},
        {required: false, name:'state',label:'State',type:'text',id:'state',value:fieldValues.state},
        {required: true, name:'country',label:'Country',type:'text',id:'country',error:isCountryError,validationError:'Country not valid',value:fieldValues.country},
        {required: true, name:'city',label:'City',type:'text',id:'city',error:isCityError,validationError:'City not valid',value:fieldValues.city},
        {required: true, name:'street',label:'Street',type:'text',id:'street',error:isStreetError,validationError:'Street not valid',value:fieldValues.street},
        {required: true, name:'houseNumber',label:'House NUmber',type:'number',id:'houseNumber',error:isHouseNumberError,validationError:'House Number not valid',value:fieldValues.houseNumber},
        {required: true, name:'zip',label:'Zip',type:'number',id:'zip',error:isZipError,validationError:'Zip not valid',value:fieldValues.zip}
    ]
    const firstColumn = fields.slice(0,7);
    const secondColumn = fields.slice(7,13);

    return <>
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
                    <BsPersonSquare size={50} style={{ margin:"2", marginTop:"5"}} />
                    <Typography component="h1" variant="h5" mt={1} style={{marginBottom:'30px'}} >
                       Update Details
                    </Typography>
                    <Box
                        component={"form"}
                        noValidate
                        sx={{ mt: 2 ,'& .MuiTextField-root': { mt: 2, mb:0, width: '50ch' }}}
                        onSubmit={handleUseUpdate}
                    >
                        <div style={{display:'flex'}}>
                            <div style={formColumnsStyle}>
                                {firstColumn.map((field) =>(
                                    <>
                                        <TextField
                                            margin="normal"
                                            fullWidth
                                            required={field.required}
                                            name={field.name}
                                            label={field.label}
                                            type={field.type}
                                            id={field.id}
                                            onChange={e => handleInputChange(field.name, e.target.value)}
                                            value={field.value}
                                            error={field.error}
                                        />
                                        {field.error && <label className={"text-danger mt-0"}>{field.validationError}</label>}
                                    </>
                                ))}

                            </div>
                            <div style={formColumnsStyle}>
                                {secondColumn.map((field) =>(
                                    <>
                                        <TextField
                                            margin="normal"
                                            fullWidth
                                            required={field.required}
                                            name={field.name}
                                            label={field.label}
                                            type={field.type}
                                            id={field.id}
                                            onChange={e => handleInputChange(field.name, e.target.value)}
                                            value={field.value}
                                            error={field.error}
                                        />
                                        {field.error && <label className={"text-danger mt-0"}>{field.validationError}</label>}
                                    </>
                                ))}
                            </div>
                        </div>
                        <div>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt:3 , mb:2 }}
                            >
                                <Typography style={{textTransform: 'none'}}>Update</Typography>
                            </Button>
                        </div>
                    </Box>

                </Box>
            </Container>
        </ThemeProvider>
    </>
}
import React, {useState} from "react";
import {ToastContainer} from "react-toastify";
import {createTheme, ThemeProvider} from "@mui/material/styles";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { BsPersonSquare } from "react-icons/bs"
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
const defaultTheme = createTheme();

export function RenderUserDetails({loggedInUser}) {
    const [isNameError,setIsNameError] = useState(false);
    const [isEmailError,setIsEmailError] = useState(false);
    const [isPhoneError,setIsPhoneError] = useState(false);
    const [isPasswordError,setIsPasswordError] = useState(false);
    const [isCountryError,setIsCountryError] = useState(false);
    const [isCityError,setIsCityError] = useState(false);
    const [isStreetError,setIsStreetError] = useState(false);
    const [isHouseNumberError,setIsHouseNumberError] = useState(false);
    const [isZipError,setIsZipError] = useState(false);

    const formColumnsStyle = {
        display: 'flex',
        flexDirection: 'column',
        marginRight: '20px', // Adjust spacing between columns
        maxWidth:'450px',
        flex: 1,
    }
    const [initialValue,setInitialValue] = useState([
        {name: {
            first: loggedInUser.name.first,
            middle: loggedInUser.name.middle,
            last: loggedInUser.name.last
            }},
        {phone: loggedInUser.phone},
        {email: loggedInUser.email},
        {password: loggedInUser.password},
        {image: loggedInUser.image.url},
        {address: {
            state: loggedInUser.address.state,
            country: loggedInUser.address.country,
            city: loggedInUser.address.city,
            street: loggedInUser.address.street,
            houseNumber: loggedInUser.address.houseNumber,
            zip: loggedInUser.address.zip,
            isBusiness: loggedInUser.isBusiness
            }}
    ]);
    function handleInputChange(event,index) {
        const copyArray = [...initialValue];
        copyArray[index][event.target.id] = event.target.value;
        console.log(copyArray);
        setInitialValue(copyArray);
    }
    const fields = [
        {required: true, name:'firstName',label:'First Name',type:'text',id:'firstName',error:isNameError,validationError:'Name is Required',value:initialValue[0].name.first, index:0},
        {required: false, name:'middleName',label:'Middle Name',type:'text',id:'middleName',value:initialValue[0].name.middle, index: 1},
        {required: true, name:'lastName',label:'Last Name',type:'text',id:'lastName',error:isNameError,validationError:'Name is Required',value:initialValue[0].name.last, index: 2},
        {required: true, name:'phone',label:'Phone',type:'number',id:'phone',error:isPhoneError,validationError:'Phone not valid',value:initialValue[1].phone, index: 3},
        {required: true, name:'email',label:'Email',type:'email',id:'email',error:isEmailError,validationError:'Email not valid',value:initialValue[2].email, index: 4},
        {required: true, name:'password',label:'Password',type:'number',id:'password',error:isPasswordError,validationError:'Password not valid',value:initialValue[3].password, index: 5},
        {required: false, name:'image',label:'Image',type:'text',id:'image',value:initialValue[4].image, index: 6},
        {required: false, name:'state',label:'State',type:'text',id:'state',value:initialValue[5].address.state, index: 7},
        {required: true, name:'country',label:'Country',type:'text',id:'country',error:isCountryError,validationError:'Country not valid',value:initialValue[5].address.country, index: 8},
        {required: true, name:'city',label:'City',type:'text',id:'city',error:isCityError,validationError:'City not valid',value:initialValue[5].address.city, index: 9},
        {required: true, name:'street',label:'Street',type:'text',id:'street',error:isStreetError,validationError:'Street not valid',value:initialValue[5].address.street, index: 10},
        {required: true, name:'houseNumber',label:'House NUmber',type:'number',id:'houseNumber',error:isHouseNumberError,validationError:'House Number not valid',value:initialValue[5].address.houseNumber, index: 11},
        {required: true, name:'zip',label:'Zip',type:'number',id:'zip',error:isZipError,validationError:'Zip not valid',value:initialValue[5].address.zip, index: 12}
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
                        // onSubmit={handleSubmit}
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
                                            onChange={(event)=>handleInputChange(event,field.index)}
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
                                            onChange={(event)=>handleInputChange(event,field.index)}
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
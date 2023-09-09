import {toast, ToastContainer} from "react-toastify";
import {createTheme, ThemeProvider} from "@mui/material/styles";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import {PiCardsBold} from "react-icons/pi";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import React, {useState} from "react";
import {createCard, updateCard} from "../../Services/Axios/axios";
import {NewCardValidator} from "../../Services/Cards/NewCardValidator";
const defaultTheme = createTheme();

export function CardForm({cardToEdit,setPageState, formMode}) {
    const cardToEditId = cardToEdit ? cardToEdit._id : undefined;
    const [isTitleError,setIsTitleError] = useState(false);
    const [isSubtitleError,setIsSubtitleError] = useState(false);
    const [isDescriptionError,setIsDescriptionError] = useState(false);
    const [isPhoneError,setIsPhoneError] = useState(false);
    const [isEmailError,setIsEmailError] = useState(false);
    const [isCountryError,setIsCountryError] = useState(false);
    const [isCityError,setIsCityError] = useState(false);
    const [isStreetError,setIsStreetError] = useState(false);
    const [isHouseNumberError,setIsHouseNumberError] = useState(false);

    const formColumnsStyle = {
        display: 'flex',
        flexDirection: 'column',
        marginRight: '20px', // Adjust spacing between columns
        maxWidth:'450px',
        flex: 1,
    }

    const [initialValue,setInitialValue] = useState([
        {title: formMode === 'edit' ? cardToEdit.title : null},
        {subtitle: formMode === 'edit' ?  cardToEdit.subtitle : null},
        {description: formMode === 'edit' ? cardToEdit.description : null},
        {phone: formMode === 'edit' ? cardToEdit.phone : null},
        {email: formMode === 'edit' ? cardToEdit.email : null},
        {web: formMode === 'edit' ? cardToEdit.web : null},
        {image: formMode === 'edit' ? cardToEdit.image.url : null},
        {state: formMode === 'edit' ? cardToEdit.address.state : null},
        {country: formMode === 'edit' ? cardToEdit.address.country : null},
        {city: formMode === 'edit' ? cardToEdit.address.city : null},
        {street: formMode === 'edit' ? cardToEdit.address.street : null},
        {houseNumber: formMode === 'edit' ? cardToEdit.address.houseNumber : null},
        {zip: formMode === 'edit' ? cardToEdit.address.zip : null}
    ]);
    function handleInputChange(event,index) {
        const copyArray = [...initialValue];
        copyArray[index][event.target.id] = event.target.value;
        setInitialValue(copyArray);
    }

    const fields = [
        {required: true, name:'title',label:'Title',type:'text',id:'title',error:isTitleError,validationError:'Title is Required',value:initialValue[0].title, index:0},
        {required: true, name:'subtitle',label:'Subtitle',type:'text',id:'subtitle',error:isSubtitleError,validationError:'Subtitle is Required',value:initialValue[1].subtitle, index:1},
        {required: true, name:'description',label:'Description',type:'text',id:'description',error:isDescriptionError,validationError:'Description is Required',value:initialValue[2].description, index:2},
        {required: true, name:'phone',label:'Phone',type:'number',id:'phone',error:isPhoneError,validationError:'Phone is Required',value:initialValue[3].phone, index:3},
        {required: true, name:'email',label:'Email',type:'email',id:'email',error:isEmailError,validationError:'Email is Required',value:initialValue[4].email, index:4},
        {required: false, name:'web',label:'Web',type:'text',id:'web',value:initialValue[5].web, index:5},
        {required: false, name:'image',label:'Image',type:'text',id:'image',value:initialValue[6].image, index:6},
        {required: false, name:'state',label:'State',type:'text',id:'state',value:initialValue[7].state, index:7},
        {required: true, name:'country',label:'Country',type:'text',id:'country',error:isCountryError,validationError:'Country is Required',value:initialValue[8].country, index:8},
        {required: true, name:'city',label:'City',type:'text',id:'city',error:isCityError,validationError:'City is Required',value:initialValue[9].city, index:9},
        {required: true, name:'street',label:'Street',type:'text',id:'street',error:isStreetError,validationError:'Street is Required',value:initialValue[10].street, index:10},
        {required: true, name:'houseNumber',label:'House Number',type:'number',id:'houseNumber',error:isHouseNumberError,validationError:'House Number is Required',value:initialValue[11].houseNumber, index:11},
        {required: false, name:'zip',label:'Zip',type:'number',id:'zip',value:initialValue[12].zip, index:12}
    ]
    const firstColumn = fields.slice(0,7);
    const secondColumn = fields.slice(7,13);

    async function handleSubmit(event) {

        const validatorResponse = NewCardValidator(
            event,setIsTitleError,setIsSubtitleError,setIsDescriptionError,setIsPhoneError,setIsEmailError,
            setIsCountryError, setIsCityError,setIsStreetError,setIsHouseNumberError,cardToEdit
        );
        const card = validatorResponse.card;
        const isValid = validatorResponse.valid;
        if (isValid) {
            if (formMode === 'create') {
                try {
                    await createCard(card);
                    toast.success('Card has been created');
                    setTimeout(()=>setPageState('view'),2000)
                } catch (error) {
                    toast.error('Creation failed');
                }
            } else if (formMode === 'edit') {
                try {
                    await updateCard(card,cardToEditId);
                    toast.success('Card has been created');
                    setTimeout(()=>setPageState('view'),2000)
                } catch (error) {
                    toast.error('Creation failed');
                }
            }

        } else {
            toast.error('Card is not valid');
        }
    }
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
                        <PiCardsBold size={50} className={'card-form-icon'}/>
                        <Typography component="h1" variant="h5" mt={1}>
                            {formMode === 'edit' ? <>Edit Card</> : <>Create Card</>}
                        </Typography>
                        <Box
                            component={"form"}
                            noValidate
                            sx={{ mt: 2 ,'& .MuiTextField-root': { mt: 2, mb:0, width: '50ch' }}}
                            onSubmit={handleSubmit}
                        >
                            <div className={'display-flex'}>
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
                                    <Typography className={'text-capitalize'}>{formMode === 'edit' ? <>Update Card</> : <>Create Card</>}</Typography>
                                </Button>
                            </div>
                        </Box>

                    </Box>
                </Container>
            </ThemeProvider>
    </>
}


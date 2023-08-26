import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {PiSignInFill} from "react-icons/pi"
import {toast, ToastContainer} from "react-toastify";
import { useNavigate } from 'react-router-dom';
import {businessMenu, simpleMenu} from "../../Services/Menu/MenusHandler";
import {getUser} from "../../Services/Axios/axios";
import 'react-toastify/dist/ReactToastify.css';

const defaultTheme = createTheme();

export function SignInPage({setMenu,setPath,setLoggedInUser}) {
    const navigate = useNavigate();
    async function signIn(event) {
        event.preventDefault();
        const data = new FormData(event.currentTarget);

        // prepare post data for server request
        const post = {
            email: data.get('email'),
            password: data.get('password')
        }

        // try to fetch data from server //
        try {
            const userDataResponse = await getUser(post);
            setLoggedInUser(userDataResponse);
            toast.success(`Welcome ${userDataResponse.name.first}!`)
            if (userDataResponse.isBusiness === false) {
                setTimeout(()=>{
                    navigate('/home', {replace: true});
                    setMenu(simpleMenu);},
                    2000);
            } else {
                setTimeout(()=>{
                    navigate('/home', {replace: true});
                    setMenu(businessMenu);},
                2000);
            }
        } catch (error) {
            toast.error(`Wrong email or password`);
        }
    }
    return (
        <>
        <ToastContainer
            position="top-center"
            text-center
            autoClose={1000}
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
                    <PiSignInFill size={50} style={{ margin:"2", marginTop:"5" }} />
                    <Typography component="h1" variant="h5" mt={1}>
                        Sign In
                    </Typography>
                    <Box component="form" onSubmit={signIn} noValidate sx={{ mt: 1 }}>
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
                            autoComplete='current=password'
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            <Typography style={{textTransform: 'none'}}>Sign In</Typography>
                        </Button>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
        </>
    );
}
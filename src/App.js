import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter } from "react-router-dom";
import Router from "./Components/Router/Router";
import {Header} from "./Components/Main/Header";
import {Footer} from "./Components/Main/Footer";
import {useEffect, useState} from "react";
import {guestMenu} from "./Services/Menu/MenusHandler";
import "./Styles/homePage.css"
import "./Styles/cards.css"
import "./Styles/components.css"
import {initDb} from "./Services/FirstRun/initDb";



function App() {
    useEffect(()=>initDb(),[]);
    const [loggedInUser,setLoggedIntUser] = useState(null);
    const [menu, setMenu] = useState(guestMenu);
    const [path,setPath] = useState(location.path);
    return (
        <>
        <div>
            <BrowserRouter>
                <Header path={path} setPath={setPath} menu={menu} setMenu={setMenu} loggedInUser={loggedInUser} setLoggedInUser={setLoggedIntUser}></Header>
                <Router setMenu={setMenu} setPath={setPath} loggedInUser={loggedInUser} setLoggedInUser={setLoggedIntUser}/>
                <Footer/>
            </BrowserRouter>
        </div>
        </>
  );
}
export default App;

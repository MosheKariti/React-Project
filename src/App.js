import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter } from "react-router-dom";
import Router from "./Components/Router/Router";
import {Header} from "./Components/Main/Header";
import {Footer} from "./Components/Main/Footer";
import {useState} from "react";
import {initCards} from "./Services/Cards/InitCards";
import {guestMenu} from "./Services/Menu/MenusHandler";

function App() {
    initCards();
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

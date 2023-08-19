import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter } from "react-router-dom";
import Router from "./Components/Router/Router";
import {Header} from "./Components/Main/Header";
import {Footer} from "./Components/Main/Footer";
import {useState} from "react";
import {MenuToDisplay} from "./Services/Menu/MenuToDisplay";
import {initCards} from "./Services/Cards/InitCards";

function App() {
    initCards();
    const [loggedInUser,setLoggedInUser] = useState(null);
    const [menu, setMenu] = useState(()=>MenuToDisplay(loggedInUser));
    const [path,setPath] = useState(location.path);
    return (
      <div>
      <BrowserRouter>
          <Header path={path} setPath={setPath} menu={menu} setMenu={setMenu} loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser}></Header>
          <Router setMenu={setMenu} loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser} setPath={setPath}/>
          <Footer/>
      </BrowserRouter>
      </div>
  );
}

export default App;

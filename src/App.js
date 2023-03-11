import React from "react";
import "./css/main.css";
import NavBar from "./components/navBar/NavBar";
import Footer from "./components/footer/Footer";
import Home from "./components/pages/home/Home";
import Projects from "./components/pages/projects/Projects";
import Contacts from "./components/pages/contacts/Contacts";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Skills from "./components/pages/skills/skills";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <NavBar/>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/projects' element={<Projects/>}/>
                    <Route path='/skills' element={<Skills/>}/>
                    <Route path='/contacts' element={<Contacts/>}/>
                </Routes>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;

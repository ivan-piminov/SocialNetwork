import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {Route} from "react-router-dom"
import DialogsContainer from "./components/Dialogs/DialogsContainer";


const App = () => {
    return (
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route path = "/Dialogs" render={()=><DialogsContainer/>}/>
                    <Route path = "/Profile" render={()=><Profile />}/>
                </div>
            </div>
    );
};

export default App;



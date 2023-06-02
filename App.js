import React from "react";
import { Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './Components/component.css';
import Main from "./main";
import AllProperties from "./allProperties";
import LogIn from "./logIn";
import SignUp from "./signUp";
import Listing from "./listing";
import CardDetails from "./CardDetails/cardDetails";
import AboutUs from "./Components/aboutUs";
import Banner from "./Components/banner";
import Faq from "./Components/faq";

function App(){

    return (   
    <div>   
      <Routes>
        <Route path="/" element={<Main />}/>
        <Route path="allProperties" element={<AllProperties />}/>
        <Route path="logIn" element={<LogIn />}/>
        <Route path="signUp" element={<SignUp />}/>
        <Route path="listing" element={<Listing />} />  
        <Route path="cardDetails" element={<CardDetails />} /> 
        <Route path="aboutUs" element={<AboutUs />} />
        <Route path="banner" element={<Banner />} />
        <Route path="faq" element={<Faq />} />
      </Routes>
      
    </div>

    );
}
export default App;
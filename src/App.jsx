import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App1 from "./Components/App1";
import SignUp from "./Components/SignUp";
import Navbar2 from "./Components/Navbar2";
import LoginPage from "./Components/LoginPage";
import Execceries from "./Components/Execceries";
import Palindrome from "./Execceries/Palindrome";


function App() {
  return (
    <BrowserRouter>
      <Navbar2/>
      
      {/* <Navbar1/> */}

      {/* <Experience/> */}
      {/* <Projects/> */}

      {/* <Contact/> */}
      {/* <Hero/> */}

      <Routes>
        <Route path="/" element={<App1 />}></Route>
        <Route path="/SignUp" element={<SignUp />}></Route>
        <Route path="/LogIn" element={<LoginPage/>}></Route>
        <Route path="/Execceries" element={<Execceries/>}></Route>
        <Route path="/Palindrome" element={<Palindrome/>}></Route>
      </Routes>

    </BrowserRouter>
  );
}

export default App;

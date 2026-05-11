import "./App.css";
import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";

import Home from "./components/Pages/Home";
import Projects from "./components/Pages/Projects";
import Blogs from "./components/Pages/Blogs";
import Contact from "./components/Pages/Contact";
import About from "./components/Pages/About";

import SignUp from "./components/Pages/SignUp";
import SignIn from "./components/Pages/SignIn";

import Error from "./components/Error";

import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <>
        <Navbar /> 
        <Routes>
          {/* This is a wrapper for all possible routes */}
          <Route path="/" element={<Home />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Blogs" element={<Blogs />} />
          {/*  Here <Route carries an element to its attribute */}
          <Route path="/Contact" element={<Contact />} />
          <Route path="/About" element={<About />} />
          <Route path="/SignUp" element={ <SignUp /> }  />
          <Route path="/SignIn" element={ <SignIn /> }  />
          <Route path="*" element={<Error />} />
        </Routes>
      </>
    </div>
  );
};

export default App;

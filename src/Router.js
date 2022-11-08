import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./module/Navbar/Navbar";
import Home from './module/Employee/container/Home';
import About from './module/About/container/About';
import Recipe from "./module/Recipe/Recipe";

const Router = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/recipe" element={<Recipe />} />
            </Routes>

        </BrowserRouter>

    )
}

export default Router;


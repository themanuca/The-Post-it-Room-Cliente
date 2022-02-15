import React from "react";
import {BrowserRouter,Routes, Route } from 'react-router-dom';

import Login from "./pages/admin/login/index";
import Register from "./pages/admin/register/index.jsx";

import Home from "./pages/home";

export default function Rotas(){
    return(
        <BrowserRouter>
            <Routes>
                {/* ROTA CLIENTE */}
                <Route path="/" element={<Home/>} />

                {/* ROTA ADMIN */}
                <Route path="/login" element={<Login/>} />
                <Route path="/register" element={<Register/>}/>
            </Routes>
        </BrowserRouter>
    )
}
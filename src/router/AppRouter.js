import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from '../components/Home';
import Result from '../components/Result';
import Rules from '../components/Rules';


export default () => ( 
    <BrowserRouter> 
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/result' element={<Result />} />
            <Route path='/rules' element={<Rules />} />
        </Routes>
    </BrowserRouter>    
)
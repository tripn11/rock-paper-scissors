import React from "react";
import { useNavigate } from 'react-router-dom';
import Rules from '../images/ImageRules';

export default () => {
    const navigate = useNavigate();
    return (
        <div id="rules-container">
            <h2>RULES</h2>
            <Rules />
            <ion-icon onClick={()=> navigate('/')} name="close-outline"></ion-icon>
        </div>
    )
} 

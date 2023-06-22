import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Paper from '../images/IconPaper';
import Rock from '../images/IconRock';
import Scissors from '../images/IconScissors';
import Triangle from '../images/BgTriangle';
import ScoreBoard from './Scoreboard';

export default () => {
    const navigate = useNavigate();

    useEffect(()=>{
        if(localStorage.getItem('selected') !== null ) {
            localStorage.removeItem('selected');
        }

        if(localStorage.getItem('scores') === null) {
            localStorage.setItem('scores','0');
        }
    },[])

    const selector = (selected) => {
        localStorage.setItem('selected',selected);
        navigate("/result");
    }

    return (
        <div id='home'>
            <ScoreBoard />
            <div id='choices'>
                <div><Triangle /></div>
                <div id='paper-container' onClick={()=>selector('paper')}><Paper /></div>
                <div id='scissors-container' onClick={()=>selector('scissors')}><Scissors /></div>
                <div id='rock-container' onClick={()=>selector('rock')}><Rock /></div>
            </div>

            <button onClick={()=>navigate('/rules')}>RULES</button>
        </div>
    )
}

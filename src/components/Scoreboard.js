import React from 'react';

export default () => (
    <div id='scoreboard'>
        <div>
            <p>ROCK</p>
            <p>PAPER</p>
            <p>SCISSORS</p>
        </div>
        <div>
            <p>SCORE</p>
            <p>{Number(localStorage.getItem('scores'))}</p>
        </div>
    </div>
)
import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';

import { useNavigate } from 'react-router-dom';
import Scoreboard from './Scoreboard';
import Paper from '../images/IconPaper';
import Rock from '../images/IconRock';
import Scissors from '../images/IconScissors';
import Rules from '../images/ImageRules';


Modal.setAppElement('body');


const Result = () => {
    const [ computer, setComputer] = useState(null);
    const [ announce, setAnnounce] = useState(null);
    const [modalState, setModalState] = useState(false)
    const navigate = useNavigate();

    useEffect(()=>{
        let opponent = Math.floor(Math.random() * 3)  
        setComputer(opponent);
    }, [])

    useEffect(() => {
        let user = localStorage.getItem('selected');
        if(computer !== null) {
            if (
                (user === 'rock' && computer === 2) ||
                (user === 'paper' && computer === 0) ||
                (user === 'scissors' && computer === 1)
              ) {
                setAnnounce(true);
                scores('add')
              } else if (
                (user === 'rock' && computer === 0) ||
                (user === 'paper' && computer === 1) ||
                (user === 'scissors' && computer === 2)
              ) {
                setAnnounce('draw')
              }else {
                setAnnounce(false);
                scores('subtract')
            }
        }
        
    }, [computer]);

    const scores = (operation) => {
        let score;

        if(operation === 'add') {
            score = Number(localStorage.getItem('scores'))
            score++;
        } else if (operation === 'subtract') {
            score = Number(localStorage.getItem('scores'))
            score--;
        }

        localStorage.setItem('scores',score.toString())
    }

    const openModal = () => {
        setModalState(true);
    }

    const closeModal = () => {
        setModalState(false);
    }

    return (
        <div id='result'>
            <Scoreboard />
            <div id='display'>
                <div>
                    {localStorage.getItem('selected') === 'rock' && <div className='container-rock'><Rock /></div>}
                    {localStorage.getItem('selected') === 'scissors' && <div className='container-scissors'><Scissors /></div>}
                    {localStorage.getItem('selected') === 'paper' && <div className='container-paper'><Paper /></div>}
                    <p>YOU PICKED</p>
                </div>
                <div>
                    {computer === 0 && <div className='container-rock'><Rock /></div>}
                    {computer === 1 && <div className='container-paper'><Paper /></div>}
                    {computer === 2 && <div className='container-scissors'><Scissors /></div>}
                    <p>THE HOUSE PICKED</p>
                </div>
            </div>
            <div>
                {announce === true && <div>YOU WIN</div>}
                {announce === false && <div>YOU LOSE</div>}
                {announce === 'draw' && <div>DRAW</div>}
            </div>
            <button onClick={()=>navigate('/')}>PLAY AGAIN</button>
            <button onClick={openModal}>RULES</button>

            <Modal
                isOpen={modalState}
                className='modal-content'
                overlayClassName='modal-overlay'
            >
                <h2>RULES</h2>
                <Rules />
                <ion-icon onClick={closeModal} name="close-outline"></ion-icon>
            </Modal>
        </div>
    )
}

export default Result;
import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import { useNavigate } from 'react-router-dom';
import Paper from '../images/IconPaper';
import Rock from '../images/IconRock';
import Scissors from '../images/IconScissors';
import Triangle from '../images/BgTriangle';
import ScoreBoard from './Scoreboard';
import Rules from '../images/ImageRules';

Modal.setAppElement('body');


const Home = () => {
    const navigate = useNavigate();
    const [modalState, setModalState] = useState(false)

    useEffect(()=>{
        if(localStorage.getItem('selected') !== null ) {
            localStorage.removeItem('selected');
        }

        if(localStorage.getItem('scores') === null) {
            localStorage.setItem('scores','0');
        }
    },[])

    const openModal = () => {
        setModalState(true);
    }

    const closeModal = () => {
        setModalState(false);
    }

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


export default Home;
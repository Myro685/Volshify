import React from "react";
import './Styles/Footer.css';
import Lcbd from './Assets/Lcbd.mp3';
import {AiOutlinePlayCircle, AiOutlinePauseCircle} from 'react-icons/ai'


export default function Footer() {
    const audio = new Audio(Lcbd);
    audio.volume = 0.1;
    return(
        <footer>
            <button onClick={() => {
                audio.play();
            }}><AiOutlinePlayCircle className="icons" /></button>
            <button onClick={() =>{
                audio.pause();
            }}><AiOutlinePauseCircle className="icons" /></button>
        </footer>
    );
}

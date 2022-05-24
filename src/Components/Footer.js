import React from "react";
import './Styles/Footer.css';
import Podvod from './Assets/podvod.mp3';
import {AiOutlinePlayCircle, AiOutlinePauseCircle} from 'react-icons/ai'
import {BsVolumeDown, BsVolumeMute, BsVolumeUp} from 'react-icons/bs'
import MovingComponent from 'react-moving-text';

export default function Footer() {
    const audio = new Audio(Podvod);
    audio.volume = 0.5;
    return(
        
        <footer>
            <MovingComponent
            className='moving'
            type="fadeInFromBottom"
            duration="1000ms"
            delay="0s"
            direction="normal"
            timing="ease"
            iteration="1"
            fillMode="none">
                <div className="footer">
                    <div className="song">

                    </div>
                   
                    <div className="playButtons">
                        <button id="play" className="play" onClick={() => {
                        audio.play();
                        PauseAndPlay();
                    }}><AiOutlinePlayCircle className="icons" /></button>
                    <button id="pause" className="pause hide" onClick={() =>{
                        audio.pause();
                        PauseAndPlay();
                    }}><AiOutlinePauseCircle className="icons" /></button>
                    </div>

                    <div className="volume">
                        <button>
                            <BsVolumeUp className="icon-volume hide" id="volumeHigh" />
                        </button>
                        <button>
                            <BsVolumeDown className="icon-volume" id="volumeLow" />
                        </button>
                        <button>
                            <BsVolumeMute className="icon-volume hide" id="volumeMute" />
                        </button>
                        <input type="range" min={0} max={100} id='volume' onChange={() => {
                            let volume = document.getElementById('volume').value;
                            audio.volume = volume/100;
                            Volume();
                        }} />
                    </div>
                </div>
            </MovingComponent>
        </footer>
        
    );
}

function PauseAndPlay() {
    let play = document.getElementById('play');
    let pause = document.getElementById('pause');

    if (play.className === 'play') {
       play.className += ' hide';
       pause.className = 'pause';
    }
    else{
        pause.className += ' hide';
        play.className = 'play';
    }
}   

function Volume() {
    let volume = document.getElementById('volume').value;
    const volumeHigh = document.getElementById('volumeHigh');
    const volumeLow = document.getElementById('volumeLow');
    const volumeMute = document.getElementById('volumeMute');
    if (volume > 60) {
        volumeHigh.setAttribute('class', 'icon-volume');
        volumeLow.setAttribute('class', 'icon-volume hide');
    }
    if (volume < 60 && volume > 0) {
        volumeLow.setAttribute('class', 'icon-volume');
        volumeHigh.setAttribute('class', 'icon-volume hide');
        volumeMute.setAttribute('class', 'icon-volume hide');
    }
    if (volume === 0) {
        volumeMute.setAttribute('class', 'icon-volume');
        volumeLow.setAttribute('class', 'icon-volume hide');
    }
}
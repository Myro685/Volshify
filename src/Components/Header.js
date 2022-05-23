import React from "react";
import './Styles/Header.css';
import MovingComponent from 'react-moving-text';

export default function Header() {
    return(
        <header>
            <MovingComponent
            type="fadeInFromTop"
            duration="1000ms"
            delay="0s"
            direction="normal"
            timing="ease"
            iteration="1"
            fillMode="none">
            <h1>VOLSHIFY</h1>
            </MovingComponent>
        </header>
    );
}
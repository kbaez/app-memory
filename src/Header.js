import React, {Component } from 'react';
import './Header.css';

export default class Header extends Component {
    render(){
        return(
            <header>
                <div className="titulo">React-parejas</div>
                <div>
                    <button className="boton-reiniciar">Reiniciar</button>
                </div>
                <div className="titulo">Intentos:</div>
            </header>
        );
    }
};
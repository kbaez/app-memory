import React, {Component } from 'react';
import './Header.css';
import Carta from './Carta';
import './Tablero.css';

export default class Tablero extends Component {
    render() {
        const cartas = [1,2,3,4,5]
        return (
            <div className="tablero">
                {
                    this.props.baraja.map((carta) => <Carta icono={carta.icono}/>)
                }
            </div>
        );
    }
}
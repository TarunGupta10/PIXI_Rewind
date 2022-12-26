import { Application } from 'pixi.js';
import { Game } from './Game';
import './css/main.css';
    const gameDiv:HTMLDivElement = <HTMLDivElement>document.getElementById('game');
    const app:Application = new Game({
        width : innerWidth,
        height : innerHeight,
        backgroundColor: 0xFFE476,
    });
    gameDiv.appendChild(app.view);

import {GameOverScreen} from "./gameScreens/gameOverScreen.js";
import {GameScreen} from "./gameScreens/gameScreen.js";
import {InstructionScreen} from "./gameScreens/instructionScreen.js";
import {TitleScreen} from "./gameScreens/titleScreen.js";
import {VictoryScreen} from "./gameScreens/victoryScreen.js";

let canvas = document.getElementById("myCanvas");
let pencil = canvas.getContext("2d");

let title = new TitleScreen(canvas, pencil);
let instructions = new InstructionScreen(canvas, pencil);
let game = new GameScreen(canvas, pencil);
let gameOver = new GameOverScreen(canvas, pencil);
let victory = new VictoryScreen(canvas, pencil);

let state = title;
title.enter();

let ocean = document.getElementById("ocean");

function gameLoop(){
    pencil.clearRect(0, 0, canvas.width, canvas.height);
    pencil.drawImage(ocean, 0, 0, canvas.width, canvas.height);
    
    let command = state.update();
    if (command == "title"){
        state = title;
        title.enter();
    }
    if (command == "instructions"){
        state = instructions;
        instructions.enter();
    }
    if (command == "game"){
        state = game;
        game.enter();
    }
    if (command == "gameOver"){
        state = gameOver;
    }
    if (command == "victory"){
        state = victory;
    }
}

setInterval(gameLoop, 1000/60);
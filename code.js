import {GameOverScreen} from "./gameScreens/gameOverScreen.js";
import {GameScreen} from "./gameScreens/gameScreen.js";
import {TitleScreen} from "./gameScreens/titleScreen.js";
import {Toolbox} from "./toolbox.js";

let canvas = document.getElementById("myCanvas");
let pencil = canvas.getContext("2d");

let arr = ["a", "b", "c"];
let toolbox = new Toolbox();
let title = new TitleScreen(canvas, pencil);
let game = new GameScreen(canvas, pencil);
let gameOver = new GameOverScreen(canvas, pencil);

let state = title;

console.log(toolbox.getRandomItem(arr));

console.log(toolbox.shuffleArray(arr));

pencil.fillStyle = (toolbox.getRandomColor());
pencil.fillRect(50, 50, 150, 100);
console.log(toolbox.getRandomColor());

function gameLoop(){
    pencil.clearRect(0, 0, canvas.width, canvas.height);
    
    let command = state.update();
    if (command == "title"){
        state = title;
    }
    if (command == "game"){
        state = game;
    }
    if (command == "gameOver"){
        state = gameOver;
    }
}

setInterval(gameLoop, 1000/60);
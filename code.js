import {GameOverScreen} from "./gameScreens/gameOverScreen.js";
import {GameScreen} from "./gameScreens/gameScreen.js";
import {TitleScreen} from "./gameScreens/titleScreen.js";
import {Toolbox} from "./toolbox.js";

let canvas = document.getElementById("myCanvas");
let pencil = canvas.getContext("2d");

let arr = ["a", "b", "c"];
let toolbox = new Toolbox();
let title = new TitleScreen();
let game = new GameScreen();
let gameOver = new GameOverScreen();

let state = title;

console.log(toolbox.getRandomItem(arr));

console.log(toolbox.shuffleArray(arr));

pencil.fillStyle = (toolbox.getRandomColor());
pencil.fillRect(50, 50, 150, 100);
console.log(toolbox.getRandomColor());

function gameLoop(){
    state.update;
}

setInterval(gameLoop(), 1000/60);
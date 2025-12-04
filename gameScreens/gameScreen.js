import {Toolbox} from "./toolbox.js";
import {collisionObject} from "../collisionObject.js";

export class GameScreen{
    canvas;
    pencil;
    changeScreen = false;
    quota = 0;
    dailyQuota = Math.floor(Math.random() * (20 - 10)) + 10;
    toolbox = new Toolbox();

    constructor(canvas, pencil){
        this.canvas = canvas;
        this.pencil = pencil;

        this.onClick = this.onClick.bind(this);
    }

    onClick(){
        this.changeScreen = true;
    }

    enter() {
        document.addEventListener("click", this.onClick);
    }

    exit() {
        this.changeScreen = false;
        document.removeEventListener("click", this.onClick);
    }

    update(){
        this.pencil.font = "50px Georgia"
        this.pencil.fillText("Quota: " + this.quota + "/" + this.dailyQuota, 10, 50);

        //return "gameOver";
    }
}
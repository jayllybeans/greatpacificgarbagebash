import {Toolbox} from "../toolbox.js";
import {collisionObject} from "../collisionObject.js";

export class GameScreen{
    canvas;
    pencil;
    changeScreen = false;

    quota = 0;
    dailyQuota = Math.floor(Math.random() * (20 - 10)) + 10;
    toolbox = new Toolbox();
    x = 200;
    y = 200;

    appleCore = document.getElementById("appleCore");
    plasticBag = document.getElementById("plasticBag");
    tire = document.getElementById("tire");
    cuttlefish = document.getElementById("cuttlefish");
    shark = document.getElementById("shark");
    starfish = document.getElementById("starfish");
    aqua = document.getElementById("aqua");

    currentObject;
    arrayChoice = Math.floor(Math.random() * (2 - 1)) + 1;
    wasHit;

    constructor(canvas, pencil){
        this.canvas = canvas;
        this.pencil = pencil;
    }

     trash = [new collisionObject(this.canvas, this.pencil, this.appleCore), new collisionObject(this.canvas, this.pencil, this.plasticBag), (this.canvas, this.pencil, this.tire)];
     seaCreatures = [new collisionObject(this.canvas, this.pencil, this.cuttlefish), new collisionObject(this.canvas, this.pencil, this.shark), new collisionObject(this.canvas, this.pencil, this.starfish)];

    quotaCheck(quota){
        this.changeScreen = true;
        if (quota < 0){
            return "gameOver";
        }
        else{
            return "victory";
        }
    }

    isCollision(collisionObject){
        let isFarEnoughRight = this.x > collisionObject.topLeftCorner.x;
        let isLowEnough = this.y > collisionObject.topLeftCorner.y;
        let isFarEnoughLeft = this.x < collisionObject.bottomRightCorner.x;
        let isHighEnough = this.y < collisionObject.bottomRightCorner.y;

         if((isFarEnoughRight && isLowEnough && isFarEnoughLeft && isHighEnough)){
            return true;
         }
         return false;
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

        this.pencil.drawImage(this.aqua, this.x, this.y, 200, 200);

        this.currentObject.draw();

        this.wasHit = this.isCollision(this.currentObject);

        if(this.wasHit){
            for(let i = 0; i < this.trash.length; i++){
                if (this.currentObject == this.trash[i]){
                    this.quota++;
                }
            }
            
            for(let i = 0; i <this.seaCreatures.length; i++){
                if (this.currentObject == this.seaCreatures[i]){
                    this.quota--;
                }
            }
        }

        if(this.quota < 0 || this.quota == this.dailyQuota){
            this.quotaCheck(quota);
        }
    }
}
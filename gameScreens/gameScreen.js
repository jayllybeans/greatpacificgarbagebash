import {Toolbox} from "../toolbox.js";
import {collisionObject} from "../collisionObject.js";

export class GameScreen{
    canvas;
    pencil;
    changeScreen = false;
    quota = 0;
    dailyQuota = Math.floor(Math.random() * (20 - 10)) + 10;
    toolbox = new Toolbox();
    appleCore = document.getElementById("appleCore");
    plasticBag = document.getElementById("plasticBag");
    tire = document.getElementById("tire");
    trash = [new collisionObject(this.canvas, this.pencil, this.appleCore), new collisionObject(this.canvas, this.pencil, this.plasticBag), (this.canvas, this.pencil, this.tire)];
    cuttlefish = document.getElementById("cuttlefish");
    shark = document.getElementById("shark");
    starfish = document.getElementById("starfish");
    seaCreatures = [new collisionObject(this.canvas, this.pencil, this.cuttlefish), new collisionObject(this.canvas, this.pencil, this.shark), new collisionObject(this.canvas, this.pencil, this.starfish)];
    aqua = document.getElementById("aqua");
    currentObject = this.shark;
    arrayChoice = Math.floor(Math.random() * (2 - 1)) + 1;
    wasHit;

    constructor(canvas, pencil){
        this.canvas = canvas;
        this.pencil = pencil;
    }

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

        this.pencil.drawImage(this.aqua, this.x, this.y, 150, 50);

        this.pencil.drawImage(this.currentObject, this.currentObject.x, this.currentObject.y, this.currentObject.height, this.currentObject.width);

        this.wasHit = this.isCollision(this.currentObject);

        if(this.wasHit){
            for(let i = 0; i < this.trash.length; i++){
                if (this.currentObject == this.trash[i]){
                    quota++;
                }
            }
            
            for(let i = 0; i <this.seaCreatures.length; i++){
                if (this.currentObject == this.seaCreatures[i]){
                    quota--;
                }
            }
        }

        if(quota < 0 || quota == dailyQuota){
            this.quotaCheck(quota);
        }
    }
}
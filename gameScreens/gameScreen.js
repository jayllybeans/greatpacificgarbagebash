import {Toolbox} from "../toolbox.js";
import {collisionObject} from "../collisionObject.js";

export class GameScreen{
    canvas;
    pencil;
    changeScreen = false;
    quota = 0;
    dailyQuota = Math.floor(Math.random() * (20 - 10)) + 10;
    toolbox = new Toolbox();
    aqua = document.getElementById("aqua");
    trash = [];
    seaCreatures = [];
    upKey = "ArrowUp";
    downKey = "ArrowDown";
    keysPressed = {};
    currentObject;
    wasHit;
    x = 300;
    y;

    constructor(canvas, pencil){
        this.canvas = canvas;
        this.pencil = pencil;

        this.trash = [new collisionObject(this.canvas, this.pencil, document.getElementById("appleCore")), new collisionObject(this.canvas, this.pencil, document.getElementById("plasticBag")), new collisionObject(this.canvas, this.pencil, document.getElementById("tire"))];
        this.seaCreatures = [new collisionObject(this.canvas, this.pencil, document.getElementById("cuttlefish")), new collisionObject(this.canvas, this.pencil, document.getElementById("shark")), new collisionObject(this.canvas, this.pencil, document.getElementById("starfish"))];
        this.currentObject = this.randomObject();
        this.y = this.canvas.height/2;

        window.addEventListener("keydown", (e) => {
            this.keysPressed[e.key] = true;
        });

        window.addEventListener("keyup", (e) => {
            this.keysPressed[e.key] = false;
        });
    }

    randomObject(){
        let options = ["trash", "seaCreatures"];
        let choice = this.toolbox.getRandomItem(options);
        if (choice == "trash"){
            return this.toolbox.getRandomItem(this.trash);
        }
        else{
            return this.toolbox.getRandomItem(this.seaCreatures);
        }
    }

    move(keysPressed){
        if(keysPressed[this.upKey])
        {
            this.y -= 5;
        }
        
        if(keysPressed[this.downKey])
        {
            this.y += 5;
        }
    }

     isCollision(obj){
        return (
            this.x < obj.x + obj.width &&
            this.x + 100 > obj.x &&            // 100 = rough width of player sprite
            this.y < obj.y + obj.height &&
            this.y + 100 > obj.y              // 100 = rough height of player sprite
        );
    }

    exit() {
        this.changeScreen = false;
    }

    update(){
        this.pencil.font = "50px Georgia"
        this.pencil.fillText("Quota: " + this.quota + "/" + this.dailyQuota, 10, 50);

        this.move(this.keysPressed);

        this.pencil.drawImage(this.aqua, this.x, this.y, 200, 150);

        this.currentObject.x -= 5;

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

            this.currentObject = this.randomObject();
            this.currentObject.reset();
        }

        if(this.currentObject.x < -this.currentObject.width){
            this.currentObject = this.randomObject();
            this.currentObject.reset();
        }

        if(this.quota < 0 || this.quota == this.dailyQuota){
            this.changeScreen = true;
            if (this.quota < 0){
                this.exit();
                return "gameOver";
            }
            else{
                this.exit();
                return "victory";
            }
        }
    }
}
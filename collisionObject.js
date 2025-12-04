export class collisionObject{
    canvas;
    pencil;
    sprite;
    x = 1890;
    y = Math.random() * (150 - 50) + 50;
    height = 50;
    width = 50;

    topLeftCorner;
    bottomRightCorner;

    constructor(canvas, pencil, sprite){
        this.pencil = pencil;
        this.canvas = canvas;
        this.sprite = sprite;
    }

    draw(){
         this.topLeftCorner = { 
            x : this.x,
            y : this.y - this.height
        }

        this.bottomRightCorner = { 
            x : this.x + this.width,
            y : this.y - this.height + this.height
        }

        this.pencil.drawImage(this.sprite, this.x, this.y - this.height, this.width, this.height);
    }
}
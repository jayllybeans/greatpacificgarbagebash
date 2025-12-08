export class collisionObject{
    canvas;
    pencil;
    sprite;
    x;
    y = Math.random() * (900 - 200) + 200;
    height = 100;
    width = 100;

    topLeftCorner;
    bottomRightCorner;

    constructor(canvas, pencil, sprite){
        this.pencil = pencil;
        this.canvas = canvas;
        this.sprite = sprite;
        this.x = canvas.width;
        this.reset();
    }

    reset(){
        this.x = this.canvas.width;
        this.y = Math.random() * (this.canvas.height - 100);
    }

    draw(){
        this.topLeftCorner = { x: this.x, y: this.y };
        this.bottomRightCorner = { x: this.x + this.width, y: this.y + this.height };

        this.pencil.drawImage(this.sprite, this.x, this.y, this.width, this.height);
    }
}
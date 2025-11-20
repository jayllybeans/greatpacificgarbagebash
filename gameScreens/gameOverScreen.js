export class GameOverScreen{
    canvas;
    pencil;

    constructor(canvas, pencil){
        this.canvas = canvas;
        this.pencil = pencil;
    }

    update(){
        this.pencil.font = "20px Georgia"
        this.pencil.fillText("Game Over", 10, 50);

        //return "title";
    }
}
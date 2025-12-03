export class VictoryScreen{
    canvas;
    pencil;
    changeScreen = false;

    constructor(canvas, pencil){
        this.canvas = canvas;
        this.pencil = pencil;
    }

    onClick(){
        this.changeScreen = true;
    }

    update(){
        this.pencil.font = "20px Georgia"
        this.pencil.fillText("Victory", 10, 50);

        
    }
}
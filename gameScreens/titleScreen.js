export class TitleScreen{
    canvas;
    pencil;
    changeToGame = false;

    constructor(canvas, pencil){
        this.canvas = canvas;
        this.pencil = pencil;

        this.onClick = this.onClick.bind(this);
        document.addEventListener("click", this.onClick);
    }

    onClick(){
        console.log("Hello!");
        this.changeToGame = true;
    }

    update(){
        this.pencil.font = "20px Georgia"
        this.pencil.fillText("Title", 10, 50);

        this.pencil.fill = "blue";
        this.pencil.fillRect(200, 200, 100, 50);
        if(this.changeToGame){
            this.changeToGame = false;
            return "game";
        }
    }
}
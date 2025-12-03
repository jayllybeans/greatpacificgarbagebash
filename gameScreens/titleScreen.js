export class TitleScreen{
    canvas;
    pencil;
    changeScreen = false;
    isClickFinished = false;

    constructor(canvas, pencil){
        this.canvas = canvas;
        this.pencil = pencil;

        this.onClickDown = this.onClickDown.bind(this);
        this.onClickUp = this.onClickUp.bind(this);
        document.addEventListener("mousedown", this.onClickDown);
        document.addEventListener("mouseup", this.onClickUp);
    }

    onClickDown(){
        this.changeScreen = true;
    }

    onClickUp() {
        this.isClickFinished = true;
    }

    update(){
        this.pencil.fillStyle = "white";
        this.pencil.font = "100px Impact";
        this.pencil.fillText("The Great Pacific Garbage Bash", 300, 100);

        this.pencil.font = "50px Impact";
        this.pencil.fillText("Click the screen to continue", 600, 300);

        if(this.changeScreen){
            this.changeScreen = false;
            this.isClickFinished = false;
            return "instructions";
        }
    }
}
export class TitleScreen{
    canvas;
    pencil;
    changeScreen = false;

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
        this.pencil.fillStyle = "white";
        this.pencil.font = "100px Impact";
        this.pencil.fillText("The Great Pacific Garbage Bash", 300, 100);

        this.pencil.font = "50px Impact";
        this.pencil.fillText("Click the screen to continue", 600, 300);

        if(this.changeScreen){
            this.exit();
            return "instructions";
        }
    }
}
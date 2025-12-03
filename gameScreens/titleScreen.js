export class TitleScreen{
    canvas;
    pencil;
    changeInstruction = false;

    constructor(canvas, pencil){
        this.canvas = canvas;
        this.pencil = pencil;

        this.onClick = this.onClick.bind(this);
        document.addEventListener("click", this.onClick);
    }

    onClick(){
        this.changeInstruction = true;
        console.log(this);
    }

    update(){
        this.pencil.fillStyle = "white";
        this.pencil.font = "100px Impact";
        this.pencil.fillText("The Great Pacific Garbage Bash", 300, 100);

        this.pencil.font = "50px Impact";
        this.pencil.fillText("Click the screen to continue", 600, 300);

        if(this.changeInstruction){
            console.log("Test");
            this.changeInstruction = false;
            return "instructions";
        }
    }
}
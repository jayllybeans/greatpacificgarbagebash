export class InstructionScreen{
    canvas;
    pencil;
    changeScreen = false;

    constructor(canvas, pencil){
        this.canvas = canvas;
        this.pencil = pencil;

        this.onClick = this.onClick.bind(this);
        document.addEventListener("click", this.onClick);
    }

    onClick(){
        this.changeScreen = true;
    }

    destroy() {
        document.removeEventListener("click", this.onClick);
    }

    update(){
        this.pencil.fillStyle = "white";
        this.pencil.font = "100px Impact";
        this.pencil.fillText("Instructions", 10, 100);

        this.pencil.font = "35px Impact";
        this.pencil.fillText("Sitting in the Pacific Ocean is an island of trash that contains around 1.8 trillion pieces of plastic. You are the new operator of Aqua,", 10, 150);

        this.pencil.font = "35px Impact";
        this.pencil.fillText("a submarine designed to collect a daily quota of trash to help clean the ocean.", 10, 190);

        if(this.changeScreen){
            this.changeScreen = false;
            return "game";
        }
    }
}
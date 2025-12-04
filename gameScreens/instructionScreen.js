export class InstructionScreen{
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
        this.pencil.fillText("Instructions", 10, 100);

        this.pencil.font = "35px Impact";
        this.pencil.fillText("Sitting in the Pacific Ocean is an island of trash that contains around 1.8 trillion pieces of plastic. You are the new operator of Aqua,", 10, 150);

        this.pencil.font = "35px Impact";
        this.pencil.fillText("a submarine designed to collect a daily quota of trash to help clean the ocean.", 10, 190);

        this.pencil.font = "25px Impact";
        this.pencil.fillText("To move Aqua, use the up and down arrow keys to swim up and down.", 10, 250);

        this.pencil.fillText("The quota will be randomized each day. Collect enough trash in order to successfully complete your shift.", 10, 290);

        this.pencil.fillText("Be careful! There's still sea creatures living in the ocean. If you accidentally catch one, you'll lose a piece of trash when you let the creature go!", 10, 330);

        this.pencil.font = "50px Impact";
        this.pencil.fillText("Click the screen to continue", 600, 530);

        if(this.changeScreen){
            this.exit();
            return "game";
        }
    }
}
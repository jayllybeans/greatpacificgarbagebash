export class GameOverScreen {
    canvas;
    pencil;
    changeScreen = true;
    keysPressed = {};
    continue = "Enter";

    constructor(canvas, pencil){
        this.canvas = canvas;
        this.pencil = pencil;

        window.addEventListener("keydown", (e) => {
            this.keysPressed[e.key] = true;
        });

        window.addEventListener("keyup", (e) => {
            this.keysPressed[e.key] = false;
        });
    }

    enter() {
        this.changeScreen = true;
    }

    exit() {
        if (this.keysPressed[this.continue]) {
            this.changeScreen = false;
        }
    }

    update() {
        this.pencil.fillStyle = "white";
        this.pencil.font = "100px Impact";
        this.pencil.fillText("Game Over!", 500, 100);

        this.pencil.font = "35px Impact";
        this.pencil.fillText(
            "You caught too many sea creatures! It's okay. You can always try again with tomorrow's quota.", 200, 200
        );

        this.pencil.font = "50px Impact";
        this.pencil.fillText("Press the enter key to return to the title", 500, 530);

        this.exit();

        if (!this.changeScreen) {
            return "title";
        }
    }
}
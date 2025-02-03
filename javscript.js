btns = {
    rock : document.querySelector(".rock"),
    paper : document.querySelector(".paper"),
    scissors : document.querySelector(".scissors"),
}

// Begining
class gameLogic {
    div = document.querySelector(".mainbox");
    buttons = document.querySelectorAll(".mainbox button");
    p = document.createElement("p");
    para = document.createElement("p");
    para1 = document.createElement("p");
    userInput;
    round = 1;
    humanScore = 0;
    MachineScore = 0;

    constructor() {
        this.div.style.cssText = "margin: 0 auto; width: 30%; text-align: center;";
        this.p.style.marginBottom = '5px';
        this.para1.style.marginTop = '0';
        this.para.style.cssText = 'margin: 0 auto;';
        this.div.insertBefore(this.para1, this.div.firstChild);
        this.div.insertBefore(this.para, this.div.firstChild);
        this.div.insertBefore(this.p,  this.div.firstChild);
        this.buttons.forEach(btn => {
            btn.style.cssText = "width:70px; height:30px";
        });
        this.userInput = this.userInput
    }

    logic = () => {
        this.MachineChoise = Math.floor(Math.random() * 3);
        if (this.round == 6){
            return [this.p.textContent = `Game finished!!!`,
                    this.para.textContent = `Your score:${this.humanScore}`,
                    this.para1.textContent = `Computer's score:${this.MachineScore}`];
        }
        if (this.UserInput-1 == this.MachineChoise) {
            this.p.textContent = "Draw";
            this.round += 1;
        }
        if (this.UserInput == 1 && this.MachineChoise == 1) {
            this.p.textContent = "Computer won";
            this.round += 1;
            this.MachineScore += 1;
        }
        if (this.UserInput == 1 && this.MachineChoise == 2) {
            this.p.textContent = "You won";
            this.humanScore += 1
            this.round += 1;
        }
        if (this.UserInput == 2 && this.MachineChoise == 0) {
            this.p.textContent = "You won";
            this.humanScore += 1
            this.round += 1;
        }
        if (this.UserInput == 2 && this.MachineChoise == 2) {
            this.p.textContent = "Computer won";
            this.MachineScore += 1;
            this.round += 1;
        }
        if (this.UserInput == 3 && this.MachineChoise == 0) {
            this.p.textContent = "Computer won";
            this.MachineScore += 1;
            this.round += 1;
        }
        if (this.UserInput == 3 && this.MachineChoise == 1) {
            this.p.textContent = "You won";
            this.humanScore += 1
            this.round += 1;
        }
    }
}

const gameStart = new gameLogic();

btns.rock.addEventListener("click", () => {
    gameStart.UserInput = 1;
    gameStart.logic();
})
btns.paper.addEventListener("click", () => {
    gameStart.UserInput = 2;
    gameStart.logic();
})
btns.scissors.addEventListener("click", () => {
    gameStart.UserInput = 3;
    gameStart.logic();
})

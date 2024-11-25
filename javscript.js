const div = document.querySelector(".mainbox");
div.style.cssText = "margin: 0 auto; width: 30%; text-align: center;";
const buttons = document.querySelectorAll(".mainbox button");
const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
let p = document.createElement("p");
let para = document.createElement("p");
let para1 = document.createElement("p");
p.style.marginBottom = '5px';
para1.style.marginTop = '0';
para.style.cssText = 'margin: 0 auto;';
div.insertBefore(para1, div.firstChild);
div.insertBefore(para, div.firstChild);
div.insertBefore(p,  div.firstChild);
let userInput;
let round = 1;
let MachineChoise;
let humanScore = 0;
let MachineScore = 0;

buttons.forEach(btn => {
    btn.style.cssText = "width:70px; height:30px";
});

rock.addEventListener("click", () => {
    UserInput = 1;
    logic();
})
paper.addEventListener("click", () => {
    UserInput = 2;
    logic();
})
scissors.addEventListener("click", () => {
    UserInput = 3;
    logic();
})

// Begining
function logic() {
    MachineChoise = Math.floor(Math.random() * 3);
    if (round == 6){
        return [p.textContent = `Game finished!!!`,
                para.textContent = `Your score:${humanScore}`,
                para1.textContent = `Computer's score:${MachineScore}`];
    }
    if (UserInput-1 == MachineChoise) {
        p.textContent = "Draw";
        round += 1;
    }
    if (UserInput == 1 && MachineChoise == 1) {
        p.textContent = "Computer won";
        round += 1;
        MachineScore += 1;
    }
    if (UserInput == 1 && MachineChoise == 2) {
        p.textContent = "You won";
        humanScore += 1
        round += 1;
    }
    if (UserInput == 2 && MachineChoise == 0) {
        p.textContent = "You won";
        humanScore += 1
        round += 1;
    }
    if (UserInput == 2 && MachineChoise == 2) {
        p.textContent = "Computer won";
        MachineScore += 1;
        round += 1;
    }
    if (UserInput == 3 && MachineChoise == 0) {
        p.textContent = "Computer won";
        MachineScore += 1;
        round += 1;
    }
    if (UserInput == 3 && MachineChoise == 1) {
        p.textContent = "You won";
        humanScore += 1
        round += 1;
    }
}
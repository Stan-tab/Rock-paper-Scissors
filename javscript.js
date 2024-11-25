let UserInput = parseInt(prompt("Round 1\nInput Rock-1; Paper-2; Scissors-3:"));
let MachineChoise = Math.floor(Math.random() * 3);
let humanScore = 0;
let MachineScore = 0;
round = 1;

function start () {
    if (round == 6){
        return alert(`Gave finished\n Your score:${humanScore}\n Computer's score:${MachineScore}`)
    }
    UserInput = parseInt(prompt(`Round ${round}\nInput Rock-1; Paper-2; Scissors-3:`));
    MachineChoise = Math.floor(Math.random() * 3);
    return check(UserInput, MachineChoise)
}

function check(UserInput, MachineChoise) {
    if (UserInput-1 == MachineChoise) {
        alert("Draw")
        round += 1;
        return start()
    }
    if (UserInput == 1 && MachineChoise == 1) {
        alert("Machine won")
        round += 1;
        MachineScore += 1;
        return start()
    }
    if (UserInput == 1 && MachineChoise == 2) {
        alert("You won")
        humanScore += 1
        round += 1;
        return start()
    }
    if (UserInput == 2 && MachineChoise == 0) {
        alert("You won")
        humanScore += 1
        round += 1;
        return start()
    }
    if (UserInput == 2 && MachineChoise == 2) {
        alert("Machine won")
        MachineScore += 1;
        round += 1;
        return start()
    }
    if (UserInput == 3 && MachineChoise == 0) {
        alert("Machine won")
        MachineScore += 1;
        round += 1;
        return start()
    }
    if (UserInput == 3 && MachineChoise == 1) {
        alert("You won")
        humanScore += 1
        round += 1;
        return start()
    }
    alert("Not available value\nPlease write from 1 to 3")
    return start()
}

check(UserInput, MachineChoise)
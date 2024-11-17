let UserInput = parseInt(prompt("Input Rock-1; Paper-2; Scissors-3:"));
let MachineChoise = Math.floor(Math.random() * 3);

function start () {
    UserInput = parseInt(prompt("Input Rock-1; Paper-2; Scissors-3:"));
    MachineChoise = Math.floor(Math.random() * 3);
    return check(UserInput, MachineChoise)
}

function check(UserInput, MachineChoise) {
    if (UserInput-1 == MachineChoise) {
        alert("Draw")
        return start()
    }
    if (UserInput == 1 && MachineChoise == 1) {
        alert("Machine won")
        return start()
    }
    if (UserInput == 1 && MachineChoise == 2) {
        alert("You won")
        return start()
    }
    if (UserInput == 2 && MachineChoise == 0) {
        alert("You won")
        return start()
    }
    if (UserInput == 2 && MachineChoise == 2) {
        alert("Machine won")
        return start()
    }
    if (UserInput == 3 && MachineChoise == 0) {
        alert("Machine won")
        return start()
    }
    if (UserInput == 3 && MachineChoise == 1) {
        alert("You won")
        return start()
    }
    alert("Not available value\nPlease write from 1 to 3")
    // return start()
}

check(UserInput, MachineChoise)
let player_Selection = " ";
let computer_Selection = " ";
let computer_choice = " ";
let i = 1;
let weight = 0;

// Play 5 rounds of RPS
for (i; i <= 5; i++) {
    player_Selection = prompt("Rock, paper, or scissors?").toLowerCase();
    computer_Selection = getComputerChoice();

    weight = rpsGame(player_Selection, computer_Selection);
    console.log(weight);
    weight += weight;
}

// Select RPS Winner
if (weight > 0) {
    console.log("Player is the winner!");
}
else if (weight < 0) {
    console.log("NPC is the winner!")
}
else {
    console.log("No Winner!");
};

/// <---------- FUNCTIONS BELOW ---------->
// Random generator
function getComputerChoice() {
    const random_num = Math.floor(Math.random() * 3 + 1);
    // console.log(random_num);

    switch (true) {
        case random_num == 1:
            computer_choice = "rock";
            break;
        case random_num == 2:
            computer_choice = "paper";
            break;
        default:
            computer_choice = "scissors";
    };
    return computer_choice;
};

// Rock paper scissor game logic
function rpsGame(player_Selection, computer_Selection) {
    console.log("Computer Selection: " + computer_Selection + " || Player Selection: " + player_Selection);
    if (computer_Selection == player_Selection) {
        console.log("Draw");
        return 0;
    }
    else {
        if (computer_Selection == "rock") {
            if (player_Selection == "paper") {
                console.log("Player wins")
                return 1;
            } else {
                console.log("Com Wins");
                return -1;
            };
        };
        if (computer_Selection == "paper") {
            if (player_Selection == "scissors") {
                console.log("Player wins")
                return 1;
            } else {
                console.log("Com Wins");
                return -1;
            };
        };
        if (computer_Selection == "scissors") {
            if (player_Selection == "rock") {
                console.log("Player wins")
                return 1;
            } else {
                console.log("NPC Wins");
                return -1;
            };
        };
    };

}


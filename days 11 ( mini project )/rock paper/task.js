// ساختار های شرطی

const game = ["rock", "paper", "scissor"];

let playerScore = 0;
let computerScore = 0;

let randNumber = Math.random() * 2;
randNumber = Number(randNumber.toFixed());


let userSelect = prompt("0 rock, 1 paper, 2 scissor");
userSelect = Number(userSelect);

// console.log(typeof randNumber);
// console.log(typeof userSelect);


if (!isNaN(userSelect) && userSelect >= 0 && userSelect < 3) {

    switch (userSelect) {
        case 0:
            if (randNumber === 0) {
                console.log(`drow \ncomputer: ${game[randNumber]} \nplayer: ${game[userSelect]}`)
                playerScore += 1;
                computerScore += 1;
            } else if (randNumber === 1) {
                console.log(`computer winner \ncomputer: ${game[randNumber]} \nplayer: ${game[userSelect]}`)
                computerScore += 1;
            } else if (randNumber === 2) {
                console.log(`player winner \ncomputer: ${game[randNumber]} \nplayer: ${game[userSelect]}`)
                playerScore += 1;
            }
            break;

        case 1:
            if (randNumber == 0) {
                console.log(`player winner \ncomputer: ${game[randNumber]} \nplayer: ${game[userSelect]}`)
            } else if (randNumber == 1) {
                console.log(`drow \ncomputer: ${game[randNumber]} \nplayer: ${game[userSelect]}`)
            } else if (randNumber == 2) {
                console.log(`computer winner \ncomputer: ${game[randNumber]} \nplayer: ${game[userSelect]}`)
            }
            break;

        case 2:
            if (randNumber == 0) {
                console.log(`computer winner \ncomputer: ${game[randNumber]} \nplayer: ${game[userSelect]}`)
            } else if (randNumber == 1) {
                console.log(`player winner \ncomputer: ${game[randNumber]} \nplayer: ${game[userSelect]}`)
            } else if (randNumber == 2) {
                console.log(`drow \ncomputer: ${game[randNumber]} \nplayer: ${game[userSelect]}`)
            }
            break;

    }
    // console.log(game[userSelect]);
} else {
    console.log("Wrong input");
}

console.log(`playerScore: ${playerScore} \ncomputerScore: ${computerScore}`)



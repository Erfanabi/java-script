const game = ["rock", "paper", "scissor"];


let num = Math.floor((Math.random() * 3));

let userPlayer = prompt("rock , paper , scissor").toLowerCase();



if (userPlayer === "rock") {

    if (game[num] === "rock") {
        console.log(`drow \ncomputer: ${game[num]} \nplayer: ${userPlayer}`)
    }
    else if (game[num] === "paper") {
        console.log(`computer winner \ncomputer: ${game[num]} \nplayer: ${userPlayer}`)
    }
    else if (game[num] === "scissor") {
        console.log(`player winner \ncomputer: ${game[num]} \nplayer: ${userPlayer}`)
    }

} else if (userPlayer === "rock") {

} else if (userPlayer === "rock") {

}

console.log(num);
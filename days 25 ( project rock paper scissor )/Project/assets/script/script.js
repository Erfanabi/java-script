// const img = document.getElementsByClassName("img");

// for (let arr of img){
//     arr.addEventListener("click",function(){
//         arr.classList.add("active-player");
//     })
// }

const divImage = document.getElementsByClassName("image");
const gameBoard = document.getElementsByClassName("game-board")[0];
const start = document.getElementsByClassName("start")[0];
const btnStart = document.querySelector(".start > button");

const winner = document.querySelector("#winner > span");
const playerScore = document.getElementById("player-score-number");
const drowScore = document.getElementById("drow-score-number");
const computerScore = document.getElementById("computer-score-number");


btnStart.addEventListener("click",function(){
    start.classList.add("d-none");
    gameBoard.classList.remove("d-none");
})


function createRandom() {
    let randNumber = Math.floor(Math.random() * 3);
    return randNumber;
}


function clear() {
    for (let btnImage of divImage) {
        // console.log(i);
        btnImage.childNodes[1].classList.add("img");

        if (btnImage.childNodes[1].classList.contains("active-player")) {
            btnImage.childNodes[1].classList.remove("active-player");
        }

        if (btnImage.childNodes[1].classList.contains("active-cpu")) {
            btnImage.childNodes[1].classList.remove("active-cpu");
        }

        if (btnImage.childNodes[1].classList.contains("active-draw")) {
            btnImage.childNodes[1].classList.remove("active-draw");
        }
    }
}

var player = 0;
var drow = 0;
var computer = 0;

function rules(player, cpu) {
    if (player == cpu) {
        winner.innerHTML = "Drow";
        divImage[cpu].childNodes[1].classList.add("active-draw");
        drow++;
        drowScore.innerHTML = drow;
    }

    else if (player == 0) {
        if (cpu == 1) {
            winner.innerHTML = "Player";
            player++;
            playerScore.innerHTML = player;
        }
        else if (cpu == 2) {
            winner.innerHTML = "CPU";
            computer++;
            computerScore.innerHTML = computer;
        }
    }

    else if (player == 1) {
        if (cpu == 2) {
            winner.innerHTML = "Player";
            player++;
            playerScore.innerHTML = player;
        }
        else if (cpu == 0) {
            winner.innerHTML = "CPU";
            computer++;
            computerScore.innerHTML = computer;
        }
    }

    else if (player == 2) {
        if (cpu == 1) {
            winner.innerHTML = "CPU";
            computer++;
            computerScore.innerHTML = computer;
        }
        else if (cpu == 0) {
            winner.innerHTML = "Player";
            player++;
            playerScore.innerHTML = player;
        }
    }
}


for (let i in divImage) {
    divImage[i].addEventListener("click", function () {
        clear()

        let computerSelect = createRandom();

        divImage[i].childNodes[1].classList.add("active-player");
        divImage[i].childNodes[1].classList.remove("img");

        divImage[computerSelect].childNodes[1].classList.add("active-cpu");
        divImage[computerSelect].childNodes[1].classList.remove("img");

        rules(i, computerSelect);
    })
}


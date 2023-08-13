const scoreBoard = document.getElementById("score-board");
const container = document.getElementById("container");
const timer = document.getElementById("timer");
const timerMilliSeconds = document.getElementById("milliseconds");
const timerSeconds = document.getElementById("seconds");
const record = document.getElementById("record");
const btnReset = document.getElementById("btn");

let count = 0;
let clickNumbers = 0;


container.onclick = function () {
    timer.classList.remove("d-none");

    if (clickNumbers == 0) {
        time();
        click();
    }
    else if (count < 5) {
        click();
    }
}

btnReset.onclick = function () {
    reset();
};

function reset() {
    count = 0;
    clickNumbers = 0;
    timer.classList.add("d-none");
    btnReset.classList.add("d-none");
    record.classList.add("d-none");
    container.classList.remove("d-none");
    scoreBoard.childNodes[1].childNodes[1].innerText = clickNumbers;
    timerSeconds.innerText = count;
}

function click() {
    clickNumbers++;
    // scoreBoard.innerHTML = `
    // <h2>Your CPS Test Score: <span>${clickNumbers}</span></h2>
    // `
    scoreBoard.childNodes[1].childNodes[1].innerText = clickNumbers;
}

function time() {
    timerMilliSeconds.innerText = "start";
    let stopSetInterval = setInterval(() => {
        count++;
        timerSeconds.innerText = count;
        if (count == 5) {
            clearInterval(stopSetInterval);
            timerMilliSeconds.innerText = "end!"
            container.classList.add("d-none");
            record.classList.remove("d-none");
            let cps = (clickNumbers / 5).toFixed(1);
            record.childNodes[1].innerText = cps;
            btnReset.classList.remove("d-none");
        }
    }, 1000)
}

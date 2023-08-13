const wordsArray = ["hello", "world", "python", "glad", "yourself", "there", "are", "also", "words", "you", "already", "know", "for", "instance", "the", "latest", "update", "of", "the", "oxford", "english", "dictionary", "added", "new", "english", "like", "banana", "bread"];

const words = document.getElementById("words");
const timerSpan = document.querySelector("#timer span");
const inputText = document.getElementById("test-input");
const timerDiv = document.getElementById("timer");

const listOfWords = document.getElementsByClassName("word");

const wordsMin = document.getElementById("words-min");
const charsMin = document.getElementById("chars-min");

let woorMin = 0;
let chaarMin = 0;

window.onload = function () {
    for (let word of wordsArray) {
        let wordDiv = document.createElement("div");
        wordDiv.setAttribute("class", "word");
        wordDiv.innerText = word;
        words.appendChild(wordDiv);
    }
}

inputText.onkeydown = function (e) {
    if (e.keyCode == 8) {
        e.preventDefault();
    }
}


let wordsCounter = 0;

inputText.onkeyup = function (e) {
    chaarMin += 1;
    charsMin.innerText = chaarMin;
    timer();
    let charInput = String.fromCharCode(e.keyCode).toLowerCase();
    let firstChar = listOfWords[wordsCounter].innerText[0];

    if (charInput === firstChar) {
        listOfWords[wordsCounter].innerText = listOfWords[wordsCounter].innerText.replace(firstChar, "");
        if (listOfWords[wordsCounter].innerText.length === 0) {
            inputText.value += " "
            wordsCounter++;
            woorMin += 1;
            wordsMin.innerText = woorMin;
        }
        inputText.style.color = "green";
    }

    else {
        if (e.keyCode != 8) {
            inputText.style.color = "yellow";
        }
    }
}



function timer() {
    let currentTime = Number(timerSpan.innerText);
    let time = setInterval(() => {
        currentTime -= 1;
        if (currentTime == 0) {
            clearInterval(time);
            timerDiv.style.backgroundColor = "red";
            timerDiv.style.color = "white";
            inputText.disabled = true;
        }
        timerSpan.innerText = currentTime;
    }, 1000)
}


// function timer() {
//     let second = Number(timerSpan.innerText);
//     let stopInterval = setInterval(() => {
//         if (second == 0) {
//             timerSpan.innerText = 0;
//             timerDiv.style.backgroundColor = "red";
//             timerDiv.style.color = "white";
//             clearInterval(stopInterval);
//         }
//         timerSpan.innerText = second;
//         second--;
//     }, 1000)
// }




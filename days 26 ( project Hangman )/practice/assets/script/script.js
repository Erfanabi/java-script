const alpha = "abcdefghijklmnopqrstuvwxyz "

const boxWords = document.getElementById("words");
const quessDiv = document.getElementsByClassName("quess").item(0);
const hangman = document.getElementsByClassName("hangman").item(0);

boxWordsChild = document.getElementsByClassName("box");





let quessWord;
let dashNew;

howDashNeed();
function howDashNeed() {

    const quess = ["erfan", "script", "code", "car"];
    let randNum = Math.floor(Math.random() * quess.length);
    let randQuess = quess[randNum];

    let dash = "-";
    for (let i = 1; i < randQuess.length; i++) {
        dash += "-"
    }
    quessDiv.innerHTML = dash;

    quessWord = randQuess;
    dashNew = dash;

    // var arr = new Array(randQuess.length);
    // arr.fill("-");
    // var arr = arr.join("");
}


createBox();
function createBox() {
    let arr = alpha.split("");
    for (let char of arr) {
        let box = document.createElement("div");
        box.setAttribute("class", "box hover");
        box.innerHTML = char;
        boxWords.appendChild(box);
    }
}

includesBoxInner();
function includesBoxInner() {
    let count = 1;
    dashNew = dashNew.split("");
    for (let box of boxWordsChild) {
        box.onclick = function () {
            box.classList.remove("hover");

            if (quessWord.includes(box.innerHTML)) {
                box.classList.add("box-select");

                let findWords = box.innerHTML;

                let indexFindWords = quessWord.indexOf(findWords);

                dashNew[indexFindWords] = findWords;
                quessDiv.innerHTML = dashNew.join("");
            }
            else {
                box.classList.add("box-delete");

                let hangmanDiv = document.createElement("div");
                hangmanDiv.setAttribute("class", `hang-lv${count}`);

                hangman.appendChild(hangmanDiv);

                count++;

                if (count == 8) {
                    alert("You Lose");
                }
            }
        }
    }
}



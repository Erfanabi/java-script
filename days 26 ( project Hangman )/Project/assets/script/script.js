// const alpha = "ضصثقفغژعهخحجچپگکمنتالبیسشظطزرذدئ";
const alpha = "abcdefghijklmnopqrstuvwxyz ";
const arrAlpha = alpha.split("");

const words = document.getElementById("words");
const divQuess = document.getElementsByClassName("quess")[0];

const hangman = document.querySelector(".hangman");

const boxes = document.getElementsByClassName("box");

function creareButton() {
    for (let char of arrAlpha) {
        let box = document.createElement("div");
        box.setAttribute("class", "box");
        box.classList.add("hover3");
        box.innerHTML = char;
        words.appendChild(box);
    }
}


function howDashNeed() {
    const quess = ["erfan", "script", "code", "car"]


    let randNum = Math.floor(Math.random() * quess.length);
    let randQuess = quess[randNum];
    let lengthRandQuess = randQuess.length;

    let arrDash = new Array(lengthRandQuess);
    arrDash.fill("-");
    result = arrDash.join("");


    divQuess.innerHTML = result

    // let result =""
    // for (let char of randQuess) {
    //     result += "-";
    // }
    // divQuess.innerHTML = result
    clickBox(randQuess);
}


creareButton();
howDashNeed();

function clickBox(word) {
    let arr = result.split("");
    let i = 1;
    for (let box of boxes) {
        box.addEventListener("click", function () {
            box.classList.remove("hover3");
            charBox = box.innerHTML;

            if (word.includes(charBox)) {
                box.classList.add("box-select");

                let indOF = word.indexOf(charBox);
                arr[indOF] = charBox;
                // console.log(arr);
                let str = arr.join("");
                // console.log(str);
                divQuess.innerHTML = str;

                if (word == str) {
                    alert("game over!");
                }

            } else {
                box.classList.add("box-delete");

                let hang = document.createElement("div");
                hang.setAttribute("class", `hang-lv${i}`);
                i++;
                hangman.appendChild(hang);
                if (i == 8) {
                    alert("you lose");
                }
            }

        })
    }
}


function replaceMent(indOf, charBox, word) {
    // console.log(indOf);
    // console.log(charBox);
    // console.log(result);
    // console.log(word);
}




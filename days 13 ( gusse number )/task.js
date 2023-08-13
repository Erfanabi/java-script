
let number = Math.floor((Math.random() * 10 + 1));

let guessNumber;
let isEnd = false;
let guessCount = 0;

do {
    guessNumber = Number(prompt("Enter number 1 to 10"));
    guessCount++;
    if (guessNumber > 10 || guessNumber < 1 || isNaN(guessNumber)) {
        console.log("Wrong input!");
        isEnd = true;
    }

    let diffrence = number - guessNumber;

    if (diffrence > 0) {
        console.log("too Low")
    } else if (diffrence < 0) {
        console.log("too High")
    } else {
        console.log(`you won is ${guessCount} guesses! answer is ${number}`)
        isEnd = true;
    }

} while (!isEnd && guessCount <= 5)


console.log("Game Over!");
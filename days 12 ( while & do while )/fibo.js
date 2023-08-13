// 0 1 1 2 3 5 8 13 21

let inputUser = prompt("Enter your number");

const fibonacciArray = [];

let f1 = 0;
let f2 = 1;
let f3;

// fibonacciArray.push(f1, f2);


while (inputUser > 0) {
    fibonacciArray.push(f1);

    f3 = f1 + f2;

    f1 = f2;
    f2 = f3;

    // fibonacciArray.push(f3);

    inputUser--;
}


console.log(fibonacciArray);

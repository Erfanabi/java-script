// Loops

// while loop

// let x = 1;

// while (x <= 10) {
//     console.log(x);
//     ++x;
// }


let someArray = ["Mike", "Antal", "Marc", "Emir", "Louiza", "Jacky"];
// let cont = 0;


// while (cont < someArray.length) {
//     console.log(someArray[cont]);

//     if (someArray[cont] == "Louiza") {
//         break;
//     }

//     cont++;

// }

let found = true;
while (found && someArray.length > 0) {
    if (someArray[0] == "Emir") {
        console.log("Founded!")
        found = false;
    }

    else {
        someArray.shift();
    }
}

// console.log("Finish");

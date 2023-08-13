// do while

let userSelect;

do {
    userSelect = prompt("0 rock, 1 paper, 2 scciser");
    userSelect = Number(userSelect);
} while (userSelect > 3 || userSelect < 0 || isNaN(userSelect))

console.log(`correct input: ${userSelect}`);
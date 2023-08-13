




function sayHello() {
    let name = prompt("Please enter your name!");
    name = name.toUpperCase()
    console.log(`Hellow ${name}`);
}


// sayHello();


// function addTwoNumber(num1, num2) {
//     let result = num1 + num2;
//     // console.log(result);
//     return result
// }

// console.log(addTwoNumber(5, 6))


// function addTwoNumber(num1 = 1, num2 = 2) {
//     let result = num1 + num2;
//     // console.log(result);
//     return result
// }

// console.log(addTwoNumber(5))


// let addTwoNumber = (num1, num2) => {
//     let result = num1 + num2;
//     console.log(result);
// }

const names = ["Ali", "Erfan", "Reza", "Saeed"];

// names.forEach(function arr(names) {
//     console.log(names)
// })

names.forEach(name => console.log(name));

// names.forEach(name => console.log(name));


// function nam(arr){
//     console.log(arr)
// }

// nam(names)